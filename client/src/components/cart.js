import React, { Component } from 'react';
import { ListItem } from 'react-mdl';

class Cart extends Component {
    render() {
        return (
            <div><h2>This is where all selected items will be rendered with the total cost calculated</h2>
                <br></br>
                <p> Product name      price           quantity      total</p>
                <ListItem>Necklace A</ListItem>
                <ListItem>Necklace b</ListItem>
                <ListItem>Necklace c</ListItem>
            </div >
        )
    }
}
export default Cart;