
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
        <div className="navb">
            <div className="navizq">
                <Link to="/">Home 🏠</Link>
                <Link to="/contact">Contacto 📒</Link>
            </div>
            <div className="tienda">
                <p>Happy Cake 🍰</p>
            </div>
        </div>
    )
}
export default Navigation