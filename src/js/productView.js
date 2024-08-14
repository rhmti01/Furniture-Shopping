import Storage from "./storage.js";

export default class productView {

    constructor() {
        this.cart = Storage.getCart()
        this.buttonsDom = []
        this.dataProducts = Storage.getDataProducts()
        this.searchInput = document.querySelector("#search-input")
        this.cartBtn = document.querySelector("#cart-btn")
        this.modal = document.querySelector("#modal")
        this.backDrop = document.querySelector("#backdrop")
        this.productsHtml = document.querySelector("#productsCenter")
        this.productsModalHtml = document.querySelector("#modalProducts")
        this.totalPriceHtml = document.querySelector("#totalPrice")
        this.productQtys = document.querySelector("#productsQuantity")
        this.cofirmBtn = document.querySelector("#confirm")
        this.clearAllBtn = document.querySelector("#clearAll")

        // toggle cart modal show/hide
        this.cartBtn.addEventListener("click", () => {
            this.showModal()
        })
        this.cofirmBtn.addEventListener("click", ()=>[
            this.hideModal()
        ])
        this.backDrop.addEventListener("click", () => {
            this.hideModal()
        })
        // clear cart products at once
        this.clearAllBtn.addEventListener("click",()=>[
            this.clearProductsCart()
        ])

    }

        // set Application startup methods
        setupApp() {
            this.showProducts(this.dataProducts)
            this.showBoughtProducts(this.cart)
            this.setTotalCartValue(this.cart)
        }    


    showProducts(products) {
        let output = ' '
        products.forEach(product => {
            output += `
                                <!-- shop product -->
                <div
                   data-id='${product.id}'  class=" shop-product sgx:gap-x-4  msx:flex mt-2 mb-8 relative col-span-1 bg-pink-500/ rounded-md flex items-center justify-center flex-row max:flex-col lax:h-72 mgx:h-auto mgx:w-auto">
                    <!-- product image -->
                    <img  class=" max:w-full sgx:w-24 sgx:rounded-lg max:rounded-none " src="${product.imageUrl}" alt="product-image" srcset="">
                    <!-- product info -->
                    <div class=" flex items-center justify-between  w-full bg-cyan-200/ mt-2 py-1 ">
                        <div class=" flex items-start justify-center flex-col  ">
                            <h5 class=" font-semibold text-slate-700 lsx:text-base lax:text-[15px] mgx:text-[14.5px] msx:text-[14px] max:text-[13.5px] sgx:text-[15px] ">
                                ${product.title}</h5>
                            <p
                                class=" font-semibold  lsx:text-[17px] lax:text-[16px] mgx:text-[14.5px] sgx:text-[14px] msx:text-[13.5px] max:text-[13.5px] text-slate-700 mt-1 ">
                                $${product.price}
                                <!-- <span class=" font-medium line-through  text-sm text-slate-400 ">30$</span> -->
                            </p>
                        </div>
                        <button  data-id='${product.id}' 
                            class=" cartBtn sgx:mb-6 max:mb-0 lsx:p-2 lax:p-1.5 mgx:p-1 msx:p-1 sgx:p-1 bg-slate-200/85 mgx:scale-100 msx:scale-90 hover:bg-[#029FAE] duration-500 rounded-xl  ">
                            <svg class="  " width="22" height="22" viewBox="0 0 22 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.52081 2.97917L4.42748 3.30917L5.31023 13.8261C5.34414 14.2399 5.53284 14.6258 5.83867 14.9066C6.14451 15.1875 6.545 15.3427 6.96023 15.3413H16.9611C17.3586 15.3418 17.743 15.1987 18.0435 14.9383C18.344 14.6779 18.5403 14.3178 18.5964 13.9242L19.4672 7.91267C19.4904 7.7528 19.4819 7.58991 19.4421 7.43334C19.4023 7.27676 19.3321 7.12956 19.2354 7.00015C19.1387 6.87075 19.0174 6.76168 18.8785 6.67918C18.7396 6.59667 18.5858 6.54236 18.4259 6.51934C18.3672 6.51292 4.73365 6.50834 4.73365 6.50834"
                                    stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                    stroke0linejoin="round" />
                                <path d="M12.9479 9.89542H15.4898" stroke="#272343" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M6.5578 18.5194C6.62502 18.5165 6.69213 18.5273 6.75509 18.551C6.81805 18.5748 6.87556 18.611 6.92414 18.6575C6.97273 18.7041 7.01139 18.76 7.03781 18.8219C7.06422 18.8837 7.07784 18.9503 7.07784 19.0176C7.07784 19.0849 7.06422 19.1515 7.03781 19.2134C7.01139 19.2753 6.97273 19.3312 6.92414 19.3777C6.87556 19.4243 6.81805 19.4605 6.75509 19.4842C6.69213 19.508 6.62502 19.5187 6.5578 19.5158C6.42936 19.5103 6.30801 19.4554 6.21908 19.3626C6.13015 19.2698 6.08051 19.1462 6.08051 19.0176C6.08051 18.8891 6.13015 18.7655 6.21908 18.6726C6.30801 18.5798 6.42936 18.5249 6.5578 18.5194Z"
                                    fill="#272343" stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M16.8988 18.5194C17.0312 18.5194 17.1583 18.5721 17.252 18.6657C17.3457 18.7594 17.3983 18.8865 17.3983 19.019C17.3983 19.1515 17.3457 19.2786 17.252 19.3723C17.1583 19.466 17.0312 19.5186 16.8988 19.5186C16.7663 19.5186 16.6392 19.466 16.5455 19.3723C16.4518 19.2786 16.3992 19.1515 16.3992 19.019C16.3992 18.8865 16.4518 18.7594 16.5455 18.6657C16.6392 18.5721 16.7663 18.5194 16.8988 18.5194Z"
                                    fill="#272343" stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            `

        });
        this.productsHtml.innerHTML = output
        this.addToShoppingCart()
    }

