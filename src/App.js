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
import DayTimePicker from "./components/Planner/DayTimePicker/DayTimePicker";
import MealPicker from "./components/Planner/MealPicker/MealPicker";
import DayPicker from "./components/Planner/DayPicker/DayPicker";
import IngredientsPicker from "./components/Planner/IngredientsPicker/IngredientsPicker";
import {createUser} from "./firebase/firestore-functions";


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                dispatch(setActiveUser(
                    {userEmail: user.email, userUid: user.uid}
                ))
                createUser(user.uid).catch(error => console.log(error));
            } else {
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
                        <Route index element={<RequireAuth><DayPicker/></RequireAuth>}/>
                        <Route path=":day" element={<RequireAuth><DayTimePicker/></RequireAuth>}/>
                        <Route path=":day/:meal">
                            <Route index element={<RequireAuth><MealPicker/></RequireAuth>}/>
                            <Route path="ingredients" element={<RequireAuth><IngredientsPicker/></RequireAuth>}/>
                        </Route>
                    </Route>
                    <Route path="/about" element={<AboutPage/>}/>
                </Routes>
            </Layout>
        </Fragment>
    );
}

export default App;
