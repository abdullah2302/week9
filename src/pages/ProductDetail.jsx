import { useParams, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPlug, 
    faMugSaucer, 
    faPen, 
    faBox, 
    faCircleExclamation,
    faArrowLeft,
    faCartPlus
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
        <main className="mx-auto max-w-4xl px-4 py-12">
            <button
                onClick={() => navigate(-1)}
                className="mb-6 flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
            >
                <FontAwesomeIcon icon={faArrowLeft} />
                Back
            </button>

            <div className="grid gap-8 rounded-xl border border-slate-800 bg-slate-900 p-6 sm:grid-cols-2">
                <div className="flex h-64 items-center justify-center rounded-lg bg-slate-800 text-6xl text-slate-500">
                    <FontAwesomeIcon icon={icon} />
                </div>

                <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-indigo-400">
                        {product.category}
                    </p>
                    <h1 className="mb-3 text-2xl font-bold text-white">
                        {product.name}
                    </h1>
                    <p className="mb-6 text-sm leading-relaxed text-slate-400">
                        {product.description}
                    </p>

                    <div className="mb-6 text-3xl font-bold text-white">
                        ${product.price}
                    </div>

                    <button
                        onClick={() => addToCart(product)}
                        className="flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
                    >
                        <FontAwesomeIcon icon={faCartPlus} />
                        Add to Cart
                    </button>
                </div>
            </div>
        </main>
    );
}

export default ProductDetail;