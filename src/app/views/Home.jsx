import Slider from "../components/Slider";
import { Container } from 'react-bootstrap';
import FeaturedProducts from "../components/FeaturedProducts";
import FeaturedCategories from "../components/FeaturedCategories";
import { getBanners } from "../services/Api";

const Home = () => {
    const slides = getBanners();
    return (
        <>
            <Slider slides={slides}></Slider>
            <Container>
                <FeaturedCategories></FeaturedCategories>
                <FeaturedProducts></FeaturedProducts>
            </Container>
        </>
    );
};

export default Home;