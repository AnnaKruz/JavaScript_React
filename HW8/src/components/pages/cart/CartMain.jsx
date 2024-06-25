
const CartMain = () => {
    
    return (
        <main className="main">
            <section className="sub_nav">
                <div className="sub_nav__content center">
                    <div className="sub_nav__content__left">
                        <h1>SHOPPING CART</h1>
                    </div>
                </div>
            </section>
            <section className="cart center">
                <div className="cart__box">
                    <div className="cart__box__left">
                        <div className="cart__box__left__products">
                            <div className="cart__box__left__products__product">
                                <img src="img/cart/1.jpg" alt="product"/>
                                    <div className="cart__box__left__products__product__box">
                                        <div className="cart__box__left__products__product__box__description">
                                            <h1>MANGO PEOPLE<br/>T-SHIRT</h1>
                                            <div className="cart__box__left__products__product__box__description__attributes">
                                                <p>Price: <span>$300</span></p>
                                                <p>Color: Red</p>
                                                <p>Size: Xl</p>
                                                <div className="cart_product_quantity">
                                                    <p>Quantity:</p>
                                                    <input type="number" value="1" min="1" name="count_1" id="count_1"/>
                                                </div>
                                            </div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                             fill="none">
                                            <path
                                                d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                                                fill="#575757" />
                                        </svg>
                                    </div>

                            </div>
                            <div className="cart__box__left__products__product">
                                <img src="img/cart/2.jpg" alt="product"/>
                                    <div className="cart__box__left__products__product__box">
                                        <div className="cart__box__left__products__product__box__description">
                                            <h1>MANGO PEOPLE<br/>T-SHIRT</h1>
                                            <div className="cart__box__left__products__product__box__description__attributes">
                                                <p>Price: <span>$300</span></p>
                                                <p>Color: Red</p>
                                                <p>Size: Xl</p>
                                                <div className="cart_product_quantity">
                                                    <p>Quantity:</p>
                                                    <input type="number" value="1" min="1" name="count_2" id="count_2"/>
                                                </div>
                                            </div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                             fill="none">
                                            <path
                                                d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                                                fill="#575757" />
                                        </svg>
                                    </div>
                            </div>
                        </div>
                        <div className="cart__box__left__buttons">
                            <button className="cart__button">CLEAR SHOPPING CART</button>
                            <button className="cart__button">CONTINUE SHOPPING</button>
                        </div>
                    </div>
                    <div className="cart__box__right">
                        <form action="#" className="cart__box__right__child">
                            <fieldset className="cart__box__right__client_info">
                                <legend className="cart__box__right__client_info__title">SHIPPING ADRESS</legend>
                                <input type="text" name="Country" id="country" placeholder="Country" required/>
                                    <input type="text" name="State" id="state" placeholder="State" required/>
                                        <input type="text" name="Postcode" id="postcode" placeholder="Postcode / Zip" required/>
                            </fieldset>
                            <button type="submit" className="cart__button">GET A QUOTE</button>
                        </form>
                        <div className="cart__box__right__price_info cart__box__right__child">
                            <div className="cart__box__right__price_info__text">
                                <p>SUB TOTAL <span>$900</span></p>
                                <p>GRAND TOTAL <span>$900</span></p>
                            </div>
                            <button className="cart__box__right__price_info__button">PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CartMain;