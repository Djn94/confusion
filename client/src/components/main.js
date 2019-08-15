import React from 'react';
import Shop from './shop'
import { Switch, Route } from 'react-router-dom';
import Cart from './cart';
import Events from './events';
const Main = () => (
    <Switch>
        <Route exact path="/" component={Shop} />
        <Route path="/events" component={Events} />
        <Route path="/cart" component={Cart} />
        <Route path="/shop" component={Shop} />
    </Switch>
)
export default Main;