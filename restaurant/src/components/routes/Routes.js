import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import MainCourse from "../maincourse/MainCourse";
import Navigation from "../navigation/Navigation";
import Recipe from "../recipe/Recipe";
import Appetizer from "../appetizer/Appetizer";
import Dessert from "../dessert/Dessert";
import Beverage from "../beverage/Beverage";
import Searched from "../searched/Searched";
import Search from "../search/Search";

const AllRoutes = () => (
  <>
    <Navigation />
    <Search />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/main' element={<MainCourse />} />
      <Route path="/recipe/:id" element={<Recipe />} />
      <Route path='/apps' element={<Appetizer />} />
      <Route path='/dessert' element={<Dessert />} />
      <Route path='/beverages' element={<Beverage />} />
      <Route path='/searched/:search' element={<Searched />} />
    </Routes>
  </>
)

export default AllRoutes