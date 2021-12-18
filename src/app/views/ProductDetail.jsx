import { useParams } from "react-router-dom";
import { findProduct } from "../services/Api";

const ProductDetail = () => {
    let { slug } = useParams();
    const product = findProduct(slug);

    return (
        <>
            {product.name}
        </>
    )
}

export default ProductDetail;