import {Link} from 'react-router-dom';
import Cart from '../../../assets/cart.png';
export default function SpecialCard(props) {
    return (
        <article className="menu-card">
            <img src={props.image} alt="Special Menu"></img>
            <h1>{props.name}</h1>
            <h3>{props.price}</h3>
            <p>{props.description}</p>
            <Link className="hover-effect" to="/myorder"><h1 className='orderButton'>Order for Delivery</h1></Link>
            <img src={Cart} alt="delivery Icon"></img>
        </article>
    );
}