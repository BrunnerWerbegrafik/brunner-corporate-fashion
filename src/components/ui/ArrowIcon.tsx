type Props = {
  color?: 'white' | 'black' | 'cyan';
  size?: number;
  className?: string;
};

export default function ArrowIcon({ color = 'white', size = 24, className = '' }: Props) {
  const fill =
    color === 'white' ? '#ffffff' : color === 'cyan' ? '#009fe3' : '#000000';

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path fill={fill} d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
    </svg>
  );
}
