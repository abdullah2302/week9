import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
    {
        tag: "New arrivals every week",
        title: "Everything you need, all in one place",
        description:
            "Browse our curated collection of electronics, kitchenware, and everyday essentials — quality picks at honest prices.",
        gradient: "from-indigo-950 via-slate-900 to-slate-950",
        icon: "fa-solid fa-sparkles",
    },
    {
        tag: "Up to 40% off electronics",
        title: "Upgrade your tech for less",
        description:
            "Wireless mice, speakers, and desk lamps at prices that make sense. Limited-time deals, refreshed weekly.",
        gradient: "from-slate-900 via-purple-950 to-slate-950",
        icon: "fa-solid fa-bolt",
    },
    {
        tag: "Kitchen & home essentials",
        title: "Make everyday living a little nicer",
        description:
            "Mugs, plate sets, and more — practical pieces that make your space feel like home.",
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

    function goPrev() {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }

    function goNext() {
        setCurrent((prev) => (prev + 1) % slides.length);
    }

    return (
        <section className="relative overflow-hidden text-white">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`bg-gradient-to-br ${slide.gradient} transition-opacity duration-700 ease-in-out ${
                        index === current
                            ? "relative opacity-100"
                            : "absolute inset-0 opacity-0"
                    }`}
                >
                    <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-24 text-center">
                        <span className="flex items-center gap-2 rounded-full bg-indigo-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-300 ring-1 ring-indigo-500/30">
                            <i className={slide.icon}></i>
                            {slide.tag}
                        </span>

                        <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
                            {slide.title}
                        </h1>

                        <p className="max-w-xl text-slate-400">
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

            {/* Prev / Next arrows */}
            <button
                onClick={goPrev}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/40 text-slate-200 transition hover:bg-slate-950/70 sm:left-6"
            >
                <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
                onClick={goNext}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/40 text-slate-200 transition hover:bg-slate-950/70 sm:right-6"
            >
                <i className="fa-solid fa-chevron-right"></i>
            </button>

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
                                : "w-2 bg-slate-600 hover:bg-slate-500"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}

export default Hero;