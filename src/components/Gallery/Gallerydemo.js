export default function Gallery({ works }) {
  return (
    <div className="gallery-grid">
      {works.map((work, index) => (
        <div key={index} className="gallery-item">
          <img 
            src={work.thumbnail} 
            alt={work.title}
            className="hover-zoom"
          />
          <div className="work-info">
            <h3>{work.title}</h3>
            <p>{work.medium}</p>
          </div>
        </div>
      ))}
    </div>
  );
}