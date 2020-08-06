import React from 'react';

import Menu from '../menu/menu.jsx';

import {  HeaderS } from './header.styles';


class Header extends React.Component  {

    render(){
          return (
            <HeaderS>
             <Menu></Menu> 
             </HeaderS>
          );
    }
    
    }
    
    export default Header;