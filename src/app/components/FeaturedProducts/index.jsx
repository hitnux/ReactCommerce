import { Row, Col, Card, Button } from 'react-bootstrap'


const FeaturedProducts = ({ count }) => {    
    return (
        <Row xs={1} md={3} className="g-4 my-5">
        {Array.from({ length: count }).map((_, idx) => (
            <Col className="mt-md-0">
            <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/500" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </Col>
        ))}
        </Row>
    )
}
FeaturedProducts.defaultProps = {
    count: 3
};
export default FeaturedProducts;