"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/shared/components/ui/button";
import { Check, X } from "@phosphor-icons/react";

const inquiryOptions = [
  "Horizontal Directional Drilling",
  "Pipeline EPC",
  "BPDS Pipeline Location",
  "HDD Equipment & Technical Support",
  "Not Sure Yet"
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    organisation: "",
    projectLocation: "",
    pipeDiameter: "",
    estimatedCrossingLength: "",
    additionalMessage: "",
    inquiryTypes: [] as string[],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [isSubmitError, setIsSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleCheckboxChange = (option: string) => {
    setFormData((prev) => {
      const isChecked = prev.inquiryTypes.includes(option);
      const updated = isChecked
        ? prev.inquiryTypes.filter((t) => t !== option)
        : [...prev.inquiryTypes, option];
      return { ...prev, inquiryTypes: updated };
    });

    if (errors.inquiryTypes) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy.inquiryTypes;
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitMessage(null);

    // Validate
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (formData.inquiryTypes.length === 0) {
      newErrors.inquiryTypes = "Please select at least one inquiry option";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate Form Submission (UI Ready)
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitSuccess(true);
      setSubmitMessage("Thank you! Your project inquiry has been received.");
      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        organisation: "",
        projectLocation: "",
        pipeDiameter: "",
        estimatedCrossingLength: "",
        additionalMessage: "",
        inquiryTypes: [],
      });
    }, 800);
  };

  if (isSubmitError) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center text-center p-10 lg:p-16 rounded-2xl w-full lg:max-w-[600px] lg:ml-auto bg-[var(--color-primary-dark)] text-white min-h-[500px] gap-6"
        data-name="ErrorMessage"
      >
        <div className="w-[80px] h-[80px] bg-red-500 rounded-full flex items-center justify-center mb-2 shrink-0">
          <X weight="bold" className="text-white w-[40px] h-[40px]" />
        </div>
        
        <h2 className="font-extrabold text-3xl lg:text-4xl text-white mb-2">
          Submission Failed.
        </h2>
        
        <p className="text-base lg:text-lg text-white/90 max-w-[400px] mx-auto leading-relaxed">
          Something went wrong. Please check your details and try submitting again.
        </p>
        
        <button
          onClick={() => setIsSubmitError(false)}
          className="px-6 py-3 rounded-lg bg-red-500 text-white font-bold hover:opacity-90 transition-opacity mt-4"
        >
          Try Again
        </button>
      </motion.div>
    );
  }

  if (isSubmitSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center text-center p-10 lg:p-16 rounded-2xl w-full lg:max-w-[600px] lg:ml-auto bg-[#052237] text-white min-h-[500px] gap-6 border border-white/10"
        data-name="SuccessMessage"
      >
        <div className="w-[80px] h-[80px] bg-[var(--color-accent)] rounded-full flex items-center justify-center mb-2 shrink-0">
          <Check weight="bold" className="text-[#052237] w-[40px] h-[40px]" />
        </div>
        
        <h2 className="font-extrabold text-3xl lg:text-4xl text-white mb-2">
          Inquiry Received.
        </h2>
        
        <p className="text-base lg:text-lg text-white/80 max-w-[420px] mx-auto leading-relaxed">
          Thank you for reaching out. The PCE engineering team will review your project details and contact you shortly.
        </p>
        
        <button
          onClick={() => setIsSubmitSuccess(false)}
          className="px-8 py-4 rounded-xl bg-[var(--color-accent)] text-[var(--color-primary-dark)] font-extrabold hover:opacity-90 transition-opacity mt-4"
        >
          Submit Another Inquiry
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      onSubmit={handleSubmit}
      className="flex flex-col w-full lg:max-w-[720px] lg:ml-auto gap-8 bg-white p-8 sm:p-10 lg:p-12 rounded-2xl border border-black/5 shadow-sm"
      data-name="ContactForm"
    >
      {/* Personal Details Section */}
      <div className="flex flex-col gap-6 w-full">
        <h3 className="font-semibold !text-[24px] lg:!text-[28px] text-[var(--color-primary)] uppercase tracking-wider">
          PERSONAL DETAILS
        </h3>

        {/* Row 1: First Name & Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {/* First Name */}
          <div className="flex flex-col gap-1 w-full">
            <div className="relative w-full h-[64px] border-b border-[var(--color-primary)]/40 focus-within:border-[var(--color-primary)] transition-colors">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder=" "
                className="absolute bottom-0 left-0 w-full h-[40px] bg-transparent outline-none text-xl font-normal text-[var(--color-ink)] placeholder-transparent transition-all peer z-10"
              />
              <label className="absolute left-0 top-[28px] text-[var(--color-ink-muted-48)] text-sm font-semibold pointer-events-none transition-all duration-200 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[var(--color-primary)] peer-not-placeholder-shown:-translate-y-6 peer-not-placeholder-shown:scale-75 origin-top-left uppercase">
                FIRST NAME
              </label>
            </div>
            {errors.firstName && (
              <span className="text-red-500 text-xs mt-1">
                {errors.firstName}
              </span>
            )}
          </div>

          {/* Last Name */}
          <div className="flex flex-col gap-1 w-full">
            <div className="relative w-full h-[64px] border-b border-[var(--color-primary)]/40 focus-within:border-[var(--color-primary)] transition-colors">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder=" "
                className="absolute bottom-0 left-0 w-full h-[40px] bg-transparent outline-none text-xl font-normal text-[var(--color-ink)] placeholder-transparent transition-all peer z-10"
              />
              <label className="absolute left-0 top-[28px] text-[var(--color-ink-muted-48)] text-sm font-semibold pointer-events-none transition-all duration-200 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[var(--color-primary)] peer-not-placeholder-shown:-translate-y-6 peer-not-placeholder-shown:scale-75 origin-top-left uppercase">
                LAST NAME
              </label>
            </div>
            {errors.lastName && (
              <span className="text-red-500 text-xs mt-1">
                {errors.lastName}
              </span>
            )}
          </div>
        </div>

        {/* Row 2: Email Address & Phone Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {/* Email */}
          <div className="flex flex-col gap-1 w-full">
            <div className="relative w-full h-[64px] border-b border-[var(--color-primary)]/40 focus-within:border-[var(--color-primary)] transition-colors">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                className="absolute bottom-0 left-0 w-full h-[40px] bg-transparent outline-none text-xl font-normal text-[var(--color-ink)] placeholder-transparent transition-all peer z-10"
              />
              <label className="absolute left-0 top-[28px] text-[var(--color-ink-muted-48)] text-sm font-semibold pointer-events-none transition-all duration-200 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[var(--color-primary)] peer-not-placeholder-shown:-translate-y-6 peer-not-placeholder-shown:scale-75 origin-top-left uppercase">
                EMAIL ADDRESS
              </label>
            </div>
            {errors.email && (
              <span className="text-red-500 text-xs mt-1">
                {errors.email}
              </span>
            )}
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-1 w-full">
            <div className="relative w-full h-[64px] border-b border-[var(--color-primary)]/40 focus-within:border-[var(--color-primary)] transition-colors">
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder=" "
                className="absolute bottom-0 left-0 w-full h-[40px] bg-transparent outline-none text-xl font-normal text-[var(--color-ink)] placeholder-transparent transition-all peer z-10"
              />
              <label className="absolute left-0 top-[28px] text-[var(--color-ink-muted-48)] text-sm font-semibold pointer-events-none transition-all duration-200 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[var(--color-primary)] peer-not-placeholder-shown:-translate-y-6 peer-not-placeholder-shown:scale-75 origin-top-left uppercase">
                PHONE NUMBER
              </label>
            </div>
            {errors.phoneNumber && (
              <span className="text-red-500 text-xs mt-1">
                {errors.phoneNumber}
              </span>
            )}
          </div>
        </div>

        {/* Row 3: Organisation */}
        <div className="flex flex-col gap-1 w-full">
          <div className="relative w-full h-[64px] border-b border-[var(--color-primary)]/40 focus-within:border-[var(--color-primary)] transition-colors">
            <input
              type="text"
              name="organisation"
              value={formData.organisation}
              onChange={handleChange}
              placeholder=" "
              className="absolute bottom-0 left-0 w-full h-[40px] bg-transparent outline-none text-xl font-normal text-[var(--color-ink)] placeholder-transparent transition-all peer z-10"
            />
            <label className="absolute left-0 top-[28px] text-[var(--color-ink-muted-48)] text-sm font-semibold pointer-events-none transition-all duration-200 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[var(--color-primary)] peer-not-placeholder-shown:-translate-y-6 peer-not-placeholder-shown:scale-75 origin-top-left uppercase">
              ORGANISATION
            </label>
          </div>
        </div>
      </div>

      {/* Project Requirement Section */}
      <div className="flex flex-col gap-6 w-full pt-4">
        <h3 className="font-semibold !text-[24px] lg:!text-[28px] text-[var(--color-primary)] uppercase tracking-wider">
          PROJECT REQUIREMENT
        </h3>

        {/* Inquiry Options */}
        <div className="flex flex-col gap-4">
          <span className="!text-[14px] font-semibold text-[var(--color-ink-muted-48)] uppercase tracking-wider">
            WHAT WOULD YOU LIKE TO INQUIRE ABOUT?
          </span>

          <div className="flex flex-col gap-3">
            {inquiryOptions.map((option) => (
              <label key={option} className="flex items-center gap-4 cursor-pointer group">
                <div className="relative w-[22px] h-[22px] shrink-0">
                  <input
                    type="checkbox"
                    checked={formData.inquiryTypes.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                    className="peer absolute opacity-0 cursor-pointer h-full w-full z-10"
                  />
                  <div className="absolute inset-0 border border-[var(--color-primary)]/40 rounded transition-colors peer-checked:border-[var(--color-accent)] bg-white" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity bg-[var(--color-accent)] rounded">
                    <span className="text-white text-xs leading-none font-bold">✓</span>
                  </div>
                </div>
                <span className="text-sm md:text-base text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                  {option}
                </span>
              </label>
            ))}
          </div>

          {errors.inquiryTypes && (
            <p className="text-red-500 text-xs mt-1">
              {errors.inquiryTypes}
            </p>
          )}
        </div>

        {/* Project Location & Pipe Diameter (Side by Side) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-2">
          {/* Project Location */}
          <div className="flex flex-col gap-1 w-full">
            <div className="relative w-full h-[64px] border-b border-[var(--color-primary)]/40 focus-within:border-[var(--color-primary)] transition-colors">
              <input
                type="text"
                name="projectLocation"
                value={formData.projectLocation}
                onChange={handleChange}
                placeholder=" "
                className="absolute bottom-0 left-0 w-full h-[40px] bg-transparent outline-none text-xl font-normal text-[var(--color-ink)] placeholder-transparent transition-all peer z-10"
              />
              <label className="absolute left-0 top-[28px] text-[var(--color-ink-muted-48)] text-sm font-semibold pointer-events-none transition-all duration-200 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[var(--color-primary)] peer-not-placeholder-shown:-translate-y-6 peer-not-placeholder-shown:scale-75 origin-top-left uppercase">
                PROJECT LOCATION
              </label>
            </div>
          </div>

          {/* Pipe Diameter */}
          <div className="flex flex-col gap-1 w-full">
            <div className="relative w-full h-[64px] border-b border-[var(--color-primary)]/40 focus-within:border-[var(--color-primary)] transition-colors">
              <input
                type="text"
                name="pipeDiameter"
                value={formData.pipeDiameter}
                onChange={handleChange}
                placeholder=" "
                className="absolute bottom-0 left-0 w-full h-[40px] bg-transparent outline-none text-xl font-normal text-[var(--color-ink)] placeholder-transparent transition-all peer z-10"
              />
              <label className="absolute left-0 top-[28px] text-[var(--color-ink-muted-48)] text-sm font-semibold pointer-events-none transition-all duration-200 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[var(--color-primary)] peer-not-placeholder-shown:-translate-y-6 peer-not-placeholder-shown:scale-75 origin-top-left uppercase">
                PIPE DIAMETER
              </label>
            </div>
          </div>
        </div>

        {/* Estimated Crossing Length */}
        <div className="flex flex-col gap-1 w-full">
          <div className="relative w-full h-[64px] border-b border-[var(--color-primary)]/40 focus-within:border-[var(--color-primary)] transition-colors">
            <input
              type="text"
              name="estimatedCrossingLength"
              value={formData.estimatedCrossingLength}
              onChange={handleChange}
              placeholder=" "
              className="absolute bottom-0 left-0 w-full h-[40px] bg-transparent outline-none text-xl font-normal text-[var(--color-ink)] placeholder-transparent transition-all peer z-10"
            />
            <label className="absolute left-0 top-[28px] text-[var(--color-ink-muted-48)] text-sm font-semibold pointer-events-none transition-all duration-200 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[var(--color-primary)] peer-not-placeholder-shown:-translate-y-6 peer-not-placeholder-shown:scale-75 origin-top-left uppercase">
              ESTIMATED CROSSING LENGTH
            </label>
          </div>
        </div>

        {/* What does the project need */}
        <div className="flex flex-col gap-3 w-full mt-4">
          <div className="flex flex-col gap-1">
            <span className="!text-[14px] font-semibold text-[var(--color-ink-muted-48)] uppercase tracking-wider">
              WHAT DOES THE PROJECT NEED
            </span>
            <p className="text-xs md:text-sm text-[var(--color-ink-muted-48)] leading-normal">
              Tell us about the route, crossing constraint, pipeline requirement or technical decision you are working through.
            </p>
          </div>

          <div className="relative w-full border-b border-[var(--color-primary)]/40 focus-within:border-[var(--color-primary)] transition-colors pt-2">
            <textarea
              name="additionalMessage"
              value={formData.additionalMessage}
              onChange={handleChange}
              placeholder=""
              rows={4}
              className="w-full bg-transparent outline-none text-base text-[var(--color-ink)] transition-all peer z-10 resize-none"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        isLoading={isSubmitting}
        variant="primary"
        className="w-full font-bold text-base py-5 rounded-xl mt-4"
      >
        Submit Project Inquiry
      </Button>

      {submitMessage && !isSubmitSuccess && (
        <p className="text-xs text-red-500 font-semibold mt-2">
          {submitMessage}
        </p>
      )}
    </motion.form>
  );
}

export default ContactForm;
