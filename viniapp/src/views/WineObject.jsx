import React from 'react'
import Card from 'react-bootstrap/Card'

export function WineObject(props) {
  const {
    name,
    appellation,
    type,
    logo
  } = props.wine;

  return (
    <Card>
      <Card.Header>
        {name}
      </Card.Header>
      <Card.Body>
        <img src={logo} className="max-size" />
      </Card.Body>
    </Card>
  );
}