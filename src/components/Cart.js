import React, { Component } from 'react';
import formatCurrency from '../helpers/util';

export default class Filter extends Component {

    constructor(props) {
        super();
        this.state = {
            showCheckout: false,
            name: '',
            address: '',
            email: ''
        }
    }

    checkout = (event) => {
        event.preventDefault();
        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            order: this.props.cartItems
        }
        this.props.createOrder(order);
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    total = () => {
        return this.props.cartItems.reduce((a, c) => a + (c.price * c.count), 0);
    }

    tax = () => {
        return ((3 / 100) * this.total());
    }

    nettTotal = () => {
        return this.total() + this.tax();
    }

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
                {cartItems.length !== 0 ?
                    <>
                        <div className="grid my-5 grid-cols-2">
                            <div className="my-2">Tax 3%</div>
                            <div className="my-2 text-right">
                                {formatCurrency(this.tax())}
                            </div>

                            <div className="my-2 font-black font-medium">Total</div>
                            <div className="my-2 text-right">
                                {formatCurrency(this.nettTotal())}
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button onClick={() => this.setState({ showCheckout: true })} className="flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">Proceed</button>
                        </div>
                    </>

                    : ''
                }


                {this.state.showCheckout &&
                    <form onSubmit={this.checkout}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" name="email" type="email" required onChange={this.handleInput} />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                            <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" name="name" type="text" required onChange={this.handleInput} />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                            <textarea className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" name="address" type="text" required onChange={this.handleInput} />
                        </div>
                        <div>
                            <button type="submit" className="flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
                                Checkout
                            </button>
                        </div>
                    </form>
                }
            </div>
        )
    }
}