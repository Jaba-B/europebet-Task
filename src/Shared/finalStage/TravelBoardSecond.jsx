import TravelItem from "./TravelItem";
import ticket from "../../assets/final-item-ticket-icon.png";
import hotel from "../../assets/final-item-hotel-icon.png";
import event from "../../assets/final-item-event-icon.png";

import "../../styles/finalStage.css"
import "../../styles/leaderBoard.css" //gift-decoration

function TravelBoard() {
    const travelBoardMock = [
        {src: `${ticket}`, text: 'ორმხრივი ავიაბილეთი'},
        {src: `${hotel}`, text: 'The Festival in Malta -ს მეინ ივენთის ბაი-ინი'},
        {src: `${event}`, text: 'Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი'},
        {src: `${ticket}`, text: 'სასტუმრო'},
    ]

    return (
      <div className="">
        <div className="travel-board__header">
            <div className="gift-decoration"></div>
            <p>A კატეგორიის საგზურში შედის</p>
        </div>
        <div className="travel-board">
            {travelBoardMock.map((item) => {
                return (
                    <TravelItem src={item.src} text={item.text}/>
                )
            })}
        </div>
      </div>
    );
}
  
export default TravelBoard;