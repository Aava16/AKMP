import KnowledgeCard from "../KnowledgeCard";

function KnowledgeList({ data }) {
  if (data.length === 0) {
    return <p>No Results Found</p>;
  }

  return (
    <div>
    <div className="grid">
      {data.map(item => (
        <KnowledgeCard key={item.id} item={item} />
        
      ))}
      
    </div>
    <button onClick={() => window.history.back()} style={{ marginTop: '40px' }}>← Back</button>
    </div> 
  );
}

export default KnowledgeList;