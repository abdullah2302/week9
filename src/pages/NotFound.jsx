import { Link } from "react-router-dom";

function NotFound() {
    return (
        <main className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center text-slate-400">
            <i className="fa-solid fa-triangle-exclamation mb-4 text-4xl text-slate-600"></i>
            <h1 className="mb-2 text-2xl font-bold text-white">
                404 — Page Not Found
            </h1>
            <p className="mb-6">
                The page you're looking for doesn't exist.
            </p>
            <Link
                to="/"
                className="rounded-full bg-indigo-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
                Go Home
            </Link>
        </main>
    );
}

export default NotFound;
