import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="w-full p-10 bg-gray-50 min-h-[70vh]">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Left Info Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Contact Us
          </h2>

          <p className="text-gray-600 mb-6">
            Have questions about our courses or need guidance?  
            Fill out the form and our team will get back to you shortly.
          </p>

          <div className="space-y-4 text-gray-700">
            <p><strong>Email:</strong> support@learnhub.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Address:</strong> Bangalore, India</p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="bg-white p-8 rounded shadow">
          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                required
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
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

