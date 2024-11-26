import React from "react";
import { useForm } from "react-hook-form";
import { SMTPClient } from "emailjs";

type Info = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Info>();

  const onSubmit = async (data: Info) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        reset();
      } else {
        const error = await response.json();
        alert(`Failed to send message: ${error.error}`);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <div
      className="bg-gray-50 max-w-4xl mx-auto dark:bg-[#131921]"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold">Contact</h2>
        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          Reach out to us with any questions, feedback, or inquiries.
        </p>
        {isSubmitSuccessful && (
          <p className="mt-4 text-green-500">
            Your message has been sent successfully!
          </p>
        )}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <input
              type="text"
              placeholder="Full Name"
              className={`w-full px-4 py-3 border-2 rounded-md ${
                errors.name ? "border-red-500" : "border-neutral-300"
              }`}
              {...register("name", {
                required: "Full name is required",
                maxLength: 80,
              })}
            />
            {errors.name && (
              <small className="text-red-500">{errors.name.message}</small>
            )}
          </div>

          <div className="mb-5">
            <input
              type="email"
              placeholder="Email Address"
              className={`w-full px-4 py-3 border-2 rounded-md ${
                errors.email ? "border-red-500" : "border-neutral-300"
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
              })}
            />
            {errors.email && (
              <small className="text-red-500">{errors.email.message}</small>
            )}
          </div>

          <div className="mb-5">
            <textarea
              placeholder="Your Message"
              className={`w-full px-4 py-3 border-2 rounded-md h-36 ${
                errors.message ? "border-red-500" : "border-neutral-300"
              }`}
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <small className="text-red-500">{errors.message.message}</small>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
