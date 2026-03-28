import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import KnowledgeDetail from "./components/KnowledgeDetail";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/detail/:id" element={<KnowledgeDetail />} />
      </Routes>
    </>
  );
}
  
export default App;