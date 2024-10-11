import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "../Pages/Home"
import NotFound from "../Pages/NotFound/NotFound"

import Nav from "../Components/Nav/Nav"
import Footer from "../Components/Footer/Footer"

import Header from "../Components/Header/Header";
export default function Router(){
    return(
        <>
            <BrowserRouter>
            <Nav />
            <Header/>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}