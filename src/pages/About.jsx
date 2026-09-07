function About() {
    return (
        <main className="mx-auto max-w-3xl px-4 py-16 text-slate-300">
            <h1 className="mb-6 flex items-center gap-2 text-2xl font-bold text-white">
                <i className="fa-solid fa-circle-info text-indigo-400"></i>
                About Shoply
            </h1>
            <p className="mb-4 leading-relaxed">
                Shoply is a demo e-commerce storefront built to showcase
                React fundamentals components, props, state, and routing
                with a clean, modern dark UI.
            </p>
            <p className="leading-relaxed">
                Every product, cart action, and page transition here is
                powered by client-side React state and React Router,
                without a backend.
            </p>
        </main>
    );
}

export default About;
