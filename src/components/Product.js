import React, { Component } from 'react';
import formatCurrency from '../helpers/util';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';
import { connect } from 'react-redux';
import { fetchProducts } from './../actions/product.actions';

class Product extends Component {
    constructor(props) {
        super();
        this.state = {
            productInModal: null
        };
    }
    componentDidMount() {
        this.props.fetchProducts();
    }
    openModal = (productInModal) => {
        this.setState({ productInModal });
    }

    closeModal = () => {
        let productInModal = null;
        this.setState({ productInModal });
    }

    render() {
        const { productInModal } = this.state;

        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)'
            }
        };

        return (
            <>
                <Fade bottom cascade>
                    {!this.props.products > 0 ? (<div>Loading...</div>) :
                        (<div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
                            {
                                this.props.products.map((prod, index) => {
                                    return (

                                        <div key={index} className="p-6 bg-white shadow-sm">
                                            <div className="flex justify-center">
                                                <a href={"#" + prod._id} onClick={() => this.openModal(prod)}>
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
                                                    <button
                                                        onClick={() => this.props.addToCart(prod)}
                                                        className="flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
                                                        Add to cart
                                                       </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>)
                    }
                </Fade>
                {productInModal && (
                    <Modal isOpen={true}
                        ariaHideApp={false}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                    >
                        <Zoom>
                            <div className="max-w-sm w-full lg:max-w-full lg:flex">
                                <div className="h-auto lg:h-auto lg:w-60 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                                    <img className="product-image" src={productInModal.image} alt={productInModal.desc} />
                                </div>
                                <div className="p-4 flex flex-col justify-between leading-normal">
                                    <div className="mb-8">
                                        <p className="text-sm text-gray-600 flex items-center">
                                            Members only
                                        </p>
                                        <div className="text-gray-900 font-bold text-xl mb-2">
                                            {productInModal.title}
                                        </div>
                                        <p className="text-gray-700 text-base">
                                            {productInModal.desc}
                                        </p>
                                        <p className="text-gray-900 text-base">
                                            {productInModal.sizes.map((size, index) => (
                                                <span key={index}>
                                                    {" "}
                                                    <button>{size}</button>
                                                </span>
                                            ))}
                                        </p>
                                        <div className="grid my-5 grid-cols-2">
                                            <div className="text-3xl text-gray-500">
                                                {formatCurrency(productInModal.price)}
                                            </div>
                                            <div>
                                                <button onClick={() => {
                                                    this.props.addToCart(productInModal);
                                                    this.closeModal();
                                                }} className="flex-shrink-0 bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
                                                    Add to cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                    </Modal>
                )}
            </>
        )
    }
}

export default connect((state) => ({ products: state.products.items }), {
    fetchProducts
})(Product);