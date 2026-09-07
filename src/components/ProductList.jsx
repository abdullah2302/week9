import ProductCard from "./ProductCard";

function ProductList({ products, onAddToCart, onDelete }) {
    if (products.length === 0) {
        return (
            <div className="rounded-xl border border-dashed border-slate-700 py-16 text-center text-slate-500">
                <i className="fa-solid fa-box-open mb-3 block text-3xl"></i>
                No products match your search.
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
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
