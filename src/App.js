import Layout from "./ui/Layout";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import {Fragment, useEffect} from "react";
import LoginPage from "./pages/LoginPage";
import Footer from "./ui/Footer/Footer"
import {onAuthStateChanged} from "firebase/auth";
import {setActiveUser, setUserLoggedOut} from "./store/userSlice";
import { getAuth } from "firebase/auth";
import {useDispatch} from "react-redux";


function App() {
    const auth = getAuth();
    const dispatch = useDispatch();

 useEffect(() => {
     onAuthStateChanged(auth, user => {
         if (user) {
         alert("onAuthStateChanged login")
             const userEmail = user.email;
             dispatch(setActiveUser({userEmail}))
         }
         else {
             alert("onAuthStateChanged not logged in")
             dispatch(setUserLoggedOut())
         }
     })
 }, [auth, dispatch])

  return (
      <Fragment>
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
          </Routes>
        </Layout>
      </Fragment>
  );
}

export default App;
