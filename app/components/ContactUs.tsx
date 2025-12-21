"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    droneRequirement: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.fullName || !formData.email || !formData.phone) {
      toast.error("Please fill all required fields");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: "sample" }),
      });

      if (!res.ok) throw new Error();

      toast.success("Request submitted successfully!");

      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        droneRequirement: "",
        message: "",
      });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full bg-white flex justify-center" id="contact">
      <div className="w-full max-w-360 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start py-24 px-8 max-sm:py-12 max-sm:px-2.5">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <motion.p
            className="text-left font-sans text-xl max-w-2xl text-zxblack/70 pl-1 max-sm:text-base"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact Us
          </motion.p>

          <motion.h2
            className="text-5xl md:text-6xl font-bold text-zxblack max-sm:text-2xl"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Ready to test the ZX-2480 Propeller?
          </motion.h2>

          <motion.p
            className="text-left font-sans text-xl max-w-2xl text-zxblack/70 max-sm:text-base"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Submit your details — our engineering team will contact you within
            24 hours.
          </motion.p>

          {/* Manufacturing Entity */}
          <div className="border-zxprimary flex flex-col gap-4 pt-4">
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-zxblack max-sm:text-2xl"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Manufacturing Entity
            </motion.h2>

            <motion.p
              className="text-left font-sans text-xl max-w-2xl text-zxblack/70 max-sm:text-base"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              FINE TECHNO PLAST
            </motion.p>

            <motion.p
              className="text-left font-sans text-xl max-w-2xl text-zxblack/70 max-sm:text-base"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              No. 8, Rizwan Road, Kodungaiyur, Chennai – 600118, Tamil Nadu,
              India.
            </motion.p>

            <motion.p
              className="text-left font-sans text-xl max-w-2xl text-zxblack/70 max-sm:text-base"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Phone: +91 96000 75808
            </motion.p>

            <motion.p
              className="text-left font-sans text-xl max-w-2xl text-zxblack/70 max-sm:text-base"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Email: finetechnoplast@gmail.com
            </motion.p>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white border border-[#e5e7eb] rounded-3xl p-10 shadow-sm max-sm:py-8 max-sm:px-5"
        >
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name *"
              className="contact-input-lg"
            />

            <input
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className="contact-input-lg"
            />

            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email *"
              className="contact-input-lg"
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone *"
              className="contact-input-lg"
            />

            <input
              name="droneRequirement"
              value={formData.droneRequirement}
              onChange={handleChange}
              placeholder="Drone Model / Requirement"
              className="contact-input-lg"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="contact-input-lg resize-none"
            />

            {/* SINGLE CTA */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="mt-4 w-full text-lg bg-black text-white font-medium py-5 rounded-[20px] hover:bg-zxprimary transition disabled:opacity-50 cursor-pointer"
            >
              Request a Pair
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
};

export default ContactUs;
