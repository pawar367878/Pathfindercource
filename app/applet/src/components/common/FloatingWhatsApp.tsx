import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES, OFFICIAL_PHONE } from '../../utils/whatsapp.ts';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip bubble */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-lg animate-in fade-in slide-in-from-right duration-300">
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-1.5"
          >
            <span>Have questions? Chat on WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => setTooltipDismissed(true)}
            className="text-slate-400 hover:text-white p-0.5 rounded-full"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with Pathfinder on WhatsApp at ${OFFICIAL_PHONE}`}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300/50 group"
      >
        <MessageSquare className="w-7 h-7 fill-white/20 text-white" />
        {/* Subtle ripple / indicator ping */}
        <span className="sr-only">WhatsApp Inquiry</span>
      </a>
    </div>
  );
};
