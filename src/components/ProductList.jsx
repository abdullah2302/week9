import ProductCard from "./ProductCard";

function ProductList({ products, onAddToCart, onDelete }) {
    if (products.length === 0) {
        return (
            <div className="py-20 text-center text-sm text-slate-400">
                No products match your search.
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default ProductList;