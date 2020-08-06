import React from 'react';

import ModalEx from '../modal/modal.jsx';
import { BrowserRouter as Router ,Route ,Link ,Switch } from 'react-router-dom';

import Lost1 from '../../pages/lost';
import Found1 from '../../pages/found';
import AboutAs from '../../pages/abouteAs';


class Menu extends React.Component {

    render(){
        return (  <div>
                      {/* <Text>Pronadji.me</Text> */}
                    <ModalEx></ModalEx>
                       
                    <Router>
    
     {/* <Link  to="/abouteAs"  ><AboutAs>About as</AboutAs></Link> */}
     {/* <Link  to="/abouteAs"  >About as</Link> */}
 
    {/* <Link  to='/lost'><Lost>lost</Lost></Link>  */}

    <Link  to='/lost'>lost</Link>
   
    {/* <Link  to='/found'><Found>found</Found></Link> */}
       <Link  to='/found'>found</Link>
   
  

        <Switch>
          <Route path="/abouteAs">
          {/* <Card><AbouteAs /></Card> */}
          <AboutAs/>
          </Route>
          <Route path="/lost">
           {/* <Card><Lost1 /></Card> */}
           <Lost1 />
          </Route>
          <Route path="/found">
          {/* <Card><Found1 /></Card>  */}
          <Found1 />
          </Route>
        </Switch>


    </Router>



                  </div>

               

              );
            }
        }


export default Menu;