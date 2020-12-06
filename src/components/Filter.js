import React, { Component } from 'react';

export default class Filter extends Component {
    render() {
        return (
            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3">
                <div>
                    {this.props.count} products found
                </div>
                <div>
                    Sort
                    <select className="mx-2" value={this.props.sort} onChange={this.props.sortProducts}>
                        <option value="Latest">Latest</option>
                        <option value="Lowest">Lowest</option>
                        <option value="Highest">Highest</option>
                    </select>
                </div>
                <div>
                    Size
                    <select className="mx-2" value={this.props.size} onChange={this.props.filterProducts}>
                        <option value="all">All</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </div>
            </div>
        )
    }
}