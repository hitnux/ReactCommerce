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
                        <Link to={category.slug}>
                            <Card>
                                <Card.Body className='text-center'>
                                    <i className={category.icon} style={{ fontSize: '24px' }}></i>
                                    <Card.Title className="mt-2" style={{ fontSize: '14px' }}>{category.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default FeaturedCategories;