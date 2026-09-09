import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCartShopping, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useCart } from "../context/CartContext";

function Navbar() {
    const { cartCount } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const linkClass = ({ isActive }) =>
        `relative py-1 transition-colors hover:text-indigo-400 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:rounded-full after:bg-indigo-400 after:transition-all after:duration-300 ${
            isActive
                ? "text-white after:w-full"
                : "text-slate-400 after:w-0"
        }`;

    const mobileLinkClass = ({ isActive }) =>
        `block rounded-lg px-4 py-2.5 text-base transition-colors ${
            isActive
                ? "bg-indigo-500/10 text-indigo-400"
                : "text-slate-300 hover:bg-slate-800/80 hover:text-white"
        }`;

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                <Link
                    to="/"
                    onClick={closeMenu}
                    className="flex items-center text-2xl font-bold tracking-tight text-white"
                >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20">
                        <FontAwesomeIcon icon={faBagShopping} className="text-base" />
                    </span>
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
                        className="relative flex h-10 w-10 items-center justify-center rounded-full text-slate-300 transition-colors hover:bg-slate-800/80 hover:text-white"
                    >
                        <FontAwesomeIcon
                            icon={faCartShopping}
                            className="text-lg"
                        />

                        {cartCount > 0 && (
                            <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-[11px] font-bold text-white ring-2 ring-slate-950">
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    {/* Hamburger button - visible only on small screens */}
                    <button
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                        className="flex h-10 w-10 items-center justify-center rounded-full text-slate-300 transition-colors hover:bg-slate-800/80 hover:text-white sm:hidden"
                    >
                        <FontAwesomeIcon
                            icon={isMenuOpen ? faXmark : faBars}
                            className="text-lg"
                        />
                    </button>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            <nav
                className={`grid overflow-hidden border-slate-800/80 bg-slate-950/95 backdrop-blur-md transition-all duration-300 ease-in-out sm:hidden ${
                    isMenuOpen
                        ? "grid-rows-[1fr] border-t opacity-100"
                        : "grid-rows-[0fr] border-t-0 opacity-0"
                }`}
            >
                <div className="flex flex-col gap-1 overflow-hidden px-4 py-3 text-sm font-medium">
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
                </div>
            </nav>
        </header>
    );
}

export default Navbar;