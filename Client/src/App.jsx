
import {  Routes, Route } from "react-router-dom";
import './App.css'
import { HomePage } from "./Pages/HomePage";
import AddProduct from "./Pages/AddProduct";
import NotFound from "./Pages/NotFound";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import Header from "./Layouts/Header";


function App() {


  return (
    <>
   <Header/>
      <Routes>
<Route path= "/" element={<HomePage />}/> 
<Route path= "/add-product"element={<AddProduct />}/> 
<Route path= "/products/:id" element={<ProductDetailsPage />}/> 
<Route path= "/+" element={<NotFound />}/> 

      </Routes>
      
    </>
  )
}

export default App
