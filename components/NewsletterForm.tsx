"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

export default function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);

  if (subscribed) {
    return (
      <div className="bg-[#22222a] border border-[#33333d] p-3 rounded-lg w-full flex items-center justify-center gap-2 text-xs text-[#edfce9] font-medium animate-in fade-in-0 zoom-in-95 duration-200 ease-[var(--ease-out)]">
        <Check size={14} className="text-[#edfce9] animate-in zoom-in-90 duration-250 ease-[var(--ease-out)]" />
        <span>Thank you! You are subscribed.</span>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}>
      <label htmlFor="newsletter-email" className="sr-only">Email address for agency newsletter</label>
      <div className="relative flex items-center">
        <input 
          id="newsletter-email"
          name="email"
          type="email" 
          required
          autoComplete="email"
          placeholder="your.email@company.com" 
          className="w-full bg-[#22222a] border border-[#33333d] rounded-full pl-4 pr-12 py-2.5 text-xs text-white placeholder-[#75758a] focus:outline-none focus:border-[#ff7759] focus:ring-1 focus:ring-[#ff7759] transition-[border-color,box-shadow] duration-150 ease-[var(--ease-out)]" 
        />
        <button 
          type="submit" 
          aria-label="Subscribe to newsletter"
          className="absolute right-1 top-1 bottom-1 px-3 bg-white text-[#17171c] hover:bg-[#eeece7] rounded-full transition-[background-color,transform] duration-150 ease-[var(--ease-out)] active:scale-95 cursor-pointer flex items-center justify-center"
        >
          <ArrowRight size={13} aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}
