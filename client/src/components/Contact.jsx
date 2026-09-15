import { useState } from "react";

const INITIAL = { name: "", email: "", message: "" };

// Get a free access key at https://web3forms.com (enter your email, they send the key instantly).
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("subject", `New message from ${form.name}`);
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("message", form.message);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Request failed");

      setStatus("sent");
      setForm(INITIAL);
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section className="contact-page" id="contact">
      <div className="contact-glow"></div>

      <div className="contact-container">
        <div className="contact-heading-area">
          <h2 className="contact-title">
            Let's <span>Connect</span>
          </h2>
          <div className="contact-title-line"></div>
          <p className="contact-subtitle">
            Have a project, an opportunity, or just want to say hi? Drop a message below.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me a bit about what you have in mind..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="contact-submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="contact-status contact-status-ok">
              Thanks! Your message has been received.
            </p>
          )}
          {status === "error" && (
            <p className="contact-status contact-status-err">
              Something went wrong — make sure the API server is running and try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
