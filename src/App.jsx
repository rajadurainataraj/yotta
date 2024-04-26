/* eslint-disable no-unused-vars */
import {
  Routes,
  Route,
  BrowserRouter,
  useParams,
  useLocation,
} from "react-router-dom";
import Services from "./components/Services";
// import CarouselContainer from './components/CarouselContainer'
import Body from "./components/Body";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useRecoilState } from "recoil";
import { count } from "./components/utils/globalState";

const App = () => {
  const [counts, setCounts] = useRecoilState(count);
  const currentPath = window.location.pathname;
  console.log(currentPath);
  console.log(counts);
  return (
    <BrowserRouter>
      {counts > 0 && currentPath === "/" ? null : <Header />}
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Body />} />

        <Route path="/services/:id" element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
