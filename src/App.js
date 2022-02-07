import Layout from "./ui/Layout";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import {Fragment} from "react";
import LoginPage from "./pages/LoginPage";
import MyAccountPage from "./pages/MyAccountPage";
import RequireAuth from "./router/RequireAuth";
import AboutPage from "./pages/AboutPage";
import DayTimePicker from "./components/Planner/DayTimePicker/DayTimePicker";
import MealPicker from "./components/Planner/MealPicker/MealPicker";
import DayPicker from "./components/Planner/DayPicker/DayPicker";
import IngredientsPicker from "./components/Planner/IngredientsPicker/IngredientsPicker";
import NamePicker from "./components/Planner/NamePicker/NamePicker";
import useAuthState from "./hooks/use-auth-state";


function App() {
    useAuthState();

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
                        <Route path="name" element={<RequireAuth><NamePicker/></RequireAuth>}/>
                    </Route>
                    <Route path="/about" element={<AboutPage/>}/>
                </Routes>
            </Layout>
        </Fragment>
    );
}

export default App;
