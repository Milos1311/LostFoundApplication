import React from 'react';

import Card from 'react-bootstrap/Card';

import{ connect } from 'react-redux';

import Sreach from '../componets/sreach/sreach';

import { fetchFound } from '../actions';



class Found extends React.Component {
 
//   componentDidMount() {
//     this.props.fetchFound();
// }

  render() {
    return (
        <div>

          <Sreach></Sreach>

          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
               <Card.Body>
               <Card.Title>Found</Card.Title>
            <Card.Text>
            Grad 
      </Card.Text>

      <Card.Text>
            Predmet
      </Card.Text>

     </Card.Body>
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