import { Outlet, useLocation } from "react-router-dom";
import Header from '../Component/Include/Header'
import Footer from '../Component/Include/Footer'
// import Header2 from "../Component/Include/Header2";
// import Footer2 from "../Component/Include/Footer2";

export default function Main() {
    // const location = useLocation();
    // const isHome = location.pathname === '/';
    // const isHome2 = location.pathname === '/home_2';
    // const isHome3 = location.pathname === '/home_3';
    return (
        <>
            {/* {
                isHome ? <Header></Header> : ''
            }
            {
                isHome2 ? <Header2></Header2> : <Header></Header>
            }
            {

                isHome3 ? 'home 333 header' : <Header></Header>
            } */}
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            {/* {
                isHome ? <Footer></Footer> : ''
            }
            {
                isHome2 ? <Footer2></Footer2> : <Footer></Footer>
            }
            {
                isHome3 ? 'home 333 header' : <Footer></Footer>
            } */}

        </>
    )
}