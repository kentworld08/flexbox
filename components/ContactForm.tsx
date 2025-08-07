"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

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

  return (
    <section id="contact" className="bg-[#111111] text-white px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[84px] leading-[1.2] text-center mb-8 font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#F22801] to-[#FC9000]  hover:text-transparent max-w-[90%] lg:w-[900px] mx-auto">
          Contact Us
        </h2>
        <p className="text-center text-gray-400 mb-10">
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
            className=" bg-[linear-gradient(to_right,_#F22801,_#FC9000)] hover:bg-orange-600 transition-all px-6 py-3 rounded-md text-white font-semibold disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitted && (
            <p className="text-green-500 text-sm mt-4 text-center">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
