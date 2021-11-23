import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Book = ( { book } ) => {
    return (
        <>
            <Card className='my-3 py-3 rounded'>
                <Link to={`/books/${ book._id }`}>
                    <Card.Img src={book.image} variant='top' />
                </Link>
                <Card.Body>
                    <Link to={`/books/${ book._id }`}>
                        <Card.Title>{ book.name }</Card.Title>
                    </Link>
                    <Card.Text as='div'>
                        <Rating value={ book.rating }/>
                    </Card.Text>
                    <Card.Text as='h4'>{ book.price }</Card.Text>

                </Card.Body>
            </Card>
        </>
    )
}

export default Book
