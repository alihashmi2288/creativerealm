"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Send, Sparkles } from "lucide-react";

interface ProposalDialogProps {
  children?: React.ReactNode;
  defaultPackage?: string;
  triggerClassName?: string;
}

export default function ProposalDialog({
  children,
  defaultPackage = "Growth Engine",
  triggerClassName = "",
}: ProposalDialogProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    selectedService: defaultPackage,
    budget: "$3,000 - $6,000",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (nextOpen) {
      setFormData((prev) => ({ ...prev, selectedService: defaultPackage }));
    } else {
      setTimeout(() => setSubmitted(false), 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children ? (
          children
        ) : (
          <Button
            className={`btn-primary ${triggerClassName}`}
            aria-label="Request a proposal"
          >
            <span>GET A PROPOSAL</span>
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-xl bg-white border-[#d9d9dd] text-[#212121] shadow-xl p-6 sm:p-8 rounded-[22px]">
        <DialogHeader className="text-left space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs font-mono font-medium tracking-wider">
              <Sparkles className="w-3 h-3 mr-1 text-[#ff7759]" aria-hidden="true" />
              DIRECT PROPOSAL REQUEST
            </Badge>
          </div>
          <DialogTitle className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-[#17171c]">
            Start Your Project
          </DialogTitle>
          <DialogDescription className="text-sm text-[#616161]">
            Tell us about your timeline and objectives. You&apos;ll receive an architectural scope outline and firm estimate within 24 business hours.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center justify-center space-y-4 animate-in fade-in-0 zoom-in-95 duration-250 ease-[var(--ease-out)]" role="status" aria-live="polite">
            <div className="size-14 rounded-full bg-[#edfce9] border border-[#c3eec0] flex items-center justify-center text-[#003c33] animate-in zoom-in-90 duration-300 ease-[var(--ease-out)]">
              <CheckCircle2 className="w-7 h-7" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold font-display uppercase tracking-tight text-[#17171c]">Proposal Request Received</h3>
            <p className="text-sm text-[#616161] max-w-sm">
              Thank you, <strong className="text-[#17171c]">{formData.name}</strong>. Our team will review your project requirements and follow up at <strong className="text-[#17171c]">{formData.email}</strong>.
            </p>
            <Button
              type="button"
              onClick={() => setOpen(false)}
              className="btn-secondary min-h-[44px] px-8 text-xs uppercase tracking-wider mt-4"
            >
              Close Window
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5 text-left">
                <label htmlFor="proposal-name" className="text-xs font-semibold text-[#212121]">
                  Your Name *
                </label>
                <input
                  id="proposal-name"
                  required
                  placeholder="Alex Wright"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="flex flex-col gap-1.5 text-left">
                <label htmlFor="proposal-email" className="text-xs font-semibold text-[#212121]">
                  Work Email *
                </label>
                <input
                  id="proposal-email"
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <label htmlFor="proposal-service" className="text-xs font-semibold text-[#212121]">
                Service Scope
              </label>
              <select
                id="proposal-service"
                value={formData.selectedService}
                onChange={(e) => setFormData({ ...formData, selectedService: e.target.value })}
                className="form-input cursor-pointer"
              >
                <option value="Launchpad Architecture">Starter Package ($3,200)</option>
                <option value="Growth Engine">Business Growth Package ($5,800)</option>
                <option value="Enterprise Platform">Custom / Store Build ($11,500)</option>
                <option value="Technical SEO & Speed Audit">SEO Services &amp; Speed Optimization</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <label htmlFor="proposal-notes" className="text-xs font-semibold text-[#212121]">
                Current Website or Project Brief (Optional)
              </label>
              <input
                id="proposal-notes"
                placeholder="https://example.com or brief requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="pt-3 flex flex-col sm:flex-row gap-3 items-center justify-between border-t border-[#e5e7eb] mt-2">
              <span className="text-[11px] text-[#75758a]">
                Zero spam. Strict NDA confidentiality.
              </span>
              <Button
                type="submit"
                className="w-full sm:w-auto btn-primary min-h-[44px] px-8 text-xs uppercase tracking-wider"
              >
                <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                Submit Scope Request
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
