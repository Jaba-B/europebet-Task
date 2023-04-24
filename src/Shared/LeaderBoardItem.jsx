import "./leaderBoard.css"

function LeaderBoardItem({place, prize, category}) {
    return (
      <div className="leaderboard-item">
        <div className="leaderboard-item__place"><span>{place}</span></div>
        <span>{prize}</span>
        <span className="leaderboard-item__category">{category}</span>
      </div>
    );
}
  
export default LeaderBoardItem;