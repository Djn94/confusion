
import React, { Component } from 'react';
import { Footer, FooterSection, FooterLinkList } from 'react-mdl';

class Cart extends Component {
    render() {
        return (
            <div className="footer-div"><Footer size="mini">
                <FooterSection type="left" logo="Title">
                    <FooterLinkList>
                        <a href="/">Help</a>
                        <a href="/">Privacy & Terms</a>
                    </FooterLinkList>
                </FooterSection>
            </Footer>
            </div>
        )
    }
}
export default Cart;