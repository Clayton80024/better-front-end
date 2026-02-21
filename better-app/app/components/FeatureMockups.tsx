const mockups = {
  upload: (
    <svg viewBox="0 0 120 80" className="w-full" fill="none" aria-hidden>
      <rect x="18" y="12" width="38" height="48" rx="4" fill="#E5E5E5" />
      <rect x="24" y="18" width="26" height="2.5" rx="1" fill="#ADADAD" />
      <rect x="24" y="24" width="22" height="2.5" rx="1" fill="#ADADAD" />
      <rect x="24" y="30" width="24" height="2.5" rx="1" fill="#ADADAD" />
      <path d="M64 38v16l6-6 6 6V38" stroke="#00A56E" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M70 30v8" stroke="#00A56E" strokeWidth="2" strokeLinecap="round" />
      <rect x="68" y="14" width="34" height="44" rx="4" fill="#00A56E" fillOpacity="0.08" stroke="#00A56E" strokeWidth="1.5" strokeDasharray="4 2" />
    </svg>
  ),
  extract: (
    <svg viewBox="0 0 120 80" className="w-full" fill="none" aria-hidden>
      <rect x="12" y="12" width="52" height="58" rx="4" fill="#E5E5E5" />
      <rect x="20" y="20" width="36" height="3" rx="1" fill="#ADADAD" />
      <rect x="20" y="28" width="30" height="3" rx="1" fill="#00A56E" fillOpacity="0.35" />
      <rect x="20" y="36" width="34" height="3" rx="1" fill="#ADADAD" />
      <rect x="20" y="44" width="26" height="3" rx="1" fill="#00A56E" fillOpacity="0.35" />
      <path d="M72 22h22v10h-22z" fill="#00A56E" fillOpacity="0.2" rx="2" />
      <path d="M72 36h22v10h-22z" fill="#00A56E" fillOpacity="0.2" rx="2" />
      <path d="M72 50h22v10h-22z" fill="#00A56E" fillOpacity="0.2" rx="2" />
      <path d="M68 28l4 4-4 4" stroke="#00A56E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  review: (
    <svg viewBox="0 0 120 80" className="w-full" fill="none" aria-hidden>
      <rect x="8" y="10" width="50" height="60" rx="4" fill="#E5E5E5" />
      <rect x="14" y="16" width="38" height="2.5" rx="1" fill="#ADADAD" />
      <rect x="14" y="22" width="34" height="2.5" rx="1" fill="#ADADAD" />
      <rect x="14" y="28" width="30" height="2.5" rx="1" fill="#ADADAD" />
      <rect x="14" y="38" width="38" height="26" rx="2" fill="#FAFAFA" stroke="#E5E5E5" />
      <rect x="62" y="10" width="50" height="60" rx="4" fill="#FAFAFA" stroke="#00A56E" strokeWidth="2" />
      <rect x="68" y="16" width="30" height="4" rx="1" fill="#00A56E" fillOpacity="0.2" />
      <rect x="68" y="24" width="34" height="2.5" rx="1" fill="#E5E5E5" />
      <rect x="68" y="30" width="32" height="2.5" rx="1" fill="#E5E5E5" />
      <rect x="68" y="36" width="28" height="2.5" rx="1" fill="#E5E5E5" />
      <rect x="68" y="46" width="38" height="4" rx="1" fill="#00A56E" fillOpacity="0.15" />
    </svg>
  ),
  consolidate: (
    <svg viewBox="0 0 120 80" className="w-full" fill="none" aria-hidden>
      <rect x="12" y="12" width="30" height="38" rx="4" fill="#E5E5E5" />
      <rect x="18" y="18" width="18" height="2" rx="1" fill="#ADADAD" />
      <rect x="42" y="20" width="30" height="38" rx="4" fill="#E5E5E5" />
      <rect x="48" y="26" width="18" height="2" rx="1" fill="#ADADAD" />
      <rect x="72" y="12" width="30" height="38" rx="4" fill="#E5E5E5" />
      <rect x="78" y="18" width="18" height="2" rx="1" fill="#ADADAD" />
      <path d="M27 54l18 2 18-2 18 2" stroke="#00A56E" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
      <rect x="35" y="58" width="50" height="16" rx="4" fill="#00A56E" fillOpacity="0.12" stroke="#00A56E" strokeWidth="1.5" />
      <rect x="42" y="64" width="36" height="2.5" rx="1" fill="#00A56E" fillOpacity="0.35" />
    </svg>
  ),
  detect: (
    <svg viewBox="0 0 120 80" className="w-full" fill="none" aria-hidden>
      <rect x="22" y="12" width="76" height="56" rx="4" fill="#FAFAFA" stroke="#E5E5E5" />
      <rect x="30" y="20" width="28" height="3" rx="1" fill="#E5E5E5" />
      <rect x="30" y="28" width="32" height="3" rx="1" fill="#00A56E" fillOpacity="0.2" />
      <rect x="30" y="36" width="22" height="3" rx="1" fill="#E5E5E5" />
      <rect x="30" y="44" width="30" height="3" rx="1" fill="#E5E5E5" />
      <circle cx="82" cy="32" r="14" fill="#FEF2F2" stroke="#DC2626" strokeWidth="1.5" />
      <path d="M82 26v4M82 36v4" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="74" y="52" width="16" height="8" rx="2" fill="#FEF2F2" />
      <path d="M78 55h2M78 58h6" stroke="#DC2626" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ),
  track: (
    <svg viewBox="0 0 120 80" className="w-full" fill="none" aria-hidden>
      <rect x="18" y="12" width="84" height="56" rx="4" fill="#FAFAFA" stroke="#E5E5E5" />
      <rect x="26" y="20" width="68" height="8" rx="2" fill="#E5E5E5" />
      <rect x="26" y="20" width="51" height="8" rx="2" fill="#00A56E" />
      <rect x="26" y="34" width="14" height="14" rx="2" fill="#00A56E" />
      <rect x="44" y="38" width="52" height="4" rx="1" fill="#E5E5E5" />
      <rect x="26" y="54" width="14" height="14" rx="2" fill="#E5E5E5" />
      <rect x="44" y="58" width="44" height="4" rx="1" fill="#E5E5E5" />
      <rect x="26" y="66" width="14" height="10" rx="2" fill="#E5E5E5" />
      <rect x="44" y="69" width="40" height="4" rx="1" fill="#E5E5E5" />
    </svg>
  ),
};

export default mockups;
