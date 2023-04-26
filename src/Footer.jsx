import Carousel from "./Shared/footer/Carousel"
import './styles/footer.css'
import downArrow from './assets/downArrow.png'

function Footer() {
  return (
    <footer>
        <p className='footer__header'>წესები და პირობები</p>
        <div className='footer__rules'>
            <p>როდის იწყება და რა <br/> ფორმატით გაიმართება აქცია</p>
            <img src={downArrow} alt='down arrow' width={15} height={9} />
        </div>
        <div className='footer__rules'>
            <p>როგორ მივიღო აქციაში <br/> მონაწილეობა?</p>
            <img src={downArrow} alt='down arrow' width={15} height={9} />
        </div>
        <div className='footer__rules'>
            <p>სხვადასვა</p>
            <img src={downArrow} alt='down arrow' width={15} height={9} />
        </div>
        <p className='footer__carousel-header'>მსგავსი აქციები</p>
        <div className="carousel-container">
          <Carousel />
        </div>
    </footer>
  );
}

export default Footer;