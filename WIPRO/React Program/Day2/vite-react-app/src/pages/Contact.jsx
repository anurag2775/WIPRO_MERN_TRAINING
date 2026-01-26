import { useState } from "react";
import useTheme from "../hooks/useTheme";

function Contact() {
  const { theme } = useTheme();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const pageBg = theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-black";
  const cardBg = theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black";
  const inputBg = theme === "dark" ? "bg-gray-700 text-white border-gray-600" : "bg-white text-black border-gray-300";
  const muted = theme === "dark" ? "text-gray-300" : "text-gray-600";

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className={`w-full p-10 min-h-[70vh] ${pageBg}`}>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Left Info */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

          <p className={`${muted} mb-6`}>
            Have questions about our courses or need guidance?  
            Fill out the form and our team will get back to you shortly.
          </p>

          <div className={`space-y-4 ${muted}`}>
            <p><strong>Email:</strong> support@learnhub.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Address:</strong> Bangalore, India</p>
          </div>
        </div>

        {/* Right Form */}
        <div className={`${cardBg} p-8 rounded shadow`}>
          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`w-full p-2 rounded border ${inputBg}`}
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`w-full p-2 rounded border ${inputBg}`}
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                className={`w-full p-2 rounded border ${inputBg}`}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;


