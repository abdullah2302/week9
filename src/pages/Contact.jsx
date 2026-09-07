import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setSent(true);
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <main className="mx-auto max-w-lg px-4 py-16">
            <h1 className="mb-6 flex items-center gap-2 text-2xl font-bold text-white">
                <FontAwesomeIcon 
                    icon={faEnvelope} 
                    className="text-indigo-400"
                />
                Contact Us
            </h1>

            {sent && (
                <p className="mb-4 rounded-md bg-green-500/10 px-4 py-2 text-sm text-green-400 ring-1 ring-green-500/30">
                    Thanks! Your message has been sent (demo only).
                </p>
            )}

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 rounded-xl border border-slate-800 bg-slate-900 p-6"
            >
                <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
                />
                <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
                />
                <textarea
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="resize-none rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
                />
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
                >
                    Send Message
                </button>
            </form>
        </main>
    );
}

export default Contact;