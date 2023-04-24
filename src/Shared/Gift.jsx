import "./leaderBoard.css"

function Gift({src, text}) {
    return (
      <div className="gift-container">
        <div className="gift-decoration"></div>
        <div className="gift-icon__container">
            <img src={src} alt="logo" />
        </div>
        <p className="gift-text">{text}</p>
      </div>
    );
}
  
export default Gift;