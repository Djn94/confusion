import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button } from 'react-mdl';
import StripeCheckout from 'react-stripe-checkout';
class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = { activeTab: 0 };

    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="productcard-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '240',
                            background: "url(https://i.etsystatic.com/isbl/d488ef/35812320/isbl_1680x420.35812320_qzupim8o.jpg?version=0) center/cover "
                        }} > Necklace Name</CardTitle>
                        <CardText>
                            This fine necklace is dope please click this to creep
                    </CardText>
                        <CardActions>

                            <Button>View Item</Button>
                            <StripeCheckout></StripeCheckout>
                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176',
                            background: "url(https://i.etsystatic.com/isbl/d488ef/35812320/isbl_1680x420.35812320_qzupim8o.jpg?version=0) center/cover "
                        }} > Necklace Name</CardTitle>
                        <CardText>
                            This fine necklace is also dope please click this to creep
                    </CardText>
                        <CardActions>
                            <Button>View Item</Button>

                            <StripeCheckout></StripeCheckout>
                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176',
                            background: "url(https://i.etsystatic.com/isbl/d488ef/35812320/isbl_1680x420.35812320_qzupim8o.jpg?version=0) center/cover "
                        }} > Necklace Name</CardTitle>
                        <CardText>
                            This fine necklace is SUPER dope please click this to creep
                    </CardText>
                        <CardActions>
                            <Button>View Item</Button>

                            <StripeCheckout></StripeCheckout>
                        </CardActions>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <div className="productcard-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176',
                            background: "url(https://i.etsystatic.com/isbl/d488ef/35812320/isbl_1680x420.35812320_qzupim8o.jpg?version=0) center/cover "
                        }} > Bracelet Name</CardTitle>
                        <CardText>
                            This fine Bracelet is dope please click this to creep
                </CardText>
                        <CardActions>
                            <Button>View Item</Button>

                            <StripeCheckout></StripeCheckout>                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176',
                            background: "url(https://i.etsystatic.com/isbl/d488ef/35812320/isbl_1680x420.35812320_qzupim8o.jpg?version=0) center/cover "
                        }} > Bracelet Name</CardTitle>
                        <CardText>
                            This fine bracelet is also dope please click this to creep
                </CardText>
                        <CardActions>
                            <Button>View Item</Button>

                            <StripeCheckout></StripeCheckout>                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176',
                            background: "url(https://i.etsystatic.com/isbl/d488ef/35812320/isbl_1680x420.35812320_qzupim8o.jpg?version=0) center/cover "
                        }} > bracelet Name</CardTitle>
                        <CardText>
                            This fine bracelet is SUPER dope please click this to creep
                </CardText>
                        <CardActions>
                            <Button>View Item</Button>

                            <StripeCheckout></StripeCheckout>                        </CardActions>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div className="productcard-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176',
                            background: "url(https://i.etsystatic.com/isbl/d488ef/35812320/isbl_1680x420.35812320_qzupim8o.jpg?version=0) center/cover "
                        }} > Earring Name</CardTitle>
                        <CardText>
                            This fine Earring is dope please click this to creep
                </CardText>
                        <CardActions>
                            <Button>View Item</Button>

                            <StripeCheckout></StripeCheckout>                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176',
                            background: "url(https://i.etsystatic.com/isbl/d488ef/35812320/isbl_1680x420.35812320_qzupim8o.jpg?version=0) center/cover "
                        }} > Earring Name</CardTitle>
                        <CardText>
                            This fine Earring is also dope please click this to creep
                </CardText>
                        <CardActions>
                            <Button>View Item</Button>

                            <StripeCheckout></StripeCheckout>                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176',
                            background: "url(https://i.etsystatic.com/isbl/d488ef/35812320/isbl_1680x420.35812320_qzupim8o.jpg?version=0) center/cover "
                        }} > Earring Name</CardTitle>
                        <CardText>
                            This fine Earring is SUPER dope please click this to creep
                </CardText>
                        <CardActions>
                            <Button>View Item</Button>
                            <StripeCheckout></StripeCheckout>                        </CardActions>
                    </Card>
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
                    <Grid >
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