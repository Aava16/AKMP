import { useState } from "react";
import knowledgeData from "../data/KnowledgeData";
import KnowledgeList from "../components/KnowledgeList";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

function Home() {
  const [search, setSearch] = useState("");

  const filteredData = knowledgeData.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const categories = [...new Set(knowledgeData.map(item => item.category))];

  return (
    <div className="container">

      
      <div className="hero">
        <h1>Accessible Knowledge Management Portal</h1>
        <p>Search and discover structured learning topics</p>
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      {/* SHOW RESULTS ONLY WHEN SEARCHING */}
      {search && (
        <div className="results-section">
          <h2>Search Results</h2>
          <KnowledgeList data={filteredData} />
        </div>
      )}

      {/* CATEGORY SECTION */}
      {!search && (
        <div className="category-center">
          <h2>Browse by Category</h2>

          <div className="category-buttons">
            {categories.map(cat => (
              <Link key={cat} to={`/category/${cat}`} className="category-btn">
                {cat}
              </Link>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

export default Home;