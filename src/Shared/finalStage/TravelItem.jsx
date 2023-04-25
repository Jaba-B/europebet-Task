import "../../styles/finalStage.css"

function TravelItem({src, text}) {
    return (
      <div className="travel-item">
        <div className="travel-item__icon-container">
            <img src={src} alt="travel icon"/>
        </div>
        <p>{text}</p>
      </div>
    );
}
  
export default TravelItem;