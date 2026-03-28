import { useParams } from "react-router-dom";
import knowledgeData from "../data/KnowledgeData";

function KnowledgeDetail() {
  const { id } = useParams();
  const item = knowledgeData.find(item => item.id === parseInt(id));

  if (!item) {
    return <div>Subject not found</div>;
  }

  return (
    <div className="container">
      <h1>{item.title}</h1>
      <p><strong>Category:</strong> {item.category}</p>
      <p><strong>Description:</strong> {item.description}</p>
      <p><strong>Faculty:</strong> {item.faculty}</p>
      <button onClick={() => window.history.back()} style={{ marginTop: '60px' }}>← Back</button>
    </div>
  );
}

export default KnowledgeDetail;