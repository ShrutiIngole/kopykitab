import { createStore } from 'redux';
import reducer from './reducer';

const initialState = {
    items: 1,
    totalPrice: 435.00,
    savePrice: 145.00,
    list: [
        {
            index: 0,
            name: "Kota Question Bank Physics For NEET",
            selected: true,
            disabled: true,
            mrp: 580.00,
            sp: 435.00,
            imgSrc: "https://static.kopykitab.com/image/cache/data/bathla-publications/grb002-300x380.jpg",
            cssId: "book-locked",
            status: "Selected"
        },
        {
            index: 1,
            name: "Kota Question Mathematics for IIT-JEE",
            selected: false,
            disabled: false,
            mrp: 620.00,
            sp: 465.00,
            imgSrc: "https://static.kopykitab.com/image/cache/data/bathla-publications/grb015-300x380.jpg",
            cssId: "left-border",
            status: ""
        },
        {
            index: 2,
            name: "Modern ABC of Objective Physics JEE Main Part-1 and 2",
            selected: false,
            disabled: false,
            mrp: 865.00,
            sp: 443.75,
            imgSrc: "https://static.kopykitab.com/image/cache/data/mbd-group-publishers/mbd0347-300x380.jpg",
            cssId: "left-border",
            status: ""
        }
    ]
}
const store = createStore(reducer, initialState);
export default store;