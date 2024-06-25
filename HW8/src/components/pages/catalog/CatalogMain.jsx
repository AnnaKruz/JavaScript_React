import {Link} from "react-router-dom";

const CatalogMain = () => {

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
                            <li className="sub_nav__content__right__breadcrumb__item_link"><Link to="#">MEN</Link></li>
                            <li className="sub_nav__content__right__breadcrumb__item_link active" aria-current="page"><Link to="catalog">NEW ARRIVALS</Link></li>
                        </ol>
                    </nav>
                </div>
            </section>
            <section className="catalog_page center">
                <div className="catalog_page__filter_sort">
                    <div className="catalog_page__filter_sort__box">
                        <details className="catalog_page__filter_sort__box__filter">
                            <summary><span>FILTER</span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="10"
                                                             viewBox="0 0 15 10" fill="none">
                                <path
                                    d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
                                    fill="#000" />
                            </svg></summary>
                            <nav className="catalog_page__filter_sort__box__filter__menu">
                                <ol>
                                    <li className="catalog_page__filter_sort__box__filter__menu__category">
                                        <details open>
                                            <summary
                                                className="catalog_page__filter_sort__box__filter__menu__category__subcategory">
                                                <img src="img/catalog/line.svg" alt="line"/><span>CATEGORY</span>
                                            </summary>
                                            <ol>
                                                <li><Link to="#">Accessories</Link></li>
                                                <li><Link to="#">Bags</Link></li>
                                                <li><Link to="#">Denim</Link></li>
                                                <li><Link to="#">Hoodies & Sweatshirts</Link></li>
                                                <li><Link to="#">Jackets & Coats</Link></li>
                                                <li><Link to="#">Polos</Link></li>
                                                <li><Link to="#">Shirts</Link></li>
                                                <li><Link to="#">Shoes</Link></li>
                                                <li><Link to="#">Sweaters & Knits</Link></li>
                                                <li><Link to="#">T-Shirts</Link></li>
                                                <li><Link to="#">Tanks</Link></li>
                                            </ol>
                                        </details>
                                    </li>
                                    <li className="catalog_page__filter_sort__box__filter__menu__category">
                                        <details>
                                            <summary
                                                className="catalog_page__filter_sort__box__filter__menu__category__subcategory">
                                                <img src="img/catalog/line.svg" alt="line"/><span>BRAND</span>
                                            </summary>
                                            <ol>
                                                <li><Link to="#">Adidas</Link></li>
                                                <li><Link to="#">Puma</Link></li>
                                                <li><Link to="#">Nike</Link></li>
                                                <li><Link to="#">Asics</Link></li>
                                                <li><Link to="#">Anta</Link></li>
                                            </ol>
                                        </details>
                                    </li>
                                    <li className="catalog_page__filter_sort__box__filter__menu__category">
                                        <details>
                                            <summary
                                                className="catalog_page__filter_sort__box__filter__menu__category__subcategory">
                                                <img src="img/catalog/line.svg" alt="line"/><span>DESIGNER</span>
                                            </summary>
                                            <ol>
                                                <li><Link to="#">Sport</Link></li>
                                                <li><Link to="#">Work</Link></li>
                                            </ol>
                                        </details>
                                    </li>
                                </ol>
                            </nav>
                        </details>
                        <div className="catalog_page__filter_sort__box__options">
                            <div className="info__box__options__box catalog_page__filter_sort__box__options__all_options">
                                <details
                                    className="info__box__options__box__option catalog_page__filter_sort__box__options__all_options__option">
                                    <summary>TRENDING NOW<img src="img/products/show/arrow_down.svg" alt="arrow down"/>
                                    </summary>
                                    <form
                                        className="catalog_page__filter_sort__box__options__all_options__option__list trending_now_frame"
                                        action="#">
                                        <ol>
                                            <li><input type="checkbox" name="new" id="new"
                                                       className="options_checkbox"/><label for="new">new</label></li>
                                            <li><input type="checkbox" name="2022" id="2022"
                                                       className="options_checkbox"/><label for="2022">2022</label></li>
                                            <li><input type="checkbox" name="2021" id="2021"
                                                       className="options_checkbox"/><label for="2021">2021</label></li>
                                            <li><input type="checkbox" name="2020" id="2020"
                                                       className="options_checkbox"/><label for="2020">2020</label></li>
                                        </ol>
                                    </form>
                                </details>
                                <details
                                    className="info__box__options__box__option catalog_page__filter_sort__box__options__all_options__option">
                                    <summary>SIZE<img src="img/products/show/arrow_down.svg" alt="arrow down"/></summary>
                                    <form
                                        className="catalog_page__filter_sort__box__options__all_options__option__list size_frame"
                                        action="#">
                                        <ol>
                                            <li><input type="checkbox" name="XS" id="xs" className="options_checkbox"/><label
                                                for="xs">XS</label></li>
                                            <li><input type="checkbox" name="S" id="s" className="options_checkbox"/><label
                                                for="s">S</label></li>
                                            <li><input type="checkbox" name="M" id="m" className="options_checkbox"/><label
                                                for="m">M</label></li>
                                            <li><input type="checkbox" name="L" id="l" className="options_checkbox"/><label
                                                for="l">L</label></li>
                                            <li><input type="checkbox" name="XL" id="xl" className="options_checkbox"/><label
                                                for="xl">XL</label></li>
                                        </ol>
                                    </form>
                                </details>
                                <details
                                    className="info__box__options__box__option catalog_page__filter_sort__box__options__all_options__option">
                                    <summary>PRICE<img src="img/products/show/arrow_down.svg" alt="arrow down"/>
                                    </summary>
                                    <form
                                        className="catalog_page__filter_sort__box__options__all_options__option__list price_frame"
                                        action="#">
                                        <ol>
                                            <li><input type="checkbox" name="price1" id="price1"
                                                       className="options_checkbox"/><label for="price1">Дорого</label></li>
                                            <li><input type="checkbox" name="price2" id="price2"
                                                       className="options_checkbox"/><label for="price2">Очень дорого</label></li>
                                            <li><input type="checkbox" name="price3" id="price3"
                                                       className="options_checkbox"/><label for="price3">Ещё дороже</label></li>
                                        </ol>
                                    </form>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="catalog_page__list">
                    <div className="product__items">
                        <figure className="product__item">
                            <div className="product__view">
                                <img src="img/catalog/men/1.jpg" alt="product photo" className="product__img"/>
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
                                <img src="img/catalog/men/2.png" alt="product photo" className="product__img"/>
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
                                <img src="img/catalog/men/3.jpg" alt="product photo" className="product__img"/>
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
                                <img src="img/catalog/men/4.jpg" alt="product photo" className="product__img"/>
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
                                <img src="img/catalog/men/5.jpg" alt="product photo" className="product__img"/>
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
                                <img src="img/catalog/men/6.jpg" alt="product photo" className="product__img"/>
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
                                <img src="img/catalog/men/7.jpg" alt="product photo" className="product__img"/>
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
                                <img src="img/catalog/men/8.jpg" alt="product photo" className="product__img"/>
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
                                <img src="img/catalog/men/9.jpg" alt="product photo" className="product__img"/>
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
                </div>
                <nav className="catalog_page__nav">
                    <div className="catalog_page__nav__box">
                        <button className="catalog_page__nav__box__arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14"
                                 fill="none">
                                <path d="M8.995 2L3.995 7L8.995 12L7.995 14L0.994995 7L7.995 0L8.995 2Z" fill="black" />
                            </svg>
                        </button>
                        <div className="catalog_page__nav__box__pages">
                            <Link className="catalog_page__nav__box__pages__page page_gap active_page">1</Link>
                            <Link className="catalog_page__nav__box__pages__page page_gap">2</Link>
                            <Link className="catalog_page__nav__box__pages__page page_gap">3</Link>
                            <Link className="catalog_page__nav__box__pages__page page_gap">4</Link>
                            <Link className="catalog_page__nav__box__pages__page page_gap">5</Link>
                            <Link className="catalog_page__nav__box__pages__page">6</Link>
                            <p className="catalog_page__nav__box__pages__page">.....</p>
                            <Link className="catalog_page__nav__box__pages__page">20</Link>
                        </div>
                        <button className="catalog_page__nav__box__arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14"
                                 fill="none">
                                <path d="M0.994995 12L5.995 7L0.994995 2L1.995 0L8.995 7L1.995 14L0.994995 12Z"
                                      fill="black" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </section>
        </main>
    );
};

export default CatalogMain;