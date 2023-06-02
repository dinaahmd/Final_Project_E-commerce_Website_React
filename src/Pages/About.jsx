import React from 'react';
import '../CSS/About.css';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';

export function About() {
    return (
        <div>
            <main className='about pt-5'>
                <Container>
                    <Row className='px-4 my-5'>
                        <Col sm={7}>
                            <Image src="boutique-clothing-online-1024x683.jpg" className='' fluid rounded />
                        </Col>
                        <Col sm={5}>
                            <h1 className='font-weight-light'>Tagline</h1>
                            <p className='mt-4'>
                                Chubbies was founded in 2011 by a group of friends who found the traditional world of men’s capital-F-”Fashion” completely unrelatable. We saw pictures of shirtless men with rippling ab muscles, some standing outside of storefronts coating you with cologne, with the message of “if only you buy our clothes you can try to be as cool as we are” - and we were absolutely repelled.

                                At the same time, we saw that “shorts” in the marketplace were getting longer and longer, with more and more fabric/pocketing/zip-ties & whoseewhatsits all over them. Where were the proper length men’s shorts that defined generations of shortsmen? Not only were shorts becoming completely unrecognizable, but they were also losing their personality, their craftsmanship. No one was focusing on this forgotten category of men’s apparel, when it’s a product that’s so vital to get right.
                            </p>
                            <Button variant='outline-primary'>Call to Action</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Card className='text-center bg-secondary text-white my-5 py-4'>
                            <Card.Body>
                                This is some text within a card body
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </main>
        </div>
    )
}