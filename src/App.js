import Layout from "./ui/Layout";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import {Fragment} from "react";

function App() {
  return (

      <Fragment>
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
          </Routes>
        </Layout>
      </Fragment>
  );
}

export default App;
