"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.email("Invalid email address"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form submitted:", data);
    setSubmitted(true);
    reset();
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  });

  return (
    <section id="contact" className="bg-primaryC text-white px-4 py-16">
      <h2 className="TITLE">Contact Us</h2>
      <div className="max-w-2xl mx-auto">
        <p className="text-center CUSTOM-GRAY mb-10">
          We'd love to hear from you! Fill out the form and we`ll get back to
          you.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              {...register("name")}
              className="w-full bg-gray-800 text-white rounded-md px-4 py-3 outline-none border border-gray-700"
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              {...register("email")}
              type="email"
              className="w-full bg-gray-800 text-white rounded-md px-4 py-3 outline-none border border-gray-700 "
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              {...register("message")}
              rows={5}
              className="w-full bg-gray-800 text-white rounded-md px-4 py-3 outline-none border border-gray-700 resize-none"
              placeholder="Your message..."
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="BG-GRADIENT cursor-pointer transition-all px-6 py-3 rounded-md text-white font-semibold disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitted && (
            <p className="text-green-500 text-sm mt-4 text-center">
              {submitted && "Message sent successfully!"}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
