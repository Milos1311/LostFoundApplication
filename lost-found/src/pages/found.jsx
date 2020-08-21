import React from 'react';

import Card from 'react-bootstrap/Card';

import{ connect } from 'react-redux';
import { getFound } from '../actions';

import { FoundCard } from './found.styles';

import Sreach from '../componets/sreach/sreach';

class Found extends React.Component {

  

renderList(props){
  return props.map( itemFound => {
    return (
      <div className="item" key={itemFound.idItem}>
      <div>
  <div>
  <FoundCard>
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
</FoundCard>
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
  return {found:state.found};
};




export default connect(mapStateToProps , {getFound})(Found);