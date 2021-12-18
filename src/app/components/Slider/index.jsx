import { Carousel } from 'react-bootstrap';

const Slider = ({ slides }) => {
    return (
        <Carousel variant="dark">
            {slides.map((slide) => (
                <Carousel.Item>
                    <picture>
                        <source media="(max-width:1024px)" srcset={slide.images.mobile} />
                        <source media="(min-width:1025px)" srcset={slide.images.desktop} />
                        <img
                            className="d-block w-100"
                            src={slide.images.desktop}
                            alt={slide.name}
                        />
                    </picture>
                    <Carousel.Caption>
                        <h5>{slide.name}</h5>
                        <p>{slide.content}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
};

export default Slider;