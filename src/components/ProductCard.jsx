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
        <div className="group overflow-hidden  border border-slate-800 bg-slate-900 shadow-sm transition hover:border-slate-700 hover:shadow-lg hover:shadow-black/30">
             <Link to={`/products/${product.id}`}>
    <div className="flex aspect-square items-center justify-center overflow-hidden bg-slate-800">
        {product.image ? (
            <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                onError={(e) => {
                    e.currentTarget.style.display = "none";
                }}
            />
        ) : (
            <FontAwesomeIcon
                className={`${icon} text-4xl text-slate-500 transition group-hover:text-slate-400`}
            />
        )}
    </div>
</Link>

            <div className="p-4">
                <p className="mb-1 text-xs font-medium uppercase tracking-wide text-indigo-400">
                    {product.category}
                </p>

                <Link to={`/products/${product.id}`}>
                    <h3 className="mb-2 font-semibold text-white transition hover:text-indigo-300">
                        {product.name}
                    </h3>
                </Link>

                <div className="mb-3 flex items-center justify-between">
                    <span className="text-lg font-bold text-white">
                        ${product.price}
                    </span>
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={handleAddToCart}
                        className="flex flex-1 items-center justify-center gap-2 rounded-md bg-indigo-600 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
                    >
                        <FontAwesomeIcon icon={faCartPlus} />
                        Add to Cart
                    </button>

                    {onDelete && (
                        <button
                            onClick={() => onDelete(product.id)}
                            className="rounded-md border border-slate-700 px-3 text-sm text-slate-400 transition hover:border-red-500/50 hover:text-red-400"
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