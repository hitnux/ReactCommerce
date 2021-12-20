import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { findProduct } from "../services/Api";

const ProductDetail = () => {
    let { slug } = useParams();
    const product = findProduct(slug);

    return (
        <>
            <Container>
                {product.name}
            </Container>
        </>
    )
}

export default ProductDetail;