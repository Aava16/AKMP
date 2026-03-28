import { Link } from "react-router-dom";

function KnowledgeCard({ item }) {
  return (
    <div className="card" tabIndex="0">
      <h3>{item.title}</h3>
      <p>{item.category}</p>
      <Link to={`/detail/${item.id}`}>View Details</Link>
    </div>
  );
}

export default KnowledgeCard; 