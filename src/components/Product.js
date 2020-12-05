import React, { Component } from 'react';
import formatCurrency from '../helpers/util';

export default class Product extends Component {
    render() {
        return (
            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
                {this.props.products.map((prod, index) => {
                    return (
                        <div key={index} className="p-6 bg-white shadow-sm">
                            <div className="flex justify-center">
                                <a href={"#" + prod._id}>
                                    <img className="product-image" src={prod.image} alt={prod.desc} />
                                </a>
                            </div>
                            <div>
                                <a href={"#" + prod.id}>
                                    <div className="text-md font-medium text-black">{prod.title}</div>
                                </a>
                            </div>
                            <div className="flex content-center justify-between my-3">
                                <div className="text-3xl text-gray-500">
                                    {formatCurrency(prod.price)}
                                </div>
                                <div>
                                    <button className="flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
                                        Add to cart
                                </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}