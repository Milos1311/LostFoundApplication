import React from 'react';

import Card from 'react-bootstrap/Card';

import Sreach from '../componets/sreach/sreach';

import{ connect } from 'react-redux';
import {getLost}  from '../actions';

class Lost extends React.Component {



  render() {
    return (
        <div>

         <Sreach></Sreach>

           <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
               <Card.Body>
               <Card.Title>Lost </Card.Title>
            <Card.Text>
             Grad
            </Card.Text>
              
            <Card.Text>
             Predmet
            </Card.Text>
            </Card.Body>
  
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




export default connect(mapStateToProps , {getLost})(Lost);