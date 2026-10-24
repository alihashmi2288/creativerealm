"use client";

import { useState, useId } from "react";
import { MapPin, Mail, Phone, CheckCircle, Clock } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nameHintId = useId();
  const nameErrorId = useId();
  const emailHintId = useId();
  const emailErrorId = useId();
  const messageHintId = useId();
  const messageErrorId = useId();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <div className="py-12 sm:py-20 md:py-24 px-5 sm:px-10 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 sm:mb-20 text-center">
          <div>
            <span className="text-[#ff7759] font-mono text-xs uppercase tracking-widest mb-3 block">
              Direct Agency Inquiry
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-normal font-display text-[#17171c] uppercase tracking-[-1.92px] leading-none mb-6">
              LET'S TALK <br /> <span className="text-[#003c33]">PROJECTS</span>
            </h1>
            <p className="text-[#616161] max-w-xl mx-auto text-base sm:text-lg font-sans">
              Whether you need a new website designed, modern code built, or your Google rankings improved, we are here to help.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] uppercase tracking-tight mb-4">
                Honest Advice, <br /> Transparent Estimates.
              </h2>
              <p className="text-[#616161] text-sm sm:text-base font-sans leading-relaxed">
                Tell us about your brand goals. Within 24 hours, our lead designer and technical specialist will review your requirements and provide a clear roadmap with realistic options.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#e5e7eb]" role="region" aria-label="Direct Contact Channels">
              <div className="flex gap-4 items-start p-5 rounded-[16px] bg-[#eeece7] border border-[#e5e7eb] hover:border-[#d9d9dd] transition-[border-color,box-shadow] duration-200 ease-[var(--ease-out)]">
                <div className="w-10 h-10 rounded-[8px] bg-white border border-[#e5e7eb] flex items-center justify-center text-[#17171c] flex-shrink-0" aria-hidden="true">
                  <Mail size={18} />
                </div>
                <div>
                  <h3 className="text-[#17171c] font-bold font-display uppercase text-xs tracking-wider mb-1">Direct Email</h3>
                  <a href="mailto:creativerealmdesignstudio@gmail.com" className="text-[#616161] hover:text-[#17171c] font-sans text-sm transition-colors duration-150 ease-[var(--ease-out)]">
                    creativerealmdesignstudio@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start p-5 rounded-[16px] bg-[#eeece7] border border-[#e5e7eb] hover:border-[#d9d9dd] transition-[border-color,box-shadow] duration-200 ease-[var(--ease-out)]">
                <div className="w-10 h-10 rounded-[8px] bg-white border border-[#e5e7eb] flex items-center justify-center text-[#ff7759] flex-shrink-0" aria-hidden="true">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 className="text-[#17171c] font-bold font-display uppercase text-xs tracking-wider mb-1">Office Location</h3>
                  <p className="text-[#616161] font-sans text-sm">Design District, Greenwich Peninsula, London, UK</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-5 rounded-[16px] bg-[#eeece7] border border-[#e5e7eb] hover:border-[#d9d9dd] transition-[border-color,box-shadow] duration-200 ease-[var(--ease-out)]">
                <div className="w-10 h-10 rounded-[8px] bg-white border border-[#e5e7eb] flex items-center justify-center text-[#003c33] flex-shrink-0" aria-hidden="true">
                  <Phone size={18} />
                </div>
                <div>
                  <h3 className="text-[#17171c] font-bold font-display uppercase text-xs tracking-wider mb-1">Direct Phone</h3>
                  <a href="tel:+442079460123" className="text-[#616161] hover:text-[#17171c] font-sans text-sm transition-colors duration-150 ease-[var(--ease-out)]">
                    +44 (0)20 7946 0123
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-[16px] bg-[#fafaf9] border border-[#e5e7eb] space-y-2">
              <div className="flex items-center gap-2 text-[#003c33] text-xs font-mono font-medium uppercase tracking-wider">
                <Clock size={15} aria-hidden="true" />
                <span>24-Hour Guaranteed Reply</span>
              </div>
              <p className="text-[#75758a] text-xs font-sans">
                Every inquiry is reviewed directly by a project lead. No automated sales pitches or spam.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="contact-form-card p-12 text-center rounded-[22px] border border-[#c3eec0] bg-[#edfce9]/30 animate-in fade-in-0 zoom-in-95 duration-250 ease-[var(--ease-out)]" role="status" aria-live="polite">
                <CheckCircle className="w-14 h-14 text-[#003c33] mx-auto mb-5 animate-in zoom-in-90 duration-300 ease-[var(--ease-out)]" aria-hidden="true" />
                <h2 className="text-3xl font-bold font-display text-[#17171c] uppercase mb-3">
                  Inquiry Received!
                </h2>
                <p className="text-[#616161] font-sans text-base mb-8 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. We have logged your project details and will review them thoroughly before contacting you within 24 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="btn-primary text-xs uppercase tracking-wider px-8 py-3"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit} 
                className="contact-form-card p-8 sm:p-10 space-y-6 rounded-[22px] border border-[#d9d9dd] bg-white shadow-sm" 
                aria-label="Agency Project Inquiry Form"
                noValidate={false}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-field">
                    <label htmlFor="contact-name" className="text-xs font-semibold text-[#17171c] uppercase tracking-wider font-sans">
                      Your Full Name <span className="text-[#ff7759]" aria-hidden="true">*</span>
                    </label>
                    <span id={nameHintId} className="form-hint">
                      Enter your first and last name
                    </span>
                    <input 
                      id="contact-name"
                      name="name"
                      type="text" 
                      required
                      minLength={2}
                      autoComplete="name"
                      placeholder="e.g. Eleanor Rigby" 
                      aria-describedby={`${nameHintId} ${nameErrorId}`}
                      className="form-input" 
                    />
                    <div id={nameErrorId} className="field-error" aria-live="polite">
                      <span aria-hidden="true">❌</span>
                      <span>Please enter your name (minimum 2 characters).</span>
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-email" className="text-xs font-semibold text-[#17171c] uppercase tracking-wider font-sans">
                      Work Email <span className="text-[#ff7759]" aria-hidden="true">*</span>
                    </label>
                    <span id={emailHintId} className="form-hint">
                      Format: you@company.com
                    </span>
                    <input 
                      id="contact-email"
                      name="email"
                      type="email" 
                      required
                      autoComplete="email"
                      placeholder="eleanor@company.com" 
                      aria-describedby={`${emailHintId} ${emailErrorId}`}
                      className="form-input" 
                    />
                    <div id={emailErrorId} className="field-error" aria-live="polite">
                      <span aria-hidden="true">❌</span>
                      <span>Please provide a valid email address.</span>
                    </div>
                  </div>
                </div>
                
                <div className="form-field">
                  <label htmlFor="contact-service" className="text-xs font-semibold text-[#17171c] uppercase tracking-wider font-sans">
                    Primary Service You Require
                  </label>
                  <span className="form-hint">Select the main goal for your project</span>
                  <select 
                    id="contact-service"
                    name="service"
                    defaultValue="Full Design & Development"
                    className="form-input cursor-pointer"
                  >
                    <option value="Website Design (UI/UX)">Bespoke Website Design (UI/UX)</option>
                    <option value="Next.js Web Development">Custom Web Development (Next.js / Speed)</option>
                    <option value="SEO & Google Growth">SEO &amp; Google Ranking Campaign</option>
                    <option value="Full Design & Development">Full Design, Build &amp; SEO Package</option>
                    <option value="Website Audit & Speed Optimization">Website Speed &amp; Audit Review</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-field">
                    <label htmlFor="contact-budget" className="text-xs font-semibold text-[#17171c] uppercase tracking-wider font-sans">
                      Anticipated Budget Range
                    </label>
                    <span className="form-hint">Helps us recommend the best approach</span>
                    <select 
                      id="contact-budget"
                      name="budget"
                      defaultValue="$5,000 - $10,000"
                      className="form-input cursor-pointer"
                    >
                      <option value="$3,000 - $5,000">$3,000 – $5,000 (Starter Showcase)</option>
                      <option value="$5,000 - $10,000">$5,000 – $10,000 (Growth Engine)</option>
                      <option value="$10,000+">$10,000+ (Scale &amp; Custom Quote)</option>
                      <option value="Undecided">Need Consultation First</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-timeline" className="text-xs font-semibold text-[#17171c] uppercase tracking-wider font-sans">
                      Ideal Target Launch
                    </label>
                    <span className="form-hint">When do you need to go live?</span>
                    <select 
                      id="contact-timeline"
                      name="timeline"
                      defaultValue="1 to 2 Months"
                      className="form-input cursor-pointer"
                    >
                      <option value="Immediately (Within 3 weeks)">As soon as possible (2–3 weeks)</option>
                      <option value="1 to 2 Months">Standard (1–2 months)</option>
                      <option value="Flexible">Flexible / Planning stage</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="contact-message" className="text-xs font-semibold text-[#17171c] uppercase tracking-wider font-sans">
                    Project Overview <span className="text-[#ff7759]" aria-hidden="true">*</span>
                  </label>
                  <span id={messageHintId} className="form-hint">
                    Share current website URL (if any), goals, and key requirements
                  </span>
                  <textarea 
                    id="contact-message"
                    name="message"
                    rows={4} 
                    required
                    minLength={10}
                    placeholder="Tell us about your brand, what is not working with your current website, or what you want to achieve..." 
                    aria-describedby={`${messageHintId} ${messageErrorId}`}
                    className="form-input resize-none" 
                  />
                  <div id={messageErrorId} className="field-error" aria-live="polite">
                    <span aria-hidden="true">❌</span>
                    <span>Please provide a brief description (at least 10 characters).</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary w-full py-3.5 text-xs uppercase tracking-wider font-semibold inline-flex items-center justify-center cursor-pointer"
                  >
                    <span>{isSubmitting ? "SENDING PROPOSAL REQUEST..." : "SUBMIT PROJECT INQUIRY"}</span>
                  </button>
                  <p className="text-center text-[#75758a] text-xs font-sans mt-3">
                    No spam. Your contact information is never shared.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
