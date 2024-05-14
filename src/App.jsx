import { Routes, Route } from "react-router-dom";
// import "./style/App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Navbar from "./Components/Navbar";
import Four04 from "./pages/Four04";
import Data from "./Data/Implement_Data";
import IndieProduct from "./pages/IndieProduct";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/" element={<Products />} />
        {Data.map((val) => {
          return (
            <>
              <Route
                path={`/product/${val.nameEng}`}
                element={
                  <IndieProduct
                    name={val.name}
                    img={val.imgUrl}
                    content={val.content}
                    table={val.page}
                  />
                }
              />
              <Route
                path={"/product/" + val.nameEng2}
                element={
                  <IndieProduct
                    name={val.name2}
                    img={val.imgUrl2}
                    content={val.content2}
                    pos={true}
                    table={val.page2}
                  />
                }
              />
            </>
          );
        })}

        <Route path="*" element={<Four04 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
