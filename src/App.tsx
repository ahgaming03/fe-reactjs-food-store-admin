import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Dashboard from "@/routes/Dashboard";
import Blank from "@/routes/_blank";
import NotFound from "@/routes/NotFound";
import About from "@/routes/About";
import Contact from "@/routes/Contact";

import Product from "@/routes/Product";
import Categories from "./routes/Category";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <main className="flex min-h-screen">
            <Sidebar />
            <div className="flex w-full flex-col">
              <div className="h-full px-4 py-4">
                <Routes>
                  <Route path="/products" element={<Product />} />
                  <Route path="/categories" element={<Categories />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/_blank" element={<Blank />} />
                  <Route path="/" element={<Dashboard />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
