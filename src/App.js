import Layout from "./ui/Layout";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import {Fragment} from "react";
import LoginPage from "./pages/LoginPage";

function App() {
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
