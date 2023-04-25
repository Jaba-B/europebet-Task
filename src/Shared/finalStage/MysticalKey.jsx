import MysticalKeyItem from "./MysticalKeyItem";

import "../../styles/finalStage.css"
import "../../styles/leaderBoard.css"

function MysticalKey() {
    const mysticalKeyList = [
        {place: '1', text: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი'},
        {place: '1', text: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი'},
        {place: '1', text: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი'},
        {place: '1', text: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი'},
        {place: '1', text: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი'},
        {place: '1', text: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი'},
        {place: '1', text: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი'},
        {place: '1', text: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი'},
        {place: '1', text: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი'},
        {place: '1', text: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი'},
        {place: '1', text: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი'},
        {place: '1', text: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი'},
        {place: '1', text: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი'},
        {place: '1', text: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი'},
        {place: '1', text: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი'},
        {place: '1', text: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი'},
        {place: '1', text: 'სპეციალური ტურნირი Cashgame Sharks II ადგილი'},
    ]

    return (
      <div className="mystical-key__container">
        <div className="mystical-key__header">
            <div className="orange-decoration"></div>
            <p>მისტიური გასაღები</p>
        </div>
        <div className="mystical-key__list-container">
            <div className="mystical-key__list">
                {mysticalKeyList.map((item) => {
                    return (
                        <MysticalKeyItem place={item.place} text={item.text} />
                    )
                })}
            </div>
        </div>
      </div>
    );
}
  
export default MysticalKey;