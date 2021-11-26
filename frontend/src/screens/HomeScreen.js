import React, { useState, useEffect } from 'react'; //UseEffect life cycle
import { Row, Col } from 'react-bootstrap';
import Book from '../components/Book';
import axios from 'axios';


const HomeScreen = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        // console.log("hello")
        const fetchBooks = async () => {
            const { data } = await axios.get('/api/books')
            setBooks(data)
        }
        fetchBooks()
    }, [])

    return (
        <>
            <h1>Latest Books</h1>
            <Row> 
                {books.map((book) => (
                    <Col key={book._id} sm={12} md={6} lg={4} xl={3}>
                        <Book book={book}/>
                    </Col>
                ))} 
            </Row>
        </>
    )
}

export default HomeScreen
