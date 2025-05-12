import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <section className="contact-form py-16" id="contact">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <p className="text-xl mb-8">Have any questions? Get in touch with us.</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded border-2"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 rounded border-2"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-3 rounded border-2"
            rows="4"
            required
          />
          <button type="submit" className="bg-yellow-500 text-black px-6 py-3 rounded-full text-lg">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
