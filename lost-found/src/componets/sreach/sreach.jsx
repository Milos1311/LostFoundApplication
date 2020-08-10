import React from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class Search extends React.Component {


    render(){
        return ( <div>
        <SreachStyled>    
    <InputGroup className="mb-3">
        <FormControl
         placeholder="Search"
         aria-label="Search"
         aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="contained">Search</Button>
    </InputGroup.Append>
  </InputGroup>
  </SreachStyled>
       </div>

     ); 
}

}

export default Search;