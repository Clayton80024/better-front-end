const size = "h-11 w-11";

const icons = {
  chasing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={size}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M12 4l2 2 2-2" strokeWidth="2" />
    </svg>
  ),
  manualEntry: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={size}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M6 12h.01M10 12h.01M14 12h6M6 16h12" />
    </svg>
  ),
  overloaded: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={size}>
      <rect x="4" y="6" width="16" height="14" rx="1" />
      <path d="M4 6l4-3 4 3 4-3 4 3" />
      <path d="M8 12h8M8 15h6" />
    </svg>
  ),
  stress: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={size}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <path d="M9 9h.01M15 9h.01" strokeWidth="2" />
    </svg>
  ),
  policy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={size}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M12 18v-4" />
      <path d="M12 14l-2 2 2 2 2-2" />
    </svg>
  ),
  disorganized: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={size}>
      <path d="M4 4h5v5H4z" />
      <path d="M15 4h5v5h-5z" />
      <path d="M4 15h5v5H4z" />
      <path d="M15 10h5v10h-5z" />
    </svg>
  ),
};

export default icons;
