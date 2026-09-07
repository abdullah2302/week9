import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-24 text-center">
                <span className="flex items-center gap-2 rounded-full bg-indigo-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-300 ring-1 ring-indigo-500/30">
                    <i className="fa-solid fa-sparkles"></i>
                    New arrivals every week
                </span>

                <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
                    Everything you need, all in one place
                </h1>

                <p className="max-w-xl text-slate-400">
                    Browse our curated collection of electronics, kitchenware,
                    and everyday essentials quality picks at honest prices.
                </p>

                <Link
                    to="/products"
                    className="flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/50 transition hover:bg-indigo-500"
                >
                    <i className="fa-solid fa-bag-shopping"></i>
                    Shop Now
                </Link>
            </div>
        </section>
    );
}

export default Hero;