    addToShoppingCart() {
        const addToCartBtns = this.productsHtml.querySelectorAll(".cartBtn")
        this.buttonsDom = [...addToCartBtns]
        let cartProducts = Storage.getCart()

        this.buttonsDom.forEach((btn) => {
            const inCartProductId = btn.dataset.id
            const isInCart = cartProducts.find((p)=>p.id == inCartProductId)

            // change the product btn ui 
            if (isInCart) {
                btn.disabled = true
                const pathes =  [...btn.getElementsByTagName("path")]
                pathes.forEach((path)=>path.style.stroke = "#fff")
                btn.style.backgroundColor = "#029FAE"
            }

            btn.addEventListener("click", (e) => {
                const productId = e.currentTarget.dataset.id
                let cartProducts = Storage.getCart()
                // change added product btn ui
                btn.disabled = true
                const pathes =  [...btn.getElementsByTagName("path")]
                pathes.forEach((path)=>path.style.stroke = "#fff")
                btn.style.backgroundColor = "#029FAE"

                // get product from data products by id
                const addedProduct = this.dataProducts.find((product) => product.id == parseInt(productId))
                cartProducts.push({
                    ...addedProduct,
                    quantity: 1
                })
                // save cart to local storage
                Storage.saveCart(cartProducts)
                // get value of total price of cart
                this.setTotalCartValue(Storage.getCart())
                // show products that are in cart
                this.showBoughtProducts(cartProducts)
            })

        })

    }

    showModal() {
        this.backDrop.classList.remove("hidden")
        this.modal.classList.remove("hidden")
        this.backDrop.classList.add("block")
    }

    hideModal() {
        this.backDrop.classList.remove("block")
        this.modal.classList.add("hidden")
        this.backDrop.classList.add("hidden")
    }

