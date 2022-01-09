import Layout from "./ui/Layout";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import {Fragment, useEffect} from "react";
import LoginPage from "./pages/LoginPage";
import Footer from "./ui/Footer/Footer"
import {onAuthStateChanged} from "firebase/auth";
import {setActiveUser, setUserLoggedOut} from "./store/userSlice";
import {auth} from "./firebase/firebase";
import {useDispatch} from "react-redux";
import MyAccountPage from "./pages/MyAccountPage";
import RequireAuth from "./router/RequireAuth";
import PlannerPage from "./pages/PlannerPage";


function App() {
    const dispatch = useDispatch();


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user) {
                dispatch(setActiveUser({userEmail: user.email}))
            }
            else {
                dispatch(setUserLoggedOut())
            }
        })
    }, [dispatch])

  return (
      <Fragment>
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
              <RequireAuth><Route path="/account" element={<MyAccountPage/>}/></RequireAuth>
              <RequireAuth><Route path="/planner" element={<PlannerPage/>}/></RequireAuth>
          </Routes>
        </Layout>
      </Fragment>
  );
}

export default App;
