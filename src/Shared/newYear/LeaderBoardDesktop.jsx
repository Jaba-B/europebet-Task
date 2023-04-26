import logo from "../../assets/logo.png" // appropriate icon was missing in assets, so i raplaced whits logo
import LeaderBoardItem from "../cashGames/LeaderBoardItem";
import Gift from "../cashGames/Gift";
import travel from "../../assets/travel-icon-sm.png"
import ticket from "../../assets/ticket-icon-sm.png"

import "../../styles/leaderBoard.css"
import "../../styles/newYear.css"

function LeaderBoard() {
    const mock = [
        {place: 1, prize: "-", category: "A კატეგორიის საგზური", logo: `${travel}`},
        {place: 2, prize: "-", category: "A კატეგორიის საგზური", logo: `${ticket}`},
        {place: 3, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 4, prize: "1 200 ₾", category: "A კატეგორიის საგზური"},
        {place: 5, prize: "1 000 ₾", category: "A კატეგორიის საგზური"},
        {place: 6, prize: "800 ₾", category: "A კატეგორიის საგზური"},
        {place: 7, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 8, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 9, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 10, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 11, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 12, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 13, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 14, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 15, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 16, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 17, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 18, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 19, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 20, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
    ]

    const giftMock = [
        {src: `${travel}`, text: 'The Festival in Malta-ს საგზური'},
        {src: `${ticket}`, text: 'სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The Festival in Malta-ს საგზური'},
        {src: `${logo}`, text: 'ტექნიკის მაღაზიის ვაუჩერი'},
    ]

    return (
      <div className="leaderboard-container leaderboard-container__desktop">
        <div className="criterias">
            <span>ადგილი</span>
            <div className="criterias__voucher">
                <img src={logo} alt="ვაუჩერი" width={12} height={10} />
                <span> ვაუჩერი</span>
            </div>
            <span>პრიზი</span>
        </div>
        <div className="leaderboard">
            {mock.map(({place, prize, category, logo}) => {
                return (
                    <LeaderBoardItem place={place} prize={prize} category={category} logo={logo} />
                )
            })}
        </div>
        <div className="gifts-list">
        {giftMock.map(({src, text}) => {
                return (
                    <Gift src={src} text={text} />
                )
            })}
        </div>
      </div>
    );
}
  
export default LeaderBoard;