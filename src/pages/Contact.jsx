import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';

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
            <h1 className="mb-10 flex items-center gap-2 text-2xl font-bold text-white justify-center">
                <FontAwesomeIcon 
                    icon={faEnvelope} 
                    className="text-indigo-400"
                />
                Contact Us
            </h1>

            <div className="grid gap-12 md:grid-cols-2">
                {/* Location / info - left side */}
                <div>
                    
                    <div className="mt-6 overflow-hidden rounded-xl border border-slate-800 mb-6">
                        <iframe
                            title="Store location"
                            className="h-56 w-full"
                            style={{ border: 0 }}
                            loading="lazy"
                            src="https://www.google.com/maps?q=Gulberg%20III%2C%20Lahore%2C%20Pakistan&output=embed"
                        ></iframe>
                    </div>
                    
                    <p className="mb-6 text-sm text-slate-400">
                        Have a question or just want to say hi? Drop by our
                        store or reach out using the details below.
                    </p>

                    <ul className="space-y-4 text-sm text-slate-300">
                        <li className="flex items-start gap-3">
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                className="mt-1 text-indigo-400"
                            />
                            <span>
                                123 Market Street, Gulberg III,
                                <br />
                                Lahore, Punjab, Pakistan
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FontAwesomeIcon
                                icon={faPhone}
                                className="text-indigo-400"
                            />
                            <span>+92 300 1234567</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="text-indigo-400"
                            />
                            <span>support@shoply.com</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <FontAwesomeIcon
                                icon={faClock}
                                className="mt-1 text-indigo-400"
                            />
                            <span>
                                Mon – Sat: 10:00 AM – 9:00 PM
                                <br />
                                Sunday: Closed
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Form - right side, no border */}
                <div>
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
                </div>
            </div>
        </main>
    );
}

export default Contact;