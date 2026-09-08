import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCartShopping, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useCart } from "../context/CartContext";

function Navbar() {
    const { cartCount } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const linkClass = ({ isActive }) =>
        `transition hover:text-indigo-400 ${
            isActive ? "text-indigo-400" : "text-slate-300"
        }`;

    const mobileLinkClass = ({ isActive }) =>
        `block rounded-md px-3 py-2 text-base transition hover:bg-slate-800 hover:text-indigo-400 ${
            isActive ? "text-indigo-400" : "text-slate-300"
        }`;

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                <Link
                    to="/"
                    onClick={closeMenu}
                    className="flex items-center  text-2xl font-bold tracking-tight text-white"
                >
                    <FontAwesomeIcon 
                        icon={faBagShopping} 
                        className="text-indigo-400"
                    />
                    Shop<span className="text-indigo-400">ly</span>
                </Link>

                <nav className="hidden gap-8 text-sm font-medium sm:flex">
                    <NavLink to="/" className={linkClass} end>
                        Home
                    </NavLink>
                    <NavLink to="/products" className={linkClass}>
                        Products
                    </NavLink>
                    <NavLink to="/about" className={linkClass}>
                        About
                    </NavLink>
                    <NavLink to="/contact" className={linkClass}>
                        Contact
                    </NavLink>
                </nav>

                <div className="flex items-center gap-2">
                    <Link
                        to="/cart"
                        onClick={closeMenu}
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

                    {/* Hamburger button - visible only on small screens */}
                    <button
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                        className="rounded-md p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white sm:hidden"
                    >
                        <FontAwesomeIcon
                            icon={isMenuOpen ? faXmark : faBars}
                            className="text-lg"
                        />
                    </button>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            {isMenuOpen && (
                <nav className="flex flex-col gap-1 border-t border-slate-800 bg-slate-950 px-4 py-3 text-sm font-medium sm:hidden">
                    <NavLink to="/" className={mobileLinkClass} onClick={closeMenu} end>
                        Home
                    </NavLink>
                    <NavLink to="/products" className={mobileLinkClass} onClick={closeMenu}>
                        Products
                    </NavLink>
                    <NavLink to="/about" className={mobileLinkClass} onClick={closeMenu}>
                        About
                    </NavLink>
                    <NavLink to="/contact" className={mobileLinkClass} onClick={closeMenu}>
                        Contact
                    </NavLink>
                </nav>
            )}
        </header>
    );
}

export default Navbar;