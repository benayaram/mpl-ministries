import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "", // ✅ User’s number
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent("Prayer Request / Message from Website");
    const body = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}
Contact: ${formData.contact}

Message/Prayer Request:
${formData.message}`
    );

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=ministriesmpl7@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailLink, "_blank");

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", contact: "", message: "" });
    }, 3000);
  };

  return (
    <div id="contact" className="bg-gradient-to-r from-blue-100 to-purple-100 py-12 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
            Contact Us
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="contact"
              placeholder="Your Contact Number"
              value={formData.contact}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message / Prayer Request"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {isSubmitted && (
              <p className="text-green-600 text-center mt-2">
                ✅ Message sent via Gmail
              </p>
            )}
          </form>
        </div>

        {/* Contact Details Section */}
        <div className="flex flex-col justify-center bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-6 text-purple-700">
            📍 Contact Information
          </h3>

          <p className="mb-4">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:ministriesmpl7@gmail.com"
              className="text-blue-600 hover:underline"
            >
              ministriesmpl7@gmail.com
            </a>
          </p>

          {/* ✅ WhatsApp Info with Hint */}
          <p className="mb-4">
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/+919959255723?text=We%20have%20a%20prayer%20request"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              Chat With Us
            </a>
          </p>

          <p className="mb-4 font-semibold">Our Location:</p>
          <div className="w-full h-64 rounded-lg overflow-hidden shadow">
            <iframe
              title="MPL Ministries Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.4613252180225!2d82.2503012!3d16.9477105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a382748760c453b%3A0xb71b6ddae4f9e8a9!2z4LCv4LGH4LC44LGB4LCV4LGN4LCw4LGA4LC44LGN4LCk4LGBIOCwquCxjeCwsOCwvuCwsOCxjeCwpeCwqCDgsK7gsILgsKbgsL_gsLDgsII!5e1!3m2!1sen!2sin!4v1756297388566!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
