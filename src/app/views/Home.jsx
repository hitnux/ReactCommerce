import Slider from "../components/Slider";
import { Container } from 'react-bootstrap';
import FeaturedProducts from "../components/FeaturedProducts";
import FeaturedCategories from "../components/FeaturedCategories";

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <Container>
                <FeaturedCategories></FeaturedCategories>
                <FeaturedProducts></FeaturedProducts>
            </Container>
        </>
    );
};

export default Home;