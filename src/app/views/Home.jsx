import Slider from "../components/Slider";
import { Container } from 'react-bootstrap';
import FeaturedProducts from "../components/FeaturedProducts";


const Home = ()=>{
    return (
        <>
            <Slider></Slider>
            <Container>
                <FeaturedProducts></FeaturedProducts>
            </Container>
        </>
    );
};

export default Home;