import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';

class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = { activeTab: 0 };

    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div>
                    <h1>These are necklaces</h1>
                </div>
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
                    {this.toggleCategories()}
                </section>
            </div>
        )
    }
}
export default Shop;