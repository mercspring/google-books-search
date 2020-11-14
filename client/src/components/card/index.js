import React from 'react';
import { Row, Col, Button, Heading } from 'arwes';
import "./index.css";

export default function Card(props) {
    return (
        <div className="card">
            <Row>
                <Col m={8}>
                </Col>
                <Col m={4}>
                </Col>

            </Row>
            <Row>
                <Col s={4} >


                    <img src={props.image} alt="thumbnail" />
                    {props.page = "search" ? <Button onClick={() => props.saveFavorite(props.index)}>
                        Save
                    </Button> : <Button onClick={() => props.deleteFavorite(props.index)}>
                            Delete
                    </Button>}

                    <Button onClick={() => props.saveViewBook(props.link)}>
                        View
                    </Button>
                </Col>
                <Col s={8}>
                    <Heading node='h4'>{props.title}</Heading>
                    {props.authors.map((elm, index) => {
                        return <span key={index}>{elm} </span>
                    })}
                    <p>{props.description}</p>
                </Col>
            </Row>

        </div>
    )
}
