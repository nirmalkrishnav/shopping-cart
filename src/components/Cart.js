import React, { Component } from 'react';

export default class Filter extends Component {
    render() {
        const { cartItems } = this.props;

        return (
            <div>

                {cartItems.length === 0 ? <div>Cart is empty</div> :
                    <div>You have {cartItems.length} items in the cart</div>}
                {/* {this.props.cartItems.map((item, index) => {

                })} */}
            </div>
        )
    }
}