import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone, faClock, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

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
        <main className="mx-auto max-w-5xl px-4 py-16">
            <div className="mb-12 text-center">
                <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-300">
                    <FontAwesomeIcon icon={faEnvelope} />
                    Get in touch
                </span>
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Contact Us
                </h1>
                <p className="mx-auto mt-3 max-w-md text-sm text-slate-400">
                    Have a question or just want to say hi? We'd love to hear
                    from you.
                </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2">
                {/* Location / info - left side */}
                <div>
                    <div className="mb-6 overflow-hidden rounded-2xl border border-slate-800/80 shadow-lg shadow-black/20">
                        <iframe
                            title="Store location"
                            className="h-56 w-full grayscale-[30%]"
                            style={{ border: 0 }}
                            loading="lazy"
                            src="https://www.google.com/maps?q=Gulberg%20III%2C%20Lahore%2C%20Pakistan&output=embed"
                        ></iframe>
                    </div>

                    <ul className="space-y-4">
                        <li className="flex items-start gap-4 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 transition-colors hover:border-indigo-500/30">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20">
                                <FontAwesomeIcon icon={faLocationDot} />
                            </span>
                            <span className="pt-1.5 text-sm text-slate-300">
                                123 Market Street, Gulberg III,
                                <br />
                                Lahore, Punjab, Pakistan
                            </span>
                        </li>
                        <li className="flex items-center gap-4 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 transition-colors hover:border-indigo-500/30">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20">
                                <FontAwesomeIcon icon={faPhone} />
                            </span>
                            <span className="text-sm text-slate-300">+92 300 1234567</span>
                        </li>
                        <li className="flex items-center gap-4 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 transition-colors hover:border-indigo-500/30">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            <span className="text-sm text-slate-300">support@shoply.com</span>
                        </li>
                        <li className="flex items-start gap-4 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 transition-colors hover:border-indigo-500/30">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20">
                                <FontAwesomeIcon icon={faClock} />
                            </span>
                            <span className="pt-1.5 text-sm text-slate-300">
                                Mon – Sat: 10:00 AM – 9:00 PM
                                <br />
                                Sunday: Closed
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Form - right side */}
                <div className="rounded-2xl border border-slate-800/80 h-85  p-6 shadow-xl shadow-black/20 backdrop-blur-sm sm:p-8">
                    {sent && (
                        <p className="mb-4 rounded-md bg-green-500/10 px-4 py-2 text-sm text-green-400 ring-1 ring-green-500/30">
                            Thanks! Your message has been sent (demo only).
                        </p>
                    )}

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4"
                    >
                        <input
                            type="text"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-sm text-white placeholder-slate-500 transition focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/40"
                        />
                        <input
                            type="email"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-sm text-white placeholder-slate-500 transition focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/40"
                        />
                        <textarea
                            placeholder="Your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            rows={4}
                            className="resize-none rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-sm text-white placeholder-slate-500 transition focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/40"
                        />
                        <button
                            type="submit"
                            className="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-950/50 transition-all duration-200 hover:bg-indigo-500 hover:shadow-md hover:shadow-indigo-900/50 active:scale-95"
                        >
                            <FontAwesomeIcon icon={faPaperPlane} />
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Contact;