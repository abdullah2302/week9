import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function ProductForm({ onAddProduct }) {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);

    function handleImageChange(e) {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
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
        });

        setName("");
        setCategory("");
        setPrice("");
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="mb-10 flex flex-wrap items-end gap-3 border-b border-slate-100 pb-8"
        >
            <div className="flex-1 basis-full">
                <p className="mb-3 text-xs font-medium uppercase tracking-wide text-slate-400">
                    Quick Add Product (demo)
                </p>
            </div>

            <input
                type="text"
                placeholder="Product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="min-w-[140px] flex-1 border-b border-slate-200 bg-transparent px-1 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:outline-none"
            />

            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="min-w-[140px] flex-1 border-b border-slate-200 bg-transparent px-1 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:outline-none"
            />

            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="min-w-[100px] flex-1 border-b border-slate-200 bg-transparent px-1 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:outline-none"
            />
             <button
                type="button"
                onClick={() => document.getElementById("imageInput").click()}
                className="flex items-center gap-2 rounded-md bg-slate-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
                <i className="fa-solid fa-image"></i>
                {image ? "Change Image" : "Upload Image"}
            </button>
            <input
                type="file"
                id="imageInput"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
            />

            <button
                type="submit"
                className="flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
            >
                <FontAwesomeIcon icon={faPlus} className="text-xs" />
                Add Product
            </button>
        </form>
    );
}

export default ProductForm;