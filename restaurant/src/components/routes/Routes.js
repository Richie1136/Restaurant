import { Routes, Route } from "react-router-dom";
import MainCourse from "../maincourse/MainCourse";
import Recipe from "../recipe/Recipe";
import Appetizer from "../appetizer/Appetizer";
import Dessert from "../dessert/Dessert";
import Beverage from "../beverage/Beverage";
import Searched from "../searched/Searched";
import Search from "../search/Search";
import Header from "../header/Header";
import Random from "../random/Random";
import Auth from "../auth/Auth";

const AllRoutes = () => (
  <>
    <Routes>
      <Route path='/random' element={<><Search />,<Random /></>} />
      <Route path='/' element={<Auth />} />
      <Route path='/main' element={<><Search />, <MainCourse /></>} />
      <Route path="/recipe/:id" element={<><Search />, <Recipe /></>} />
      <Route path='/apps' element={<><Search />, <Appetizer /></>} />
      <Route path='/dessert' element={<><Search />, <Dessert /></>} />
      <Route path='/beverages' element={<><Search />, <Beverage /></>} />
      <Route path='/searched/:search' element={<><Search />, <Searched /></>} />
    </Routes>
  </>
)

export default AllRoutes