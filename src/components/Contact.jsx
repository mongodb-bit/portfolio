import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs.sendForm(
      "service_1if8aad",     // service id from EmailJS
      "template_vdunq0e",    // template id
      formRef.current,
      "TwxNqCRTG8zW7Tvge"    // public key
    )
    .then((result) => {
      console.log(result.text);
      setStatus("success");
      formRef.current.reset();
    })
    .catch((error) => {
      console.log("EmailJS error:", error);
      setStatus("error");
    });
  };

  return (
    <section
      id="contact"
      className="relative px-6 sm:px-10 lg:px-16 py-16 text-white bg-gradient-to-br from-[#020617] via-[#0b1a45] to-[#020617] flex justify-center items-center"
    >

      <div className="relative z-10 w-full max-w-xl">

        <h2 className="text-3xl font-semibold text-center mb-6">
          Contact Me
        </h2>

        
        <div className="flex justify-center gap-6 mb-8">

          <a
            href="https://www.linkedin.com/in/subin-saju-305a49259"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-2xl"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/subin_saju_______"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 text-2xl"
          >
            <FaInstagram />
          </a>

          <a
            href="mailto:subinsaju087@gmail.com"
            className="text-green-400 text-2xl"
          >
            <FaEnvelope />
          </a>

        </div>

        
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl">

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white"
            ></textarea>

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-center">
                ✅ Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-center">
                ❌ Something went wrong. Check console.
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}