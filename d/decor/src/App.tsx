import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import CartPage from "./pages/Cart";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignupPage";
import ProductListing from "./pages/new-arrivals";
import SearchPage from "./pages/SearchPage";
import Bedroom from "./pages/Bedroom";
import CategoryBedroom from "./pages/CategoryBedroom";
import Livingroom from "./pages/Livingroom";
import CategoryPage from "./pages/Categorypage";





function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Layout/>} >
         <Route path="" element={<HomePage/>} />
         <Route path="/cart" element={<CartPage/>} />
        
         
         <Route path="/new-arrivals" element={<ProductListing/>} />
         <Route path="/search" element={<SearchPage />} />
         <Route path="/Bedroom" element={<Bedroom/>} />
         <Route path="/CategoryBedroom" element={<CategoryBedroom/>} />
         <Route path="/Livingroom" element={<Livingroom/>} />
         <Route path="/Categorypage" element={<CategoryPage/>} />
         
          
          
          



         </Route>
         <Route path="/SignupPage" element={<SignUpPage/>} />
          <Route path="/LoginPage" element={<LoginPage/>} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;