    // show cart products in modal
    showBoughtProducts(cartProducts) {
        let output = ' '
        cartProducts.forEach((product) => {
            output += `
                    <!-- cart product -->
        <div id="boughtProduct" data-id="${product.id}" class=" flex items-center justify-between w-full bg-blue-100/ xl:mt-0 md:mt-2 mt-4 xl:py-3 md:py-2 xl:px-4 md:px-3 px-3 ">
            <!-- info -->
            <img class=" md:w-24 xl:w-28 w-20  rounded-lg " src="${product.imageUrl}" alt="" srcset="">
            <div class=" -ml-8 flex flex-col items-start justify-center ">
                <h4 class=" xl:text-lg md:text-base font-semibold text-black mr-6 ">${product.title}</h4>
                <div class="  bg-black/  flex justify-center items-center gap-x-1 mt-3  ">
                    <a
                        data-id="${product.id}"  class="addProduct xl:scale-100 md:scale-[85%] font-medium p-1.5 flex items-center justify-center cursor-pointer  bg-[#242424]  rounded-xl mx-2 ">
                        <svg width="12" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13 8H8V13C8 13.55 7.55 14 7 14C6.45 14 6 13.55 6 13V8H1C0.45 8 0 7.55 0 7C0 6.45 0.45 6 1 6H6V1C6 0.45 6.45 0 7 0C7.55 0 8 0.45 8 1V6H13C13.55 6 14 6.45 14 7C14 7.55 13.55 8 13 8Z"
                                fill="#fff" />
                        </svg>
                    </a>
                    <p class=" font-medium xl:text-[19px] md:text-[17px] p-1 text-black  rounded-md ">${product.quantity}</p>
                    <a data-id="${product.id}"
                        class="reduceProduct xl:scale-100 md:scale-[85%] font-medium p-1.5 flex items-center justify-center cursor-pointer bg-[#242424]  rounded-xl mx-2 ">
                        <svg width="12" height="12" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="14" height="2" rx="1" fill="#fff" />
                        </svg>
                    </a>
                </div>
            </div>
            <div class=" flex flex-col items-end pr-2 justify-center gap-y-6 ">
                <p class="  font-semibold  lsx:text-[17px] lax:text-[16px] text-slate-950 ">${product.price}$</p>
                <svg data-id="${product.id}"  id="dltBtn" class=" cursor-pointer xl:scale-100 md:scale-90 " width="22" height="22" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6H5H21" stroke="#E23A2E" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                        stroke="#E23A2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>

            `
        })
        this.productsModalHtml.innerHTML = output

        this.deleteProduct()
        this.changeProductQuantity()
    }

    deleteProduct(){
        const deleteProductBtns = document.querySelectorAll("#dltBtn")
        const cartProducts = Storage.getCart()
        deleteProductBtns.forEach((btn)=>{
            const deletedProductId = btn.dataset.id
            // each btn click for delete
            btn.addEventListener("click",()=>{
                const existedProducts = cartProducts.filter((product)=>product.id != deletedProductId)
                Storage.saveCart(existedProducts)
                this.showBoughtProducts(existedProducts)
                this.setTotalCartValue(existedProducts)
                this.showProducts(Storage.getDataProducts())
            })
        })
    }

    setTotalCartValue(cartProducts) {
        let cartItems = 0;
        let cartPrice = cartProducts.reduce((acc, curr) => {
            cartItems += curr.quantity
            return (acc + (curr.quantity * curr.price));
        }, 0)
        this.productQtys.innerText = cartItems;
        this.totalPriceHtml.innerText = ` ${cartPrice}$ `
    }

    clearProductsCart() {
        localStorage.removeItem("cart")
        let cartProducts = Storage.getCart()
        this.showBoughtProducts(cartProducts)
        this.setTotalCartValue(cartProducts)
        this.showProducts(Storage.getDataProducts())
    }

    changeProductQuantity() {
        let productsCart = Storage.getCart()
        const boughtProducts = [...this.productsModalHtml.children] 
        boughtProducts.forEach((product)=>{
            product.addEventListener("click" , (e)=>{
                // console.log(e.target.closest("a").classList[0]);
                const btnClass = e.target.closest("a")
                if (!btnClass) {
                    return;
                }

                switch (btnClass.classList[0]) {
    
                    case "addProduct": {
                        const increaseItem = productsCart.find((p) => p.id == e.target.closest("a").dataset.id)
                        increaseItem.quantity++;
                        e.target.closest("a").nextElementSibling.innerText = increaseItem.quantity
    
                        Storage.saveCart(productsCart)
                        this.setTotalCartValue(productsCart)
                        break;
                    }
    
                    case "reduceProduct": {
                        const decreaseItem = productsCart.find((p) => p.id == e.target.closest("a").dataset.id)
                        decreaseItem.quantity--;
    
                        if (decreaseItem.quantity < 1) {
                            productsCart = productsCart.filter((product) => product.id != decreaseItem.id)
    
                            Storage.saveCart(productsCart)
                            this.setTotalCartValue(productsCart)
                            this.showProducts(Storage.getDataProducts())
    
                            e.target.closest("a").parentElement.parentElement.parentElement.remove()
                        }
                        e.target.closest("a").previousElementSibling.innerText = decreaseItem.quantity;
                        Storage.saveCart(productsCart)
                        break;
                    }

                    default : {
                        console.log(e.target);
                         e.target.preventDefault()
                        break;
                    }
                }

            })
        })
    }

}