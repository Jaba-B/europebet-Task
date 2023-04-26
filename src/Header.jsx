import { useState } from 'react';
import './index.css'
import logo from './assets/logo.png'
import banner from "./assets/banner.jpg"
import CashGames from './Shared/CashGames';
import NewYear from './Shared/NewYear';
import FinalStage from './Shared/FinalStage';

function Header() {
    const [ active, setActive ] = useState('first');

    return (
      <div className="">
        <div className="authorization">
            <img src={logo} alt="europebet logo" height={24}/>
            <div>
                <button className='authorization__signup-btn'>Sign up</button>
                <button className='authorization__signin-btn'>Sign in</button>
            </div>
        </div>
        <img className="header-banner" src={banner} alt="background banner" height={210} />
        <div className='suggestions-container'>
            <p className='slots-suggestion'><span className='slots-suggestion__span'>სლოტები</span>10 სექტემბერი - 7 ნოემბერი</p>
            <p className='travel-suggestion'>მოიპოვე 10 საგზურიდან ერთ-ერთი</p>
            <p className='travel-suggestion__desktop'>მოიპოვე მრავალფეროვანი პრიზები და 10 საგზურიდან ერთ-ერთი</p>
            <p className='festival-suggestion'>მოხვდი პოკერის ფესტივალზე მალტაში</p>
        </div>
        <div className='offers'>
            <button 
                className={`offers__btn ${active === 'first' ? 'offers__btn--active' : ''}`}
                onClick={() => {setActive('first')}}
            >
                <span>28 ოქტ. - 7 ნოემ.</span><p>Cash Games</p>
            </button>
            <button 
                className={`offers__btn ${active === 'second' ? 'offers__btn--active' : ''}`}
                onClick={() => {setActive('second')}}
            >
                <span>10 - 29 დეკ.</span><p>New Year Series</p>
            </button>
            <button 
                className={`offers__btn ${active === 'third' ? 'offers__btn--active' : ''}`}
                onClick={() => {setActive('third')}}
            >
                <span>28 ოქტ. - 7 ნოემ.</span><p>Final Stage</p>
            </button>
        </div>
        <div className='fast-play'>
            <button><p>ითამაშე</p></button>
        </div>
        <div className='components-render__cointainer'>
            {active === 'first' && <CashGames />}
            {active === 'second' && <NewYear />}
            {active === 'third' && <FinalStage />}
        </div>
      </div>
    );
}
  
export default Header;