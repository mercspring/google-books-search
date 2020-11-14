import React, { useState, useEffect} from 'react';
import { Row, Col, Heading} from 'arwes';
import API from '../../utils/API.js';
import Card from '../../components/card/';


export default function Saved() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        getBooks()

    }, [])

    const getBooks = () => {

        API.getBooks().then(result=>{
            console.log(result.data)
            setFavorites(result.data)

        })

    }

    const viewBook = (link) => {
        window.open(link, '_blank');
    }

    const deleteFavorite = (id) => {
        API.deleteBook(id).then(result =>{
            console.log(result);
            getBooks();
        }).catch(err=>{
            console.log(err);
        })
    }

    return (
        <div>
            <Row>
                <Col m={1}></Col>
                <Col m={6}>
                    <Heading node="h1"> Saved Books </Heading>
                    <div className="result-list">
                        {favorites.length > 0 ? favorites.map(elm => {
                            return <Card 
                            page="saved" 
                            id={elm._id}
                            key={elm._id} 
                            deleteFavorite={deleteFavorite} 
                            viewBook={viewBook} 
                            title={elm.title} 
                            authors={elm.authors} 
                            description={elm.description} 
                            image={elm.image} 
                            link={elm.link} 
                            index={elm.index} />
                        }): <h4>No Favorites to Display</h4>}
                    </div>
                </Col>
                <Col m={1}></Col>
            </Row>

            <div>

            </div>
        </div>
    )
}
