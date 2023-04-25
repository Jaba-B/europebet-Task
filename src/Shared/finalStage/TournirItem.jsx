import "../../styles/finalStage.css"

function TourniItem({src, header, p1, p2, p3}) {
    return (
      <div className="tournir-item">
        <img className="tournir-item__ticket" src={src} alt="ticket-logo" width={63} height={33} />
        <p className="tournir-item__header">{header}</p>
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
      </div>
    );
}
  
export default TourniItem;