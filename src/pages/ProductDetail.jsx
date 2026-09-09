import { useParams, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPlug, 
    faMugSaucer, 
    faPen, 
    faBox, 
    faCircleExclamation,
    faArrowLeft,
    faCartPlus,
    faShieldHalved,
    faTruckFast
} from '@fortawesome/free-solid-svg-icons';
import initialProducts from "../data/products.json";
import { useCart } from "../context/CartContext";

const categoryIcons = {
    Electronics: faPlug,
    Kitchen: faMugSaucer,
    Stationery: faPen,
};

function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const product = initialProducts.find((p) => p.id === Number(id));

    if (!product) {
        return (
            <div className="mx-auto max-w-6xl px-4 py-20 text-center text-slate-400">
                <FontAwesomeIcon
                    icon={faCircleExclamation}
                    className="mb-4 block text-4xl text-slate-600"
                />
                <p className="mb-4">Product not found.</p>
                <Link
                    to="/products"
                    className="text-indigo-400 hover:text-indigo-300"
                >
                    ← Back to products
                </Link>
            </div>
        );
    }

    const icon = categoryIcons[product.category] || faBox;

    return (
        <main className="mx-auto max-w-5xl px-4 py-12">
            <button
                onClick={() => navigate(-1)}
                className="mb-6 flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
            >
                <FontAwesomeIcon icon={faArrowLeft} />
                Back
            </button>

            <div className="grid gap-10 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-xl shadow-black/20 backdrop-blur-sm sm:grid-cols-2 sm:p-8">
                {/* Image */}
                <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-850 ring-1 ring-white/5">
                    <span className="absolute left-3 top-3 z-10 rounded-full bg-slate-950/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-indigo-300 ring-1 ring-white/10 backdrop-blur-sm">
                        {product.category}
                    </span>

                    {product.image ? (
                        <img
                            src={product.image}
                            alt={product.name}
                            loading="lazy"
                            className="h-full w-full object-cover"
                            onError={(e) => {
                                e.currentTarget.style.display = "none";
                                e.currentTarget.nextSibling.style.display = "flex";
                            }}
                        />
                    ) : null}
                    <FontAwesomeIcon
                        icon={icon}
                        className="text-6xl text-slate-500"
                        style={{ display: product.image ? "none" : "flex" }}
                    />
                </div>

                {/* Details */}
                <div className="flex flex-col">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-indigo-400">
                        {product.category}
                    </p>
                    <h1 className="mb-3 text-3xl font-bold tracking-tight text-white">
                        {product.name}
                    </h1>
                    <p className="mb-6 text-sm leading-relaxed text-slate-400">
                        {product.description}
                    </p>

                    <div className="mb-6 flex items-baseline gap-1">
                        <span className="text-lg text-slate-500">$</span>
                        <span className="text-4xl font-bold tracking-tight text-white">
                            {product.price}
                        </span>
                    </div>

                    <button
                        onClick={() => addToCart(product)}
                        className="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-950/50 transition-all duration-200 hover:bg-indigo-500 hover:shadow-md hover:shadow-indigo-900/50 active:scale-95"
                    >
                        <FontAwesomeIcon icon={faCartPlus} />
                        Add to Cart
                    </button>

                    <div className="mt-6 space-y-3 border-t border-slate-800 pt-6 text-sm text-slate-400">
                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon
                                icon={faTruckFast}
                                className="text-indigo-400"
                            />
                            Free delivery on orders over $50
                        </div>
                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon
                                icon={faShieldHalved}
                                className="text-indigo-400"
                            />
                            1-year warranty included
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ProductDetail;