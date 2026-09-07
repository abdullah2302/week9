import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import { initialProducts } from "../data/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

function Home() {
    const { addToCart } = useCart();
    const featured = initialProducts.slice(0, 4);

    return (
        <>
            <Hero />

            <section className="mx-auto max-w-6xl px-4 py-14">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                        <i className="fa-solid fa-star text-indigo-400"></i>
                        Featured Products
                    </h2>

                    <Link
                        to="/products"
                        className="text-sm font-medium text-indigo-400 transition hover:text-indigo-300"
                    >
                        View all <i className="fa-solid fa-arrow-right ml-1"></i>
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
                    {featured.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={addToCart}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}

export default Home;
