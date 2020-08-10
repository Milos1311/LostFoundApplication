import React from 'react';

import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';

import{ connect } from 'react-redux';
import { fetchFound } from '../actions';



class Found extends React.Component {

//   componentDidMount() {
//     this.props.fetchFound();
// }

  render() {
    return (
        <div>


          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
               <Card.Body>
               <Card.Title>Found</Card.Title>
            <Card.Text>
            Ovde ide nesto
      </Card.Text>
     </Card.Body>
     <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
  </Card.Body>
</Card>
        </div>
  
      );
    }
    

}

const mapStateToProps = (state) => {
  return {found:state.found};
};




export default connect(mapStateToProps , {fetchFound})(Found);