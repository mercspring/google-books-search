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
                filtered.image = elm.volumeInfo.imageLinks.thumbnail || "https://via.placeholder.com/50"
                // elm.volumeInfo.imageLinks.thumbnail || 
                filtered.link = elm.volumeInfo.infoLink;
                filtered.index = index;
                return filtered
            
            });
            console.log(filteredResults)
            setSearchResults(filteredResults);
        });

    }
        const saveFavorite = (index) => {
            console.log(index)
        }
        const saveViewBook = (link) => {
            console.log(link)
        }
    return (
        <div>
            <Row>
                <Col m={3}></Col>
                <Col m={6}>
                    <form>
                        <input
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
                            return <Card key={elm.index} saveFavorite={saveFavorite} saveViewBook={saveViewBook} title={elm.title} authors={elm.authors} description={elm.description} image={elm.image} link={elm.link} index={elm.index} />
                        }): <h2>No Results</h2>}
                    </div>
                </Col>
                <Col m={3}></Col>
            </Row>

            <div>

            </div>
        </div>
    )
}
