import React from 'react';
import Filter from './components/Filter';
import Product from './components/Product';
import data from './data.json';

class App extends React.Component {


  constructor() {
    super();
    this.state = {
      products: data.products,
      size: '',
      sort: ''
    }
  }

  sortProducts = (event) => {
    const sortVal = event.target.value;
    this.setState((state) => ({
      sort: sortVal,
      products: this.state.products.slice().sort((a, b) => {
        if (sortVal === 'Lowest') {
          return ((a.price > b.price) ? 1 : -1)
        } else if (sortVal === 'Highest') {
          return ((a.price < b.price) ? 1 : -1)
        } else {
          return ((a._id > b._id) ? 1 : -1)
        }
      })
    }))
  }

  filterProducts = (event) => {
    if (event.target.value === '') {
      this.setState({
        size: event.target.value,
        products: data.products
      })
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(prod => prod.sizes.includes(event.target.value))

      })
    }

  }

  render() {
    return (
      <div className="flex flex-col min-h-screen">

        <header className="p-3">

          <div className="grid grid-cols-3 gap-4">
            <div className=""></div>
            <div className="text-center">
              <a href="/" className="text-yellow-600 font-bold">Wroomlando</a>
            </div>
            <div className=""></div>
          </div>


        </header>
        <main className="flex-grow p-3">
          <div className="grid lg:grid-cols-4 md:grid-cols-4  gap-2 sm:grid-cols-1">
            <div className="col-span-3">
              <Filter count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              />
              <Product products={this.state.products} />
            </div>
            <div className="col-span-1">
              Cart
            </div>
          </div>



        </main>
        <footer className="bg-gray-900 text-white p-3">
          footer
        </footer>
      </div>
    );
  }
}

export default App;
