type Props = {
  className?: string;
  color?: string;
  size?: number;
};

export function PawPrint({ className = "", color = "#3B5323", size = 24 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="20" cy="18" rx="6" ry="8" />
      <ellipse cx="44" cy="18" rx="6" ry="8" />
      <ellipse cx="10" cy="32" rx="5" ry="7" />
      <ellipse cx="54" cy="32" rx="5" ry="7" />
      <path d="M32 28c-9 0-15 8-15 16 0 6 5 10 15 10s15-4 15-10c0-8-6-16-15-16z" />
    </svg>
  );
}

export function Heart({ className = "", color = "#E8C9B5", size = 20 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 21s-7-4.5-9.5-9.5C.5 7 3.5 3 7 3c2 0 3.5 1 5 3 1.5-2 3-3 5-3 3.5 0 6.5 4 4.5 8.5C19 16.5 12 21 12 21z" />
    </svg>
  );
}

export function Sparkle({ className = "", color = "#C4A882", size = 16 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0l2.5 8.5L23 12l-8.5 3.5L12 24l-2.5-8.5L1 12l8.5-3.5L12 0z" />
    </svg>
  );
}
