import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Button from 'react-bootstrap/Button';

import { ButtonE } from './form.styles';

import {reduxForm} from 'redux-form';
import{ connect } from 'react-redux';
import {createItem} from '../../actions';;

class FormItem extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            firstName: "",
            lastName: "",
            addres: "",
            phoneNum: ""
           
    
        };
    }

        handleChange(event) {
            this.setState({password: event.target.value});
            
            
          }
                  
           handleSubmit (event){
            this.props.createItem(this.state.addres , this.state.phoneNum , this.state.lastName , this.state.firstName);
            event.preventDefault();
          }
            



    render() {
        return (
            <FormControl  onSubmit={this.handleSubmit}>

        
            <Input id="my-input" aria-describedby="my-helper-text"  placeholder="Frist name"  
            
            name="fristName"
            defaultValue={this.state.fristName}
            type="text"
            onChange={this.handleChange}
            
            /><br/>
    
           
            <Input id="my-input" aria-describedby="my-helper-text"  placeholder="Last name"    
          
             name="lastName"
            defaultValue={this.state.lastName}
            type="text"
            onChange={this.handleChange} /><br/>
             
           
            <Input id="my-input" aria-describedby="my-helper-text"  placeholder="Address"
            
            name="addres"
            defaultValue={this.state.addres}
            type="text"
            onChange={this.handleChange}
               /><br/>
    
           
            <Input id="my-input" aria-describedby="my-helper-text"  placeholder="Phone number" 
            name="PhoneNum"
            defaultValue={this.state.phoneNum}
            type="text"
            onChange={this.handleChange}
              />
          
            <ButtonE> <Button   variant="primary" type="submit" value="Submit"  >Create</Button></ButtonE>
    
          </FormControl>
            );
        }
        

        
}


const formWrapped =  reduxForm ({
  form: 'itemF'
})(FormItem);


 
export default connect(null, {createItem})(formWrapped);