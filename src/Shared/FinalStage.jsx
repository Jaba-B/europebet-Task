import festivalImg from "../assets/final-info-img.jpg" //original img is missing in assets
import TravelBoard from "./finalStage/TravelBoard";
import TravelBoardSecond from "./finalStage/TravelBoardSecond";
import TourniItem from "./finalStage/TournirItem";
import MysticalKey from "./finalStage/MysticalKey";

import ticket from "../assets/poker-item-1-ticket-icon.png"
import doubleTickets from "../assets/poker-item-2-ticket-icon.png"

import "../styles/finalStage.css"
import "../styles/leaderBoard.css" //gift-decoration

function FinalStage() {
    const tournirListMock = [
        { src: `${ticket}`, header: '„Holdem Grinders”', p1: 'C კატეგორიის 1 საგზური'},
        { src: `${ticket}`, header: '“Cashgame Sharks”', p1: 'C კატეგორიის 1 საგზური'},
        { src: `${ticket}`, header: '„Holdem Grinders”', p1: 'C კატეგორიის 1 საგზური'},
        { src: `${doubleTickets}`, header: '„The Festival in Malta, GTD“', p1: 'B კატეგორიის 1 საგზური', p2: 'C კატეგორიის 1 საგზური', p3: '*ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾ ბაი-ინის გადახდით.'},
        { src: `${ticket}`, header: '“Cashgame Sharks”', p1: 'C კატეგორიის 1 საგზური', p2: '*ტურნირზე მონაწილებას შეძლებენ მხოლოდ ევროპაბეთის ბეჭდის მფლობელები.'},
    ]

    return (
        <>
            <div className="final-stage__container">
                <img className="festival-img" src={festivalImg} width={300} height={200} alt="malta" />
                <p className="festival-travel">გაემგზავრე The Festival in Malta-ზე!</p>
                <p className="festival-series">The Festival Series ტურნირების ფარგლებში, ევროპაბეთი უკვე მეორედ აძლევს პოკერის მოთამაშეებს დაუვიწყარი მოგზაურობის შანსს.</p>
                <div className="festival-dates">
                    <div className="gift-decoration"></div>
                    <p className="festival-dates__p">15-დან 21 მაისის ჩათვლით მალტა პოკერის ფესტივალს უმასპინძლებს</p>
                </div>
                <div className="travel-boards">
                <div className="travel-board__container">
                    <TravelBoard />
                </div>
                <div className="travel-board__container">
                    <TravelBoard />
                </div>
                <div className="travel-board__container">
                    <TravelBoardSecond />
                </div>
                </div>
            </div>
            <div className="tournirs">
                <div className="tournirs-header">
                    <div className="orange-decoration"></div>
                    <p>მოიგე საგზური 30 აპრილის ტურნირებზე</p>
                </div>
                <div className="tournirs-list">
                    <div className="tournirs-list__container">
                    {tournirListMock.map((item) => {
                        return (
                         <TourniItem src={item.src} header={item.header} p1={item.p1} p2={item.p2} p3={item.p3} />
                        )
                    })}
                    </div>
                    <p className="vip-tournirs">* თუ მოთამაშე მოიგებს ბეჭედს ორჯერ ან მეტჯერ, ის The Lord of the Rings ტურნირზემოხვდება ბეჭდების შესაბამისი რაოდენობის სტეკით</p>
                    <p className="vip-tournirs">*ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾-იანი ბაი-ინის გადახდით.</p>
                </div>
                <div>
                    <MysticalKey />
                </div>
            </div>
        </>
    );
}
  
export default FinalStage;