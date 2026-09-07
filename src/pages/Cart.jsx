import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useCart } from "../context/CartContext";

function Cart() {
    const { cartItems, removeFromCart, updateQty, cartTotal } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="mx-auto max-w-6xl px-4 py-24 text-center text-slate-400">
                <FontAwesomeIcon 
                    icon={faCartShopping} 
                    className="mb-4 block text-4xl text-slate-600"
                />
                <p className="mb-4">Your cart is empty.</p>
                <Link
                    to="/products"
                    className="rounded-full bg-indigo-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
                >
                    Browse Products
                </Link>
            </div>
        );
    }

    return (
        <main className="mx-auto max-w-4xl px-4 py-12">
            <h1 className="mb-6 flex items-center gap-2 text-2xl font-bold text-white">
                <FontAwesomeIcon 
                    icon={faCartShopping} 
                    className="text-indigo-400"
                />
                Your Cart
            </h1>

            <div className="mb-6 divide-y divide-slate-800 rounded-xl border border-slate-800 bg-slate-900">
                {cartItems.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-wrap items-center justify-between gap-4 p-4"
                    >
                        <div>
                            <p className="font-semibold text-white">
                                {item.name}
                            </p>
                            <p className="text-xs text-slate-500">
                                {item.category}
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={() =>
                                    updateQty(item.id, item.qty - 1)
                                }
                                className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-800 text-slate-300 transition hover:bg-slate-700"
                            >
                                −
                            </button>
                            <span className="w-6 text-center text-white">
                                {item.qty}
                            </span>
                            <button
                                onClick={() =>
                                    updateQty(item.id, item.qty + 1)
                                }
                                className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-800 text-slate-300 transition hover:bg-slate-700"
                            >
                                +
                            </button>
                        </div>

                        <span className="w-16 text-right font-semibold text-white">
                            ${(item.price * item.qty).toFixed(2)}
                        </span>

                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-slate-500 transition hover:text-red-400"
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 p-5">
                <span className="text-lg font-semibold text-white">
                    Total
                </span>
                <span className="text-2xl font-bold text-white">
                    ${cartTotal.toFixed(2)}
                </span>
            </div>

            <button className="mt-6 w-full rounded-md bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500">
                Proceed to Checkout
            </button>
        </main>
    );
}

export default Cart;