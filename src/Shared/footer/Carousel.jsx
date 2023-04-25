import Slider from "react-slick";

import carouselItem1 from '../../assets/carouselItem1.png'
import carouselItem2 from '../../assets/carouselItem2.png'
import carouselItem3 from '../../assets/carouselItem3.png'

import '../../styles/footer.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const mock = [
    {id: 1, src: carouselItem1, color1: "#0D649B00", color2: "#0D649BE8", color3: "#0D649B", header: "მიიღე 300% ქეშბ...", description: "retrieve 300% bet amount as real mone..."},
    {id: 2, src: carouselItem2, color1: "#EF541C00", color2: "#EF541C99", color3: "#EF541C", header: "მალე", description: "retrieve 300% bet amount as real money…"},
    {id: 3, src: carouselItem3, color1: "#1A176C00", color2: "#1A176C99", color3: "#1A176C", header: "მოიგე ჯაკპოტი", description: "retrieve 300% bet amount as real money…"},
    {id: 4, src: carouselItem1, color1: "#0D649B00", color2: "#0D649BE8", color3: "#0D649B", header: "მიიღე 300% ქეშბ...", description: "retrieve 300% bet amount as real mone..."},
    {id: 5, src: carouselItem2, color1: "#EF541C00", color2: "#EF541C99", color3: "#EF541C", header: "მალე", description: "retrieve 300% bet amount as real money…"},
    {id: 6, src: carouselItem3, color1: "#1A176C00", color2: "#1A176C99", color3: "#1A176C", header: "მოიგე ჯაკპოტი", description: "retrieve 300% bet amount as real money…"},
]

function Carousel() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 940,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0,
                infinite: false,
                edgeFriction: 0
            }
        }
        ]
    };

    return (
      <div className="App">
        <Slider {...settings} edgeFriction={0}>
            {mock.map((item) => {
                return (
                    <div className="carousel-item" id={item.id}>
                        <img id={item.id} src={item.src} alt="carousel items" width={155} height={180} />
                        <div className="carousel-item__text-container" style={{backgroundImage: `linear-gradient(${item.color1}, ${item.color2}, ${item.color3})`}}>
                            <p className="carousel-item__text-header">{item.header}</p>
                            <p className="carousel-item__text-description">{item.description}</p>
                        </div>
                    </div>
                )
            })}
        </Slider>
      </div>
    );
}
  
export default Carousel;