import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl';

class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = { activeTab: 0 };

    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{
                        color: '#fff', height: '176',
                        background: "url(https://i.etsystatic.com/isbl/d488ef/35812320/isbl_1680x420.35812320_qzupim8o.jpg?version=0) center/cover "
                    }} > Necklace Name</CardTitle>
                    <CardText>
                        This fine necklace is dope please click this to creep
                    </CardText>
                    <CardActions>
                        <Button>Add to Cart</Button>
                    </CardActions>
                </Card>
            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <div>
                    <h1>These are bracelets</h1>
                </div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div>
                    <h1>These are earrings</h1>
                </div>
            )
        }
    }
    render() {
        return (
            <div className="product-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId => this.setState({ activeTab: tabId }))} ripple>
                    <Tab>Necklaces</Tab>
                    <Tab>Bracelets</Tab>
                    <Tab>Earrings</Tab>
                </Tabs>
                <section>
                    <Grid className="productcard-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}
export default Shop;