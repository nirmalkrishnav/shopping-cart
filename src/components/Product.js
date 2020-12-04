import React, { Component } from 'react';

export default class Product extends Component {
    render() {
        return (
            <div className="grid grid-flow-col grid-cols-3 gap-4">
                {this.props.products.map((prod, index) => {
                    return (
                        <div key={index} className="p-6 bg-white rounded-xl shadow-md flex">
                            <div className="flex-shrink-0">
                                <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
                            </div>
                            <div>
                                <div className="text-xl font-medium text-black">{prod.title}</div>
                                <p className="text-gray-500">${prod.price}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}