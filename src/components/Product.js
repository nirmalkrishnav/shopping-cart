import React, { Component } from 'react';

export default class Product extends Component {
    render() {
        return (
            <div>
                {this.props.products.map(prod => {
                    return (
                        <div key={prod.id} className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
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