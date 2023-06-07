import "./Slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Slider({authentication}){
const basePicture = "./Pictures/slider/";
    const datas = [
        {
            id: 1,
            image: `${basePicture}Photo1.png`,
            title: "Titre du slider 1",
            text : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        },
        {
            id: 2,
            image: `${basePicture}Photo2.png`,
            title: "Titre du slider 2",
            text : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        },
        {
            id: 3,
            image: `${basePicture}Photo3.png`,
            title: "Titre du slider 3",
            text : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        },
    ]
    return(
        <div>
            <Carousel
                autoPlay interval={6000}
                infiniteLoop
                thumbWidth={120}
                showIndicators={false}
                showStatus={false}
            >
                {datas.map((slide) => (
                    <div key={slide.id}>
                        {authentication && (
                            <img
                                src="/icon/pencil.svg"
                                alt="Modifier"
                                className="pencil-logo"
                            />
                        )}
                        <img src={slide.image} alt="" />
                        <div className="overlay">
                            <h2 className="overlay_title">{slide.title}</h2>
                            <p className="overlay-text">{slide.text}</p>
                        </div>
                    </div>
                    )

                )}
            </Carousel>
        </div>
    );
}

