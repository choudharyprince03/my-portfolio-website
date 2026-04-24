import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    const formData = new FormData(event.target);
    formData.append("access_key", "365d06c2-72b9-45de-862e-da3e54a971f6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        event.target.reset(); // Clear the form
        setTimeout(() => setStatus("idle"), 5000); // Hide success message after 5s
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="w-full py-32 px-6 md:px-16 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(2.5rem,8vw,4.5rem)] font-bold tracking-tighter mb-16 text-center leading-tight"
        >
          LET'S BUILD SOMETHING MEANINGFUL.
        </motion.h2>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12 relative"
          onSubmit={onSubmit}
        >
          <div className="relative">
            <input 
              type="text" 
              name="name"
              required
              placeholder="Your Name" 
              className="w-full bg-transparent border-b-2 border-gray-200 py-4 text-xl focus:outline-none focus:border-foreground transition-colors duration-300 placeholder-muted"
            />
          </div>
          <div className="relative">
            <input 
              type="email" 
              name="email"
              required
              placeholder="Your Email" 
              className="w-full bg-transparent border-b-2 border-gray-200 py-4 text-xl focus:outline-none focus:border-foreground transition-colors duration-300 placeholder-muted"
            />
          </div>
          <div className="relative">
            <textarea 
              name="message"
              required
              placeholder="Your Message" 
              rows="4"
              className="w-full bg-transparent border-b-2 border-gray-200 py-4 text-xl focus:outline-none focus:border-foreground transition-colors duration-300 placeholder-muted resize-none"
            />
          </div>
          <div className="text-center pt-8">
            <button 
              type="submit"
              disabled={status === "submitting"}
              className="px-12 py-5 bg-foreground text-background font-medium text-lg rounded-full hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:hover:scale-100"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
          </div>

          <AnimatePresence>
            {status === "success" && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute -bottom-16 left-0 right-0 text-center text-green-600 font-medium"
              >
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute -bottom-16 left-0 right-0 text-center text-red-500 font-medium"
              >
                Something went wrong. Please try again later.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
