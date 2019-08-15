import * as React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';

export default class App extends React.Component<IappProps, IAppState>{
    render() {
        return (
            <>
                <StripeProvider apiKey="pk_live_oFG0uNpicewJYD1uyjwXwNKT00pGIinJTB">
                    <Elements>

                    </Elements>
                </StripeProvider>
            </>
        )
    }

}
interface IAppState { }
interface IappProps { }