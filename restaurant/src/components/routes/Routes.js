import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import MainCourse from "../maincourse/MainCourse";
import Navigation from "../navigation/Navigation";
import Recipe from "../recipe/Recipe";
import Appetizer from "../appetizer/Appetizer";
import Dessert from "../dessert/Dessert";

const AllRoutes = () => (
  <>
    <Navigation />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/main' element={<MainCourse />} />
      <Route path="/recipe/:id" element={<Recipe />} />
      <Route path='/apps' element={<Appetizer />} />
      <Route path='/dessert' element={<Dessert />} />
    </Routes>
  </>
)

export default AllRoutes