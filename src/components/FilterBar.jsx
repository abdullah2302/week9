import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function FilterBar({
    categories,
    categoryFilter,
    onCategoryChange,
    searchTerm,
    onSearchChange,
}) {
    return (
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 sm:max-w-xs">
                <FontAwesomeIcon 
                    icon={faMagnifyingGlass}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-500 dark:text-slate-400"
                />
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full rounded-full border border-slate-300 bg-white py-2 pl-9 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500"
                />
            </div>

            <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => onCategoryChange(cat)}
                        className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                            categoryFilter === cat
                                ? "bg-indigo-600 text-white"
                                : "bg-slate-100 text-slate-600 ring-1 ring-slate-300 hover:bg-slate-200 hover:text-slate-900 dark:bg-slate-900 dark:text-slate-400 dark:ring-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default FilterBar;