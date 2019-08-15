import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Footer from './components/footer'
class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header title="Chloe By Design" className="header-color" scroll>
            <Navigation>
              <Link to="/shop">Shop</Link>
              <Link to="/events">Events</Link>
              <Link to="/cart">Cart</Link>
            </Navigation>
          </Header>
          <Drawer title="Chloe By Design">
            <Navigation>
              <Link to="/shop">Shop</Link>
              <Link to="/events">Events</Link>
              <Link to="/cart">Cart</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
          <Footer></Footer>
        </Layout>
      </div>);
  }
}

export default App;
