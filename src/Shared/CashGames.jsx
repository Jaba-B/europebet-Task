import "../styles/cashGames.css"
import LeaderBoard from "./cashGames/LeaderBoard";

function CashGames() {
    return (
      <div>
        <div className="container">
          <div className="orange-decoration"></div>
          <div className="header">
            <p>1₾ რეიქი = 1 ქულას</p>
          </div>
          <div className="leader-board">
            <LeaderBoard  />
          </div>
          <div className="leader-board__second">
            <LeaderBoard  />
            <p className="leader-board__paragraph">* ლიდერბორდის შედეგები განახლდება</p>
            <p className="leader-board__decorated-span">პოკერის ლობიში</p>
          </div>
        </div>
        <div className="side-leaderboard">
            <div className="orange-decoration"></div>
            <p>დამატებით შედგება, ქეშგეიმის, ტურნირების და სპინ პოკერის 12 Side ლიდერბორდი</p>
            <span>* Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის ლობიში.</span>
        </div>
      </div>
    );
}
  
export default CashGames;