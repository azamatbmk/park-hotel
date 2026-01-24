export default function ArrowIcon({ color = 'currentColor' }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="16" 
      height="16" 
      viewBox="0 0 16 16"
      fill={color}
      style={{ 
        fill: color,
        color: color,
        flexShrink: 0,
        width: 16,
        height: 16
      }}
    >
      <path d="M16 16H14.4004V2.73145L1.13574 15.9961L0.00488281 14.8643L13.2686 1.60059H0V0.000976562H14.4004V0H16V16Z"/>
    </svg>
  );
};