import { findCategory, getProducts } from '../services/Api'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { useQuery } from 'react-query';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'

const ProductList = () => {
    let { slug } = useParams();
    const categories = useSelector((state) => state.categories.list)
    const category = categories.find(c => c.slug.endsWith(slug));

    const { isLoading, error, data } = useQuery("products", () => getProducts({ categoryId: category.id }));

    if (isLoading) return 'Loading...'

    if (error) return error.message

    if (!data.length)
        return <Container>Products Not Found</Container>

    return (
        <>
            <Container className='my-5'>
                <Row xs={1} md={3}>
                    {data.map((product, idx) => (
                        <Col key={idx}>
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )

}

export default ProductList;