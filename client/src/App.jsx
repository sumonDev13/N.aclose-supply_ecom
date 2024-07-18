import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Layout from "./layouts/Layout";

function App() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [pathname]);
    return (
        <>
            <Layout />
        </>
    );
}

export default App;
