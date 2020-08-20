import React from 'react';

import { Lost } from './menu.styles';
import { Text } from './menu.styles';
import { Found } from './menu.styles';
import {AboutAs } from './menu.styles';
import {Card } from './menu.styles';

import {ModalStyled } from '../modal/modal.styles';

import ModalEx from '../modal/modal.jsx';
import { BrowserRouter as Router ,Route ,Link ,Switch } from 'react-router-dom';

import Lost1 from '../../pages/lost';
import Found1 from '../../pages/found';
import AbouteAs from '../../pages/abouteAs';


class Menu extends React.Component {


    render(){
        return (  <div>
                      <Text>Pronadji.me</Text>

                  <ModalStyled><ModalEx></ModalEx></ModalStyled> 
                       
      <Router>
    
     <Link  to="/abouteAs"  ><AboutAs>About as</AboutAs></Link>
    
    <Link  to='/lost'><Lost>Lost</Lost></Link> 

    <Link  to='/found'><Found>Found</Found></Link>
   

        <Switch>

          <Route path="/abouteAs">

            <Card><AbouteAs /></Card>

          </Route>

          <Route path="/lost">

             <Card><Lost1 /></Card>
          
          </Route>

          <Route path="/found">

          <Card><Found1 /></Card> 

          </Route>

        </Switch>


    </Router>



                  </div>

               

              );
            }
        }


export default Menu;