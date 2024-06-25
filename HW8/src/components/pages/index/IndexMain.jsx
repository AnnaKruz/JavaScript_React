import {Link} from "react-router-dom";
import OfferBox from "./main/OfferBox";

const IndexMain = () => {
    
    return (
        <main className="main">
            <OfferBox/>
            <section className="products">
                <div className="product__content center">
                    <div className="product__head">
                        <h2 className="product__title">Fetured Items</h2>
                        <p className="product__subtitle">Shop for items based on what we featured in this week</p>
                    </div>
                    <div className="product__items">
                        <figure className="product__item">
                            <div className="product__view">
                                <img src="img/products/1.jpg" alt="product photo" className="product__img"/>
                                    <div className="product__rectangle"></div>
                                    <div className="product__button">
                                        <img src="img/products/cart.svg" alt="cart"/>
                                            Add to Cart
                                    </div>
                            </div>
                            <figcaption className="product__info">
                                <h5>ELLERY X M'O CAPSULE</h5>
                                <p>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool
                                    Kym Ellery teams up with Moda Operandi.</p>
                                <h4>52.00</h4>
                            </figcaption>
                        </figure>
                        <figure className="product__item">
                            <div className="product__view">
                                <img src="img/products/2.png" alt="product photo" className="product__img"/>
                                    <div className="product__rectangle"></div>
                                    <button className="product__button">
                                        <img src="img/products/cart.svg" alt="cart"/>
                                            Add to Cart
                                    </button>
                            </div>
                            <figcaption className="product__info">
                                <h5>ELLERY X M'O CAPSULE</h5>
                                <p>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool
                                    Kym Ellery teams up with Moda Operandi.</p>
                                <h4>52.00</h4>
                            </figcaption>
                        </figure>
                        <figure className="product__item">
                            <div className="product__view">
                                <img src="img/products/3.jpg" alt="product photo" className="product__img"/>
                                    <div className="product__rectangle"></div>
                                    <button className="product__button">
                                        <img src="img/products/cart.svg" alt="cart"/>
                                            Add to Cart
                                    </button>
                            </div>
                            <figcaption className="product__info">
                                <h5>ELLERY X M'O CAPSULE</h5>
                                <p>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool
                                    Kym Ellery teams up with Moda Operandi.</p>
                                <h4>52.00</h4>
                            </figcaption>
                        </figure>
                        <figure className="product__item">
                            <div className="product__view">
                                <img src="img/products/4.jpg" alt="product photo" className="product__img"/>
                                    <div className="product__rectangle"></div>
                                    <button className="product__button">
                                        <img src="img/products/cart.svg" alt="cart"/>
                                            Add to Cart
                                    </button>
                            </div>
                            <figcaption className="product__info">
                                <h5>ELLERY X M'O CAPSULE</h5>
                                <p>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool
                                    Kym Ellery teams up with Moda Operandi.</p>
                                <h4>52.00</h4>
                            </figcaption>
                        </figure>
                        <figure className="product__item">
                            <div className="product__view">
                                <img src="img/products/5.jpg" alt="product photo" className="product__img"/>
                                    <div className="product__rectangle"></div>
                                    <button className="product__button">
                                        <img src="img/products/cart.svg" alt="cart"/>
                                            Add to Cart
                                    </button>
                            </div>
                            <figcaption className="product__info">
                                <h5>ELLERY X M'O CAPSULE</h5>
                                <p>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool
                                    Kym Ellery teams up with Moda Operandi.</p>
                                <h4>52.00</h4>
                            </figcaption>
                        </figure>
                        <figure className="product__item">
                            <div className="product__view">
                                <img src="img/products/6.jpg" alt="product photo" className="product__img"/>
                                    <div className="product__rectangle"></div>
                                    <button className="product__button">
                                        <img src="img/products/cart.svg" alt="cart"/>
                                            Add to Cart
                                    </button>
                            </div>
                            <figcaption className="product__info">
                                <h5>ELLERY X M'O CAPSULE</h5>
                                <p>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool
                                    Kym Ellery teams up with Moda Operandi.</p>
                                <h4>52.00</h4>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="product__bottom">
                        <Link to="#" className="product__browse__all">Browse All Product</Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default IndexMain;