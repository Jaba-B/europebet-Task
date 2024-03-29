import LeaderBoard from "./newYear/LeaderBoard"
import LeaderBoardDesktop from "./newYear/LeaderBoardDesktop"
import "../styles/newYear.css"
import exampleIcon from "../assets/example-icon.png" //no clock icons in assets
import promoLeft from "../assets/promo-left-img-m.png" //no clock icons in assets
import promoRight from "../assets/promo-right-img-m.png" //no clock icons in assets
import mechanicIcon from "../assets/mechanic-icon.png"
import tournamentBg from "../assets/tournament-bg-m.png"
import tournamentBg2 from "../assets/main-bg-sm.png"
import promoLeftDesktop from "../assets/promo-left-img.png"
import promoRightDekstop from "../assets/promo-right-img.png"

function NewYear() {
    return (
      <div className="newyear-container">
        <div className="tournirs-satelites">
            <div className="orange-decoration"></div>
            <p>ტურნირები და სატელიტები</p>
        </div>
        <div className="new-year__desktop">
            <p className="events__p">სერიის ფარგლებში, ყოველდღიურად გაიმართება 3 ივენთი:</p>
            <div className="times">
                <img className="promo-left" src={promoLeft} alt="cards logo" width={50} />
                <img className="promo-right" src={promoRight} alt="cards logo" width={50} />
                <div className="times__img-container">
                <img src={exampleIcon} alt="clock icon" width={20} height={20} />
                </div>
                <span>19:00 / 19:30 / 20:00</span>
            </div>
            <div className="play">
                <button className="play__btn"><span>ითამაშე</span></button>
            </div>
            <div className="poker-lob">
                <p className="poker-lob__p">* ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან.</p>
                <p>ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში</p>
                <button className="poker-lob__btn"><span>პოკერის ლობი</span></button>
            </div>
            <img alt="cards" src={promoLeftDesktop} className="promo-desktop promo-desktop__left" />
            <img alt="cards" src={promoRightDekstop} className="promo-desktop promo-desktop__right" />
        </div>
        <div className="top22">
            <div className="top22__header">
                <div className="orange-decoration"></div>
                <p>მოხვდი TOP22 ლიდერბორდში ტურნირებზე დაგროვებული ქულებით</p>
            </div>
            <div className="points">
                <p>ქულების დაგროვების მექანიკა</p>
                <img src={mechanicIcon} alt="mechanic icon" width={38} height={38}  />
            </div>
            <LeaderBoard className="new-year__leaderboard-mobile"/>
            <LeaderBoardDesktop className="new-year__leaderboard-desktop"/>
            <div className="leader-board__desktop-paragraph-container">
                <p className="leader-board__paragraph">* ლიდერბორდის შედეგები განახლდება</p>
                <p className="leader-board__decorated-span">პოკერის ლობიში</p>
            </div>
            <p className="tournir-points">* სატურნირო ლიდერბორდის ქულების დათვლაში არ მონაწილეობს ფრიროლები და სატელიტები</p>
        </div>
        <div className="daily-tournirs">
            <p className="daily-tournirs__header">ყოველდღიური ტურნირები და სატელიტები</p>
            <div className="daily-tournirs__first-two">
                <div className="daily-tournirs__first daily-tournirs__first-one">
                    <img className="tournament-bg" src={tournamentBg} alt="tournament background"/>
                    <span className="tournament-style">Omaha Highrollers</span>
                    <span className="tournament-jackpot">40 000₾</span>
                    <span className="tournament-buyinn">ბაი-ინი XXX₾</span>
                    <div className="tournament-date"><span>27 დეკემბერი</span></div>
                </div>
                <div className="daily-tournirs__first daily-tournirs__second-one">
                    <img className="tournament-bg" src={tournamentBg} alt="tournament background"/>
                    <span className="tournament-style">Omaha Highrollers</span>
                    <span className="tournament-jackpot">40 000₾</span>
                    <span className="tournament-buyinn">ბაი-ინი XXX₾</span>
                    <div className="tournament-date"><span>27 დეკემბერი</span></div>
                </div>
            </div>
            <div className="daily-tournirs__first">
                <img className="tournament-bg" src={tournamentBg2} alt="tournament background"/>
                <span className="tournament-style">Omaha Highrollers</span>
                <span className="tournament-jackpot">40 000₾</span>
                <span className="tournament-buyinn">ბაი-ინი XXX₾</span>
                <div className="tournament-date__third"><span>27 დეკემბერი</span></div>
            </div>
            <p className="winners">* სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე, The Lord of the Rings ტურნირზე, იბრძოლებენ The Festival in Malta-ს საგზურის მისაღებად.</p>
            <div className="side-leaderboard side-leaderboard__new-year">
            <div className="orange-decoration"></div>
            <p>დამატებით შედგება, ქეშგეიმის, ტურნირების და სპინ პოკერის 12 Side ლიდერბორდი</p>
            <span>* Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის ლობიში.</span>
        </div>
        </div>
      </div>
    );
}
  
export default NewYear;