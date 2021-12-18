import { Row, Col, Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const FeaturedCategories = () => {
    const categoryList = useSelector((state) => state.categories.list)
    const categories = categoryList.filter(c => c.featured);

    return (
        <>
            <Row xs={1} md={6} className='mt-4'>
                {categories.map((category, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Body className='text-center'>
                                <Image src="https://via.placeholder.com/32" />
                                <Card.Title className="mt-2" style={{ fontSize: '14px' }}>{category.name}</Card.Title>
                                <Link to={category.slug}>Visit</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default FeaturedCategories;