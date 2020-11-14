import React, { useState } from 'react';
import { Row, Col, Button } from 'arwes';
import API from '../../utils/API.js';
import Card from '../../components/card/';

export default function Search() {
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const onSearchSubmit = (event) => {
        event.preventDefault();
        API.searchBooks(search).then(response => {
            if (response.ok) {
                return response.json()
            } else {
                return Promise.reject(response);
            }
        }).then(results => {
            console.log(results)
            const filteredResults = results.items.map((elm, index) => {
                const filtered = {};
                filtered.title = elm.volumeInfo.title;
                filtered.authors = elm.volumeInfo.authors || ["unkown"];
                filtered.description = elm.volumeInfo.description;
                filtered.image = elm.volumeInfo.imageLinks ? elm.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/150/100"
                filtered.link = elm.volumeInfo.infoLink;
                filtered.index = index;
                return filtered

            });
            console.log(filteredResults)
            setSearchResults(filteredResults);
        });

    }
    const saveFavorite = (index) => {
        console.log("data to save", searchResults[index]);
        API.saveBook(searchResults[index]).then(result => {
            console.log(result)
        }).catch(err => {
            console.log(err)
        })
    }
    const viewBook = (link) => {
        window.open(link, '_blank');
    }

    return (
        <div>
            <Row>
                <Col m={1}></Col>
                <Col m={6}>
                    <form>
                        <input
                            style={{height: "35px", marginRight: "5px", background:"black", borderColor:"#26dafd", color:"#26dafd"}}
                            type="text"
                            placeholder="Enter a book name"
                            name="search"
                            value={search}
                            onChange={event => setSearch(event.target.value)}
                        />
                        <Button onClick={onSearchSubmit} > Submit </Button>
                    </form>
                    <div className="result-list">
                        {searchResults ? searchResults.map(elm => {
                            return <Card page="search" key={elm.index} saveFavorite={saveFavorite} viewBook={viewBook} title={elm.title} authors={elm.authors} description={elm.description} image={elm.image} link={elm.link} index={elm.index} />
                        }) : <h2>No Results</h2>}
                    </div>
                </Col>
                <Col m={1}></Col>
            </Row>

            <div>

            </div>
        </div>
    )
}
