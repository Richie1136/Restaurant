import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import MainCourse from "../maincourse/MainCourse";
import Navigation from "../navigation/Navigation";
import Recipe from "../recipe/Recipe";

const AllRoutes = () => (
  <>
    <Navigation />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/main' element={<MainCourse />} />
      <Route path="/recipe/:id" element={<Recipe />} />
    </Routes>
  </>
)

export default AllRoutes