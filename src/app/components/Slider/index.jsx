import { Carousel } from 'react-bootstrap';

const Slider = ({ slides }) => {
    return (
        <Carousel variant="dark">
            {slides.map((slide, idx) => (
                <Carousel.Item key={idx}>
                    <div className="ratio ratio-21x9">
                        <picture>
                            <source media="(max-width:1024px)" srcSet={slide.images.mobile} />
                            <source media="(min-width:1025px)" srcSet={slide.images.desktop} />
                            <img
                                className="d-block w-100"
                                src={slide.images.desktop}
                                alt={slide.name}
                            />
                        </picture>
                    </div>
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