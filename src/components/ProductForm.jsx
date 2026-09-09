import { useState } from "react";

function ProductForm({ onAddProduct }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);
    
    function handleImageChange(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImage(null);
        }
    }


    function handleSubmit(e) {
        e.preventDefault();

        if (!name.trim() || !category.trim() || !price) {
            alert("Please fill all fields");
            return;
        }

        onAddProduct({
            name: name.trim(),
            category: category.trim(),
            price: Number(price),
            image: image,
        });

        setName("");
        setCategory("");
        setPrice("");
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="mb-8 flex flex-wrap items-end gap-3  border border-slate-800 bg-slate-900 p-5 shadow-sm"
        >
            <div className="flex-1 basis-full">
                <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-300">
                    <i className="fa-solid fa-plus text-indigo-400"></i>
                    Quick Add Product.
                </p>
            </div>

            <input
                type="text"
                placeholder="Product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="min-w-[140px] flex-1 rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />

            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-w-[140px] flex-1 rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />

            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="min-w-[140px] flex-1 rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />

            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="min-w-[100px] flex-1 rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />

            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="min-w-[140px] flex-1 rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />

            <button
                type="submit"
                className="flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
                <i className="fa-solid fa-plus"></i>
                Add Product
            </button>
        </form>
    );
}

export default ProductForm;
