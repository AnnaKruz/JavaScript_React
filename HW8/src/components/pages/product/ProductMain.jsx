import {Link} from "react-router-dom";

const ProductMain = () => {
    
    return (
        <main className="main">
            <section className="sub_nav">
                <div className="sub_nav__content center">
                    <div className="sub_nav__content__left">
                        <h1>NEW ARRIVALS</h1>
                    </div>
                    <nav className="sub_nav__content__right" aria-label="breadcrumb">
                        <ol className="sub_nav__content__right__breadcrumb">
                            <li className="sub_nav__content__right__breadcrumb__item_link"><Link to="/">HOME</Link>
                            </li>
                            <li className="sub_nav__content__right__breadcrumb__item_link"><Link to="#">WOMEN</Link></li>
                            <li className="sub_nav__content__right__breadcrumb__item_link active" aria-current="page"><Link to="catalog">NEW ARRIVALS</Link></li>
                        </ol>
                    </nav>
                </div>
            </section>
            <div className="image">
                <section className="carousel" aria-label="Gallery">
                    <ol className="carousel__viewport">
                        <li id="carousel__slide1" tabindex="0" className="carousel__slide">
                            <div className="carousel__snapper">
                                <a href="#carousel__slide4" className="carousel__prev"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31"
                                    fill="none">
                                    <path className="arrow_path"
                                          d="M21.6998 7.7499L13.9498 15.4999L21.6998 23.2499L20.1498 26.3499L9.2998 15.4999L20.1498 4.6499L21.6998 7.7499Z"
                                          fill="black" />
                                </svg></a>
                                <a href="#carousel__slide2" className="carousel__next"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31"
                                    fill="none">
                                    <path className="arrow_path"
                                          d="M9.2998 23.2499L17.0498 15.4999L9.2998 7.7499L10.8498 4.6499L21.6998 15.4999L10.8498 26.3499L9.2998 23.2499Z"
                                          fill="black" />
                                </svg></a>
                            </div>
                        </li>
                        <li id="carousel__slide2" tabindex="0" className="carousel__slide">
                            <div className="carousel__snapper"></div>
                            <a href="#carousel__slide1" className="carousel__prev"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                    width="31" height="31" viewBox="0 0 31 31" fill="none">
                                <path className="arrow_path"
                                      d="M21.6998 7.7499L13.9498 15.4999L21.6998 23.2499L20.1498 26.3499L9.2998 15.4999L20.1498 4.6499L21.6998 7.7499Z"
                                      fill="black" />
                            </svg></a>
                            <a href="#carousel__slide3" className="carousel__next"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                    width="31" height="31" viewBox="0 0 31 31" fill="none">
                                <path className="arrow_path"
                                      d="M9.2998 23.2499L17.0498 15.4999L9.2998 7.7499L10.8498 4.6499L21.6998 15.4999L10.8498 26.3499L9.2998 23.2499Z"
                                      fill="black" />
                            </svg></a>
                        </li>
                        <li id="carousel__slide3" tabindex="0" className="carousel__slide">
                            <div className="carousel__snapper"></div>
                            <a href="#carousel__slide2" className="carousel__prev"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                    width="31" height="31" viewBox="0 0 31 31" fill="none">
                                <path className="arrow_path"
                                      d="M21.6998 7.7499L13.9498 15.4999L21.6998 23.2499L20.1498 26.3499L9.2998 15.4999L20.1498 4.6499L21.6998 7.7499Z"
                                      fill="black" />
                            </svg></a>
                            <a href="#carousel__slide4" className="carousel__next"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                    width="31" height="31" viewBox="0 0 31 31" fill="none">
                                <path className="arrow_path"
                                      d="M9.2998 23.2499L17.0498 15.4999L9.2998 7.7499L10.8498 4.6499L21.6998 15.4999L10.8498 26.3499L9.2998 23.2499Z"
                                      fill="black" />
                            </svg></a>
                        </li>
                        <li id="carousel__slide4" tabindex="0" className="carousel__slide">
                            <div className="carousel__snapper"></div>
                            <a href="#carousel__slide3" className="carousel__prev"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                    width="31" height="31" viewBox="0 0 31 31" fill="none">
                                <path className="arrow_path"
                                      d="M21.6998 7.7499L13.9498 15.4999L21.6998 23.2499L20.1498 26.3499L9.2998 15.4999L20.1498 4.6499L21.6998 7.7499Z"
                                      fill="black" />
                            </svg></a>
                            <a href="#carousel__slide1" className="carousel__next"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                    width="31" height="31" viewBox="0 0 31 31" fill="none">
                                <path className="arrow_path"
                                      d="M9.2998 23.2499L17.0498 15.4999L9.2998 7.7499L10.8498 4.6499L21.6998 15.4999L10.8498 26.3499L9.2998 23.2499Z"
                                      fill="black" />
                            </svg></a>
                        </li>
                    </ol>
                </section>
            </div>
            <section className="info">
                <div className="info__box">
                    <h3 className="info__box__collection">WOMEN COLLECTION</h3>
                    <img src="img/products/show/line_pink.svg" alt="line" className="info__box__pink_line"/>
                        <h2 className="info__box__pos_name">MOSCHINO CHEAP AND CHIC</h2>
                        <p className="info__box__subscription">Compellingly actualize fully researched processes before
                            proactive
                            outsourcing.
                            Progressively syndicate collaborative architectures before cutting-edge services. Completely
                            visualize parallel core competencies rather than exceptional portals.</p>
                        <h1 className="info__box__price">$561</h1>
                        <img src="img/products/show/line_grey.svg" alt="line" className="info__box__grey_line"/>
                            <div className="info__box__options">
                                <div className="info__box__options__box">
                                    <details className="info__box__options__box__option">
                                        <summary>CHOOSE COLOR<img src="img/products/show/arrow_down.svg" alt="arrow down"/>
                                        </summary>
                                    </details>
                                    <details className="info__box__options__box__option">
                                        <summary>CHOOSE SIZE<img src="img/products/show/arrow_down.svg" alt="arrow down"/>
                                        </summary>
                                    </details>
                                    <details className="info__box__options__box__option">
                                        <summary>QUANTITY<img src="img/products/show/arrow_down.svg" alt="arrow down"/></summary>
                                    </details>
                                </div>
                            </div>
                            <button className="info__box__add_button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="25" viewBox="0 0 27 25" fill="none">
                                    <path className="add_button_path"
                                          d="M5.49847 22.185C5.50635 21.752 5.64091 21.3309 5.88519 20.9748C6.12947 20.6186 6.47261 20.3431 6.87158 20.1828C7.27055 20.0226 7.7076 19.9848 8.12781 20.0741C8.54802 20.1635 8.93269 20.376 9.23358 20.685C9.53447 20.994 9.73817 21.3857 9.81909 21.811C9.90002 22.2363 9.85453 22.6763 9.68842 23.0756C9.52231 23.475 9.24296 23.8161 8.88538 24.0559C8.52779 24.2957 8.10791 24.4237 7.67847 24.4237C7.38955 24.4211 7.10399 24.3611 6.83807 24.2472C6.57216 24.1333 6.3311 23.9676 6.12866 23.7597C5.92623 23.5518 5.76639 23.3057 5.65826 23.0355C5.55013 22.7653 5.49584 22.4763 5.49847 22.185ZM21.3045 24.4237C20.8711 24.4303 20.4453 24.3087 20.0797 24.074C19.7141 23.8393 19.4247 23.5017 19.2471 23.103C19.0696 22.7042 19.0117 22.2618 19.0806 21.8303C19.1496 21.3988 19.3423 20.9971 19.6351 20.6748C19.9278 20.3524 20.3077 20.1236 20.728 20.0165C21.1482 19.9095 21.5903 19.929 21.9997 20.0724C22.4091 20.2159 22.7679 20.4771 23.0317 20.8238C23.2956 21.1706 23.453 21.5877 23.4845 22.0236C23.5269 22.6155 23.3369 23.2004 22.9555 23.6523C22.7706 23.8745 22.5436 24.0574 22.2877 24.1901C22.0319 24.3227 21.7524 24.4025 21.4655 24.4247L21.3045 24.4237ZM8.59351 17.4855C8.38116 17.4851 8.17488 17.414 8.00671 17.2833C7.83855 17.1525 7.71792 16.9694 7.66351 16.7624L3.73651 2.19527H0.978516C0.719001 2.19527 0.470064 2.09128 0.28656 1.90622C0.103056 1.72116 0 1.47018 0 1.20847C0 0.946764 0.103056 0.695782 0.28656 0.510726C0.470064 0.325669 0.719001 0.22168 0.978516 0.22168H4.45752C4.66982 0.222254 4.876 0.293463 5.04413 0.424184C5.21226 0.554905 5.33295 0.737883 5.38751 0.944787L9.31451 15.5119H20.0185L23.5765 7.12665H11.7185C11.459 7.12665 11.2101 7.02266 11.0266 6.83761C10.8431 6.65255 10.74 6.40157 10.74 6.13986C10.74 5.87815 10.8431 5.62717 11.0266 5.44211C11.2101 5.25705 11.459 5.15306 11.7185 5.15306H25.0535C25.2131 5.15352 25.3701 5.19451 25.5099 5.27223C25.6497 5.34995 25.7679 5.46195 25.8535 5.59784C25.9413 5.73569 25.9945 5.89303 26.0084 6.05627C26.0224 6.21951 25.9966 6.38368 25.9335 6.53465L21.5425 16.8935C21.469 17.0684 21.3462 17.2177 21.1895 17.3229C21.0327 17.4281 20.8488 17.4846 20.6605 17.4855H8.59351Z"
                                          fill="#EF5B70" />
                                </svg>
                                Add to Cart
                            </button>
                </div>
            </section>
            <section className="product">
                <div className="product__items">
                    <figure className="product__item">
                        <div className="product__view">
                            <img src="img/products/4.jpg" alt="product photo" className="product__img"/>
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
            </section>
        </main>
    );
};

export default ProductMain;