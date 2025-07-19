import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import HeaderTop from "../components/HeaderTop";

const RootLayout = () => {
    return (
        <div>
            <HeaderTop />
            <Header />
            <Outlet />
        </div>
    );
};

export default RootLayout;
