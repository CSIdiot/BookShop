import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card } from 'react-bootstrap';
// import Rating from '../components/Rating';
import axios from 'axios'

const BookScreen = ({ match }) => {
    const [book, setBook] = useState({})
    useEffect(() => {
        // console.log("hello")
        const fetchBook = async () => {
            const { data } = await axios.get(`/api/books/${match.params.id}`)
            setBook(data)
        }
        fetchBook()
    }, [match])
    return (
        <>
            <Link className='btn btn-primary my-3' to='/'>
                Back to Homepage
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={book.image} alt={book.name} fluid />
                </Col>

                <Col md={3}>
                    <ListGroup variant='flush' as="ul">
                        <ListGroup.Item as="li" active><h3>{book.name}</h3></ListGroup.Item>
                        <ListGroup.Item as="li" active><h5>{book.Author}</h5></ListGroup.Item>
                        <ListGroup.Item as="li" active>Description: {book.description}</ListGroup.Item>
                        <ListGroup.Item as="li" active>Price: {book.price}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>Price: </Col>
                                <Col>
                                    <strong>{book.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <Link className='btn btn-dark' to='/cart'>
                            Add to Shopping Cart
                        </Link>

                    </ListGroup>

                    </Card>
                </Col>
            </Row>






        </>
    )
}

export default BookScreen
