import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    const defaultImage = product.images.find(i => i.isDefault)?.path;

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={defaultImage} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Link to={product.slug}>Visit</Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProductCard;