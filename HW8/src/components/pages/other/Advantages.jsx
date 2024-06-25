import {Link} from "react-router-dom";

const Advantages = () => {
    
    return (
        <div className="advantages">
            <article className="advantage">
                <Link to="#" className="advantage__link">
                    <img src="img/advantagees/1.svg" alt="icon" className="advantage_img"/>
                        <h3>Free Delivery</h3>
                        <p>Worldwide delivery on all. Authorit tively morph <br/>next-generation innov tion with
                            extensive
                            models.</p>
                </Link>
            </article>
            <article className="advantage">
                <Link to="#" className="advantage__link">
                    <img src="img/advantagees/2.svg" alt="icon" className="advantage_img"/>
                        <h3>Sales & discounts</h3>
                        <p>Worldwide delivery on all. Authorit tively morph <br/>next-generation innov tion with
                            extensive
                            models.</p>
                </Link>
            </article>
            <article className="advantage">
                <Link to="#" className="advantage__link">
                    <img src="img/advantagees/3.svg" alt="icon" className="advantage_img"/>
                        <h3>Quality assurance</h3>
                        <p>Worldwide delivery on all. Authorit tively morph <br/>next-generation innov tion with
                            extensive
                            models.</p>
                </Link>
            </article>
        </div>
    );
};

export default Advantages;