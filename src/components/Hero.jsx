import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
    {
        tag: "New arrivals every week",
        title: "Everything you need, all in one place",
        description:
            "Browse our curated collection of electronics, kitchenware, and everyday essentials quality picks at honest prices.",
        image: "/banners/banner1.jpg",
        gradient: "from-indigo-950 via-slate-900 to-slate-950",
        icon: "fa-solid fa-sparkles",
    },
    {
        tag: "Up to 40% off electronics",
        title: "Upgrade your tech for less, without compromise.",
        description:
            "Wireless mice, speakers, and desk lamps at prices that make sense. Limited-time deals, refreshed weekly.",
        image: "/banners/banner2.jpg",
        gradient: "from-slate-900 via-purple-950 to-slate-950",
        icon: "fa-solid fa-bolt",
    },
    {
        tag: "Kitchen & home essentials",
        title: "Make everyday living a little nicer",
        description:
            "Mugs, plate sets, and more practical pieces that make your space feel like home.",
        image: "/banners/banner3.jpg",
        gradient: "from-slate-900 via-emerald-950 to-slate-950",
        icon: "fa-solid fa-mug-saucer",
    },
];

const SLIDE_DURATION = 4000;

function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, SLIDE_DURATION);

        return () => clearInterval(timer);
    }, []);

    function goTo(index) {
        setCurrent(index);
    }

   

    return (
        <section className="relative h-[70vh] min-h-[420px] overflow-hidden text-white">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        index === current ? "opacity-100" : "opacity-0"
                    }`}
                >
                    {/* Small screens: plain gradient, no image */}
                    <div
                        className={`absolute inset-0 bg-gradient-to-br md:hidden ${slide.gradient}`}
                    ></div>

                    {/* Medium screens and up: banner image */}
                    <div
                        className="absolute inset-0 hidden bg-cover bg-center md:block"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    ></div>

                   
                    <div className="absolute inset-0 hidden bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-slate-950/10 md:block"></div>

                   <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center gap-6 px-4 text-center sm:px-8 md:items-start md:text-left">
                        <span className="flex items-center gap-2 rounded-full bg-indigo-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-300 ring-1 ring-indigo-500/30">
                            <i className={slide.icon}></i>
                            {slide.tag}
                        </span>

                        <h1 className="max-w-xl text-4xl font-bold leading-tight sm:text-5xl">
                            {slide.title}
                        </h1>

                        <p className="max-w-md text-slate-200">
                            {slide.description}
                        </p>

                        <Link
                            to="/products"
                            className="flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/50 transition hover:bg-indigo-500"
                        >
                            <i className="fa-solid fa-bag-shopping"></i>
                            Shop Now
                        </Link>
                    </div>
                </div>
            ))}

            

            {/* Dots */}
            <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`h-2 rounded-full transition-all ${
                            index === current
                                ? "w-6 bg-indigo-400"
                                : "w-2 bg-slate-300/50 hover:bg-slate-200/70"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}

export default Hero;