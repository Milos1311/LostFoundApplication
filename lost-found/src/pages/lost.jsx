import React from 'react';

import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';

import{ connect } from 'react-redux';
import { fetchLost } from '../actions';

class Lost extends React.Component {

  //   componentDidMount() {
//     this.props.fetchLost();
// }


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

const mapStateToProps = (state) => {
  return {lost:state.lost};
};




export default connect(mapStateToProps , {fetchLost})(Lost);