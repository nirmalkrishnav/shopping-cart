import React, { Component } from 'react';
import formatCurrency from '../helpers/util';

export default class Filter extends Component {
    render() {
        const { cartItems } = this.props;

        return (
            <div>
                <div>

                    {cartItems.length === 0 ? <div>Cart is empty</div> :
                        <div>You have {cartItems.length} items in the cart</div>}

                </div>
                <div className="">
                    {this.props.cartItems.map((item, index) => {
                        return (<div key={item._id} className="flex">
                            <div className="flex-none w-11 relative">
                                <img src={item.image} alt={item.desc} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                            </div>
                            <div className="flex-auto pl-6">
                                <div className="flex flex-wrap items-baseline">
                                    {item.title}
                                </div>
                                <div className="flex flex-wrap items-baseline">
                                    {formatCurrency(item.price)} x {item.count}
                                </div>
                                <div className="flex space-x-3 mb-4 text-sm font-semibold">
                                    <div className="flex-auto flex space-x-3">
                                        <button className="w-1/2 flex items-center justify-center rounded-full bg-purple-50 text-purple-700" onClick={() => this.props.removeFromCart(item)}>Remove</button>
                                    </div>
                                </div>
                            </div>

                        </div>)
                    })}
                </div>
            </div>
        )
    }
}