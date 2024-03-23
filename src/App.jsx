import { Routes, Route, BrowserRouter } from "react-router-dom";
import Services from "./components/Services";
// import CarouselContainer from './components/CarouselContainer'
import Body from "./components/Body";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/services/:id" element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
