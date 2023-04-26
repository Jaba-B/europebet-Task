import "../../styles/leaderBoard.css"

function LeaderBoardItem({place, prize, category, logo}) {
  return (
    <div className="leaderboard-item">
      <div className="leaderboard-item__place"><span>{place}</span></div>
      <span className="leaderboard-item__prize">{prize}</span>
      <div className="leaderboard-item__category--desktop-container">
        {logo ? <img src={logo} alt="" width={20} height={20} /> : ''}
        <span className="leaderboard-item__category leaderboard-item__category--desktop">{category}</span>
      </div>
    </div>
  );
}
  
export default LeaderBoardItem;