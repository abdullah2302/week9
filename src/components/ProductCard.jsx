import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlug,
    faMugSaucer,
    faPen,
    faBox,
    faCartPlus,
    faTrash
} from '@fortawesome/free-solid-svg-icons';

const categoryIcons = {
    Electronics: faPlug,
    Kitchen: faMugSaucer,
    Stationery: faPen,
};

function ProductCard({ product, onAddToCart, onDelete }) {
    const icon = categoryIcons[product.category] || faBox;

    const handleAddToCart = (e) => {
        e.preventDefault(); // Prevent navigation if wrapped in Link
        onAddToCart(product);
    };

    return (
        <div className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-md shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-950/40">
            {/* Subtle glow ring on hover */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-inset ring-indigo-400/20 transition-opacity duration-300 group-hover:opacity-100"></div>

            <Link to={`/products/${product.id}`}>
                <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-gradient-to-br from-slate-800 to-slate-850">
                    {/* Category badge */}
                    <span className="absolute left-3 top-3 z-10 rounded-full bg-slate-950/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-indigo-300 ring-1 ring-white/10 backdrop-blur-sm">
                        {product.category}
                    </span>

                    {product.image ? (
                        <img
                            src={product.image}
                            alt={product.name}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                            onError={(e) => {
                                e.currentTarget.style.display = "none";
                                e.currentTarget.nextSibling.style.display = "flex";
                            }}
                        />
                    ) : null}
                    <FontAwesomeIcon
                        icon={icon}
                        className="text-4xl text-slate-500 transition group-hover:text-slate-400"
                        style={{ display: product.image ? "none" : "flex" }}
                    />

                    {/* Bottom fade for polish */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
            </Link>

            <div className="p-4">
                <Link to={`/products/${product.id}`}>
                    <h3 className="mb-1.5 truncate font-semibold text-white transition-colors group-hover:text-indigo-300">
                        {product.name}
                    </h3>
                </Link>

                <div className="mb-4 flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">$</span>
                    <span className="text-xl font-bold tracking-tight text-white">
                        {product.price}
                    </span>
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={handleAddToCart}
                        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-950/50 transition-all duration-200 hover:bg-indigo-500 hover:shadow-md hover:shadow-indigo-900/50 active:scale-95"
                    >
                        <FontAwesomeIcon icon={faCartPlus} />
                        Add to Cart
                    </button>

                    {onDelete && (
                        <button
                            onClick={() => onDelete(product.id)}
                            className="rounded-lg border border-slate-700 px-3 text-sm text-slate-400 transition-all duration-200 hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400"
                            title="Remove product"
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;