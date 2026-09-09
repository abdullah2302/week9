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
        <footer className="relative border-t border-slate-800/80 bg-slate-950 text-slate-400">
            {/* Subtle top glow accent */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"></div>

            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-4 py-16 text-center sm:grid-cols-4 sm:gap-10 sm:text-left">
                <div className="col-span-2 sm:col-span-1">
                    <h3 className="mb-3 flex items-center justify-center gap-2 text-2xl font-bold tracking-tight text-white sm:justify-start">
                        <FontAwesomeIcon 
                            icon={faBagShopping} 
                            className="text-indigo-400"
                        />
                        Shop<span className="text-indigo-400">ly</span>
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-500">
                        Quality products, honest prices, delivered to your
                        door.
                    </p>
                    <p className="text-sm leading-relaxed text-slate-500">
                        Get in touch with us.
                    </p>

                    <div className="mt-5 flex justify-center gap-2 sm:justify-start">
                        <Link
                            to="#"
                            aria-label="Facebook"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 text-slate-500 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-400"
                        >
                            <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                        <Link
                            to="#"
                            aria-label="Instagram"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 text-slate-500 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-400"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                        <Link
                            to="#"
                            aria-label="Twitter"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 text-slate-500 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-400"
                        >
                            <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                    </div>
                </div>

                <div>
                    <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Shop
                    </h4>
                    <ul className="space-y-2.5 text-sm">
                        <li>
                            <Link to="/products" className="transition hover:text-indigo-400">
                                All Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/products" className="transition hover:text-indigo-400">
                                Electronics
                            </Link>
                        </li>
                        <li>
                            <Link to="/products" className="transition hover:text-indigo-400">
                                Kitchen
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Company
                    </h4>
                    <ul className="space-y-2.5 text-sm">
                        <li>
                            <Link to="/about" className="transition hover:text-indigo-400">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/careers" className="transition hover:text-indigo-400">
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="transition hover:text-indigo-400">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="col-span-2 sm:col-span-1">
                    <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Newsletter
                    </h4>
                    <p className="mb-3 text-sm leading-relaxed">
                        Get updates on new arrivals and offers.
                    </p>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full rounded-full border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-white placeholder-slate-600 transition focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/40"
                        />
                        <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white shadow-sm shadow-indigo-950/50 transition-all duration-200 hover:bg-indigo-500 hover:shadow-md active:scale-95">
                            <FontAwesomeIcon icon={faPaperPlane} className="text-sm" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-800/80 py-5 text-center text-xs text-slate-600">
                © {new Date().getFullYear()} Shoply. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;