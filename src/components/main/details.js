import React from 'react';
import RelBooks from './relatedBook';
import store from '../../redux/store';

import './style/details.css';

const Details = () => {
    function buyBooks () {
        if (store.getState().items === 1) {
            return "this product"
        }
        else if (store.getState().items === 2) {
            return "both products"
        }
        else {
            return "all 3 products"
        }
    }
    return(
        <span className="details">
            <div className="book-title">Kota Question Bank Physics For NEET</div>
            <span className="author">By <span className="orange">Girish Gaur</span>&nbsp; 
            <a className="a" href="#relevant">more</a> |&nbsp;
            <i className="fas fa-eye" />
            <span className="orange"> 4360 Views </span>
            </span>
            <table className="price-table">
                <tr>
                    <td className="td sp orange">
                        Selling Price
                    </td>
                    <td className="td sp-value orange">
                        : ₹ 435.00
                    </td>
                </tr>
                <tr>
                    <td className="td mrp">
                        MRP
                    </td>
                    <td className="td mrp-value">
                        : ₹ 580.00
                    </td>
                </tr>
                <tr>
                    <td className="td save">
                        You will save
                    </td>
                    <td className="td save-value">
                        : ₹ 145.00 after 25% discount
                    </td>
                </tr>
            </table>
            <div className="button-section">
                <button className="button orange white-back">Add to cart</button>
                <button className="button orange-grad">Buy this eBook</button>
            </div>
            <span className="social">
                <a href="#top">
                    <i className="far fa-heart fa-lg fa-lg-margin orange" />
                    <span className="grey-text">Add to Wish List</span>
                </a>
                <a href="#top">
                    <i className="fas fa-share-alt fa-lg fa-lg-margin orange" />
                    <span className="grey-text">Share</span>
                </a>
                </span>
            <div className="offers-section">
                <div className="offers orange row-top"><i className="fas fa-percent" />SAVE EXTRA WITH 2 OFFERS</div>
                <div className="offers">
                    <div className="orange">
                        Get ₹ 50
                    </div>
                    <div className="grey-text">
                        Instant Cashback on the purchase of ₹ 400 or above
                    </div>
                </div>
                <div className="offers row-bottom">
                    <div className="orange">NEW35</div>
                    <div className="grey-text">Get Flat 35% Off on your First Order</div>
                </div>
            </div>
        
            <br />
            <span className="grey-text">Product Specifications</span>
            <table className="grey-text grey-border spec-table">
                <tr>
                    <td className="td-label">
                    Publisher
                    </td>
                    <td className="td-value">
                    <a href="#top" className="spec-link">G R Bathla Publications</a>
                    </td>
                </tr>
                <tr>
                    <td className="td-label">
                    ISBN
                    </td>
                    <td className="td-value">
                    9788194414223
                    </td>
                </tr>
                <tr>
                    <td className="td-label grey-border">
                    Author
                    </td>
                    <td className="td-value">
                    <a href="#top" className="spec-link">Girish Gaur</a>
                    </td>
                </tr>
                <tr>
                    <td className="td-label">
                    Number of Pages
                    </td>
                    <td className="td-value">
                    689
                    </td>
                </tr>
                <tr>
                    <td className="td-label">
                    Available
                    </td>
                    <td className="td-value">
                    <i className="fas fa-desktop" />&nbsp;
                    <i className="fas fa-tablet-alt" />&nbsp;
                    <i className="fas fa-mobile-alt" />&nbsp;
                    Available in all digital devices
                    </td>
                </tr>
            </table>
        
            <div className="rel-books">
                <RelBooks index="0" className="book-locked" check={true} />
                <RelBooks index="1"/>
                <RelBooks index="2"/>
            </div>

            <div className="bottom-line">
                <span className="bl-col-1">Selected items: <b>{store.getState().items}</b></span>
                <span className="bl-col-2">
                    <div className="orange">Offer Price : ₹{store.getState().totalPrice}</div>
                    <div className="save">You Save : ₹{store.getState().savePrice}</div>
                </span>
                <span className="bl-col-3">
                    <button className="button orange-grad">Buy {buyBooks()}</button>                    
                </span>
            </div>
       
        </span>
    )
}

export default Details;