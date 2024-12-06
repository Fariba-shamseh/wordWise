import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Product from "./pages/Product.jsx";
import Pricing from "./pages/Pricing.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";


export default function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="product" element={<Product />}/>
                <Route path="pricing" element={<Pricing />}/>
                <Route path="app" element={<AppLayout />}/>
                <Route path="*" element={<PageNotFound />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}