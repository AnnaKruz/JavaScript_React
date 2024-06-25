import {Link} from "react-router-dom";

const Offer = ({data}) => {
    const background = `img/offer/${data.background}.jpg`;
    const rectangle = `img/offer/${data.rectangle}.png`;

    return (
        <Link to="catalog">
            <div className="offer__card">
                <img src={background} alt="photo" className="offer__img"/>
                <img src={rectangle} alt="rectangle" className="offer__rectangle"/>
                <div className="offer__text">
                    <h3 className="offer__title">{data.tagline}<br/><b>{data.category}</b></h3>
                </div>
            </div>
        </Link>
    );
};

export default Offer;