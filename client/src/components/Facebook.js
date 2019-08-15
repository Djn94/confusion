import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userId: "",
        name: "",
        email: "",
        picture: ""
    }
    responseFacebook = response => {
        this.setState({
            isLoggedIn: true,
            userId: response.userId,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
    }
    componentClicked = () => console.log("clicked");
    render() {
        let fbContent;
        if (this.state.isLoggedIn) {
            fbContent = (<div style={{ width: '200px', height: "100px", margin: 'auto', background: '#f4f4f4', padding: '20px' }}>
                <img src={this.state.picture} alt={this.state.name} />
            </div>);
        }
        else {
            fbContent = (<FacebookLogin
                appId="1660222757455289"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.omponentClicked}
                callback={this.responseFacebook} />)
        }
        return (
            <div>
                {fbContent}
            </div>
        )
    }
}