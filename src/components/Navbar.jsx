import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCart } from "../context/CartContext";

function Navbar() {
    const { cartCount } = useCart();

    const linkClass = ({ isActive }) =>
        `transition hover:text-indigo-400 ${
            isActive ? "text-indigo-400" : "text-slate-300"
        }`;

    return (
        <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                <Link
                    to="/"
                    className="flex items-center  text-2xl font-bold tracking-tight text-white"
                >
                    <FontAwesomeIcon 
                        icon={faBagShopping} 
                        className="text-indigo-400"
                    />
                    Shop<span className="text-indigo-400">ly</span>
                </Link>

                <nav className="hidden gap-8 text-sm font-medium sm:flex">
                    <Link to="/" className={linkClass} end>
                        Home
                    </Link>
                    <Link to="/products" className={linkClass}>
                        Products
                    </Link>
                    <Link to="/about" className={linkClass}>
                        About
                    </Link>
                    <Link to="/contact" className={linkClass}>
                        Contact
                    </Link>
                </nav>

                <Link
                    to="/cart"
                    className="relative rounded-full p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white"
                >
                    <FontAwesomeIcon 
                        icon={faCartShopping} 
                        className="text-lg"
                    />

                    {cartCount > 0 && (
                        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-[11px] font-bold text-white">
                            {cartCount}
                        </span>
                    )}
                </Link>
            </div>
        </header>
    );
}

export default Navbar;