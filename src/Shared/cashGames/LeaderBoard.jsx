import exampleIcon from "../../assets/example-icon.png"
import logo from "../../assets/logo.png" // appropriate icon was missing in assets, so i raplaced whits logo
import LeaderBoardItem from "./LeaderBoardItem";
import Gift from "./Gift";
import travel from "../../assets/travel-icon-sm.png"
import ticket from "../../assets/ticket-icon-sm.png"

import "../../styles/leaderBoard.css"

function LeaderBoard() {
    const mock = [
        {place: 1, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 1, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 1, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 1, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 1, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 1, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 1, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 1, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 1, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 1, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 1, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 1, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 1, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 1, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 1, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 1, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 1, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 1, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 1, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
        {place: 1, prize: "1 500 ₾", category: "A კატეგორიის საგზური"},
    ]

    const giftMock = [
        {src: `${travel}`, text: 'The Festival in Malta-ს საგზური'},
        {src: `${ticket}`, text: 'სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The Festival in Malta-ს საგზური'},
        {src: `${logo}`, text: '„ალტას“ ვაუჩერი'},
    ]

    return (
      <div className="leaderboard-container">
        <div className="leaderboard__header">
            <p>TOP20 ლიდერბორდი ჰოლდემში</p>
            <img src={exampleIcon} alt="example icon" width={20} height={20}/>
        </div>
        <div className="criterias">
            <span>ადგილი</span>
            <div className="criterias__voucher">
                <img src={logo} alt="ვაუჩერი" width={12} height={10} />
                <span> ვაუჩერი</span>
            </div>
            <span>პრიზი</span>
        </div>
        <div className="leaderboard">
            {mock.map(({place, prize, category}) => {
                return (
                    <LeaderBoardItem place={place} prize={prize} category={category} />
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