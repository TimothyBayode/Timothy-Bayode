import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import Playground from "./pages/Playground";
import Snowfall from "react-snowfall";
export function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </Layout>
      <Snowfall
        color="white"
        snowflakeCount={100}
        speed={[1, 3]}
        wind={[-0.5, 2]}
        radius={[0.5, 3]}
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          zIndex: 9999,
        }}
      />
      <ScrollToTop />
    </Router>
  );
}
