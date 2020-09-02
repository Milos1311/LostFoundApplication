import React from 'react';


import{ connect } from 'react-redux';

import Card from 'react-bootstrap/Card';

import Sreach from '../componets/sreach/sreach';

import { getFound } from '../actions'; 

class Found extends React.Component {



  componentDidMount(){
    this.props.getFound();
    
  }

renderList(props){
  return props.map( itemFound => {
    return (


      
      <div className="col" key={itemFound.id}>
      <div className="row">
    
      <div className="col">
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>



    </div>
     </div>
      </div>

      );
    });

}

  render() {
    return (
        <div>
         {this.renderList(this.props.found)} 
          <Sreach></Sreach>

         
        </div>
  
      );
    }
    

}

const mapStateToProps = (state) => {
  return {found: state.found};
};



export default connect(mapStateToProps , {getFound})(Found);