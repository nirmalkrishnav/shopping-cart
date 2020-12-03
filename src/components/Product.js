import React, { Component } from 'react';

export default class Product extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.products.map(prod => {
                        return <li key={prod.id}>
                            {prod.title}
                            <br />
                            ${prod.price}
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}