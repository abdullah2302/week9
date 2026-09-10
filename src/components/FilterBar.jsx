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
        <div className="mb-8 flex flex-col gap-4 border-b border-slate-100 pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-6 text-sm">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => onCategoryChange(cat)}
                        className={`relative pb-1 font-medium transition ${
                            categoryFilter === cat
                                ? "text-slate-900"
                                : "text-slate-400 hover:text-slate-700"
                        }`}
                    >
                        {cat}
                        {categoryFilter === cat && (
                            <span className="absolute -bottom-[25px] left-0 h-0.5 w-full bg-slate-900" />
                        )}
                    </button>
                ))}
            </div>

            <div className="relative sm:w-56">
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-xs text-slate-400"
                />
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full border-b border-slate-200 bg-transparent py-1.5 pl-5 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:outline-none"
                />
            </div>
        </div>
    );
}

export default FilterBar;