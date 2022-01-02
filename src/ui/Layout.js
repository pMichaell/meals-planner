import Header from "./Header/Header";
import {Fragment, useState} from "react";

const Layout = props => {
    const [sideMenuVisible, setSideMenuVisible] = useState(false);

    return (
        <Fragment>
            <Header/>
            <main>{props.children}</main>
        </Fragment>
    )
}

export default Layout;