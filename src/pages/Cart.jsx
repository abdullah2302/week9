import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faTrash, faArrowRight, faTag } from '@fortawesome/free-solid-svg-icons';
import { useCart } from "../context/CartContext";

function Cart() {
    const { cartItems, removeFromCart, updateQty, cartTotal } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center">
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-slate-900 ring-1 ring-slate-800">
                    <FontAwesomeIcon
                        icon={faCartShopping}
                        className="text-3xl text-slate-600"
                    />
                </div>
                <p className="mb-6 text-slate-400">Your cart is empty.</p>
                <Link
                    to="/products"
                    className="flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-950/50 transition-all duration-200 hover:bg-indigo-500 hover:shadow-md active:scale-95"
                >
                    Browse Products
                    <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                </Link>
            </div>
        );
    }

    const itemCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

    return (
        <main className="mx-auto max-w-6xl px-4 py-12">
            <h1 className="mb-8 flex items-center gap-2 text-2xl font-bold text-white sm:text-3xl">
                <FontAwesomeIcon
                    icon={faCartShopping}
                    className="text-indigo-400"
                />
                Your Cart
                <span className="ml-1 text-base font-normal text-slate-500">
                    ({itemCount} {itemCount === 1 ? "item" : "items"})
                </span>
            </h1>

            <div className="grid gap-8 lg:grid-cols-3">
                {/* Cart items */}
                <div className="space-y-4 lg:col-span-2">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col gap-4 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 transition-colors hover:border-slate-700 sm:flex-row sm:items-center"
                        >
                            {/* Image */}
                            <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-800">
                                {item.image ? (
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-full w-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.style.display = "none";
                                        }}
                                    />
                                ) : (
                                    <FontAwesomeIcon
                                        icon={faTag}
                                        className="text-xl text-slate-600"
                                    />
                                )}
                            </div>

                            {/* Name + category */}
                            <div className="min-w-0 flex-1">
                                <p className="truncate font-semibold text-white">
                                    {item.name}
                                </p>
                                <p className="text-xs uppercase tracking-wide text-slate-500">
                                    {item.category}
                                </p>
                            </div>

                            {/* Qty + price + remove */}
                            <div className="flex items-center justify-between gap-4 sm:justify-end">
                                <div className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-1.5 py-1">
                                    <button
                                        onClick={() =>
                                            updateQty(item.id, item.qty - 1)
                                        }
                                        className="flex h-6 w-6 items-center justify-center rounded-full text-slate-300 transition hover:bg-slate-700"
                                    >
                                        −
                                    </button>
                                    <span className="w-5 text-center text-sm text-white">
                                        {item.qty}
                                    </span>
                                    <button
                                        onClick={() =>
                                            updateQty(item.id, item.qty + 1)
                                        }
                                        className="flex h-6 w-6 items-center justify-center rounded-full text-slate-300 transition hover:bg-slate-700"
                                    >
                                        +
                                    </button>
                                </div>

                                <span className="w-16 shrink-0 text-right font-semibold text-white">
                                    ${(item.price * item.qty).toFixed(2)}
                                </span>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-slate-500 transition hover:bg-red-500/10 hover:text-red-400"
                                    title="Remove item"
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order summary */}
                <div className="lg:sticky lg:top-24 lg:self-start">
                    <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-xl shadow-black/20 backdrop-blur-sm">
                        <h2 className="mb-4 text-lg font-semibold text-white">
                            Order Summary
                        </h2>

                        <div className="space-y-3 border-b border-slate-800 pb-4 text-sm">
                            <div className="flex justify-between text-slate-400">
                                <span>Subtotal</span>
                                <span className="text-slate-200">
                                    ${cartTotal.toFixed(2)}
                                </span>
                            </div>
                            <div className="flex justify-between text-slate-400">
                                <span>Shipping</span>
                                <span className="text-slate-200">Free</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4">
                            <span className="text-base font-semibold text-white">
                                Total
                            </span>
                            <span className="text-2xl font-bold text-white">
                                ${cartTotal.toFixed(2)}
                            </span>
                        </div>

                        <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-950/50 transition-all duration-200 hover:bg-indigo-500 hover:shadow-md hover:shadow-indigo-900/50 active:scale-95">
                            Proceed to Checkout
                            <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                        </button>

                        <Link
                            to="/products"
                            className="mt-3 block text-center text-xs text-slate-500 transition hover:text-indigo-400"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Cart;