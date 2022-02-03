import Layout from "./ui/Layout";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import {Fragment, useEffect} from "react";
import LoginPage from "./pages/LoginPage";
import {onAuthStateChanged} from "firebase/auth";
import {setActiveUser, setUserLoggedOut} from "./store/userSlice";
import {auth} from "./firebase/firebase";
import {useDispatch} from "react-redux";
import MyAccountPage from "./pages/MyAccountPage";
import RequireAuth from "./router/RequireAuth";
import AboutPage from "./pages/AboutPage";
import DayTimePicker from "./components/Planner/DayTimePicker";
import MealPicker from "./components/Planner/MealPicker/MealPicker";
import PlannerIntroduction from "./components/Planner/PlannerIntroduction";
import IngredientsPicker from "./components/Planner/IngredientsPicker/IngredientsPicker";


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
                <Route path="/account" element={<RequireAuth><MyAccountPage/></RequireAuth>}/>
                <Route path="/planner">
                    <Route index element={<PlannerIntroduction/>}/>
                    <Route path=":day" element={<DayTimePicker/>}/>
                    <Route path=":day/:meal">
                        <Route index element={<MealPicker/>}/>
                        <Route path="ingredients" element={<IngredientsPicker/>}/>
                    </Route>
                </Route>
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>
        </Layout>
      </Fragment>
  );
}

export default App;
