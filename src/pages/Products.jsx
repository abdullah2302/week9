import { useState } from "react";
import initialProducts from "../data/products.json";
import { useCart } from "../context/CartContext";
import ProductForm from "../components/ProductForm";
import FilterBar from "../components/FilterBar";
import ProductList from "../components/ProductList";

function Products() {
    const { addToCart } = useCart();
    const [products, setProducts] = useState(initialProducts);
    const [categoryFilter, setCategoryFilter] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    function handleAddProduct(newProduct) {
        setProducts((prev) => [...prev, { ...newProduct, id: Date.now() }]);
    }

    function handleDeleteProduct(id) {
        setProducts((prev) => prev.filter((p) => p.id !== id));
    }

    const categories = ["All", ...new Set(products.map((p) => p.category))];

    const filteredProducts = products.filter((p) => {
        const matchesCategory =
            categoryFilter === "All" || p.category === categoryFilter;
        const matchesSearch = p.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12">
            <h1 className="mb-6 flex items-center gap-2 text-2xl font-bold text-white">
                <i className="fa-solid fa-shop text-indigo-400"></i>
                All Products
            </h1>

            <ProductForm onAddProduct={handleAddProduct} />

            <FilterBar
                categories={categories}
                categoryFilter={categoryFilter}
                onCategoryChange={setCategoryFilter}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
            />

            <ProductList
                products={filteredProducts}
                onAddToCart={addToCart}
                onDelete={handleDeleteProduct}
            />
        </main>
    );
}

export default Products;
