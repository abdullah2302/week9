import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

function ProductCard({ product, onAddToCart, onDelete }) {
    const handleAddToCart = (e) => {
        e.preventDefault();
        onAddToCart(product);
    };

    return (
        <div className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-50 transition-shadow duration-200 hover:shadow-md transition-transform duration-200 hover:-translate-y-1">
            <Link to={`/products/${product.id}`} className="block">
                <div className="aspect-square overflow-hidden bg-white">
                    {product.image ? (
                        <img
                            src={product.image}
                            alt={product.name}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-300 "
                            onError={(e) => {
                                e.currentTarget.style.display = "none";
                            }}
                        />
                    ) : null}
                </div>
            </Link>

            <div className="p-3">
                <Link to={`/products/${product.id}`}>
                    <h3 className="truncate text-sm font-medium text-slate-900">
                        {product.name}
                    </h3>
                </Link>
                <p className="mt-0.5 text-xs text-slate-400">
                    {product.category}
                </p>

                <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-slate-900">
                        ${product.price}
                    </span>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleAddToCart}
                            className="flex items-center gap-1.5 rounded-full bg-slate-900 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-slate-700"
                        >
                            <FontAwesomeIcon icon={faCartPlus} className="text-xs" />
                            Add
                        </button>

                        {onDelete && (
                            <button
                                onClick={() => onDelete(product.id)}
                                aria-label="Remove product"
                                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
                            >
                                <FontAwesomeIcon icon={faTrash} className="text-sm" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;