import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { WineContext } from '../contexts/WineContext.tsx';
import wine from '../wine.svg';

export function SearchView(props) {
  const [searchName, setSearchName] = useState<string>("")
  const {wines, getWines} = useContext(WineContext);
  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("search for " + searchName);
    getWines(searchName)
  }

  const updateValue = (e) => {
    e.preventDefault();
    setSearchName(e.target.value);
  }

  return (
    <div>
      <div style={{ position: "absolute", left: 0 }}>
        <img src={wine} height="25px" alt="wine bottle"/>
        {wines?.length}
      </div>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="wine-search">
          <Form.Control
            type="text"
            placeholder='Enter wine name'
            value={searchName}
            defaultValue={searchName}
            onChange={updateValue}
          />
          <Button variant="primary" type="submit">
          Search
        </Button>
        </Form.Group>
      </Form>
    </div>
  );
}