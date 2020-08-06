import React from 'react';

import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';

class Lost extends React.Component {

  render() {
    return (
        <div>
           <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
               <Card.Body>
               <Card.Title>Lost </Card.Title>
            <Card.Text>
             Some quick example text to build on the card title and make up.
            </Card.Text>
            </Card.Body>
           <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
        </ListGroup>
     <Card.Body>
    <Card.Link href="#">Lost Link</Card.Link>
  </Card.Body>
</Card>
        </div>
  
      );
    }
    

}

export default Lost ;