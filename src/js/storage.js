import {productsData} from "./productsData.js";


export default class Storage {

    static getDataProducts (){
        return productsData
    }
    
    static saveCart(cart) {
        localStorage.setItem("cart", JSON.stringify(cart))
    }

    static getCart() {
        return JSON.parse(localStorage.getItem("cart")) || []
    }
     
}
