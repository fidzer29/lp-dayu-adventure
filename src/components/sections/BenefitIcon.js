const paths = {
  weather: (
    <>
      <path d="M8 3a2 2 0 0 0-4 0v8.2a4 4 0 1 0 4 0V3Z" />
      <path d="M6 8v7" />
    </>
  ),
  wind: (
    <>
      <path d="M3 7h11a2 2 0 1 0-2-2" />
      <path d="M3 11h14a2 2 0 1 1-2 2" />
      <path d="M3 15h7" />
    </>
  ),
  leaf: (
    <>
      <path d="M19 3C9 3 4 7 4 13a4 4 0 0 0 4 4c6 0 10-6 11-14Z" />
      <path d="M3 21c3-6 7-9 12-12" />
    </>
  ),
  mountain: (
    <>
      <path d="m2 19 6-10 3 5 4-8 7 13H2Z" />
      <path d="m7 19 4-6 3 3 2-3" />
    </>
  ),
};

export default function BenefitIcon({ type }) {
  return (
    <svg className="benefit-icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[type]}
    </svg>
  );
}
