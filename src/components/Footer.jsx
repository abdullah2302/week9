import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBagShopping,
    faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { 
    faFacebook, 
    faInstagram, 
    faTwitter 
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (

        <>
        <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 text-center">
            <div className="mx-auto grid max-w-6xl grid-cols-4 gap-6 px-4 py-14 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                    <h3 className="mb-3 flex items-center text-2xl font-bold text-white justify-center" >
                        <FontAwesomeIcon 
                            icon={faBagShopping} 
                            className="text-indigo-400"
                        />
                        Shop<span className="text-indigo-400">ly</span>
                    </h3>
                    <p className="text-sm text-slate-500">
                        Quality products, honest prices, delivered to your
                        door.
                    </p>

                    <div className="mt-4 flex gap-3 text-lg justify-center ">
                        <a href="#" className="text-slate-500 transition hover:text-indigo-400">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#" className="text-slate-500 transition hover:text-indigo-400">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#" className="text-slate-500 transition hover:text-indigo-400">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="mb-3 text-sm font-semibold text-white">
                        Shop
                    </h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link to="/products" className="hover:text-white">
                                All Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/products" className="hover:text-white">
                                Electronics
                            </Link>
                        </li>
                        <li>
                            <Link to="/products" className="hover:text-white">
                                Kitchen
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="mb-3 text-sm font-semibold text-white">
                        Company
                    </h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link to="/about" className="hover:text-white">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                Careers
                            </a>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-white">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="mb-3 text-sm font-semibold text-white">
                        Newsletter
                    </h4>
                    <p className="mb-3 text-sm">
                        Get updates on new arrivals and offers.
                    </p>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder-slate-600 focus:border-indigo-500 focus:outline-none"
                        />
                        <button className="flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500">
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-800 py-5 text-center text-xs text-slate-600">
                © {new Date().getFullYear()} Shoply. All rights reserved.
            </div>
        </footer>
        </>
    );
}

export default Footer;