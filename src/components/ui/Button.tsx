import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import ArrowIcon from './ArrowIcon';

type Variant = 'primary' | 'text';

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: 'standard' | 'large';
  className?: string;
};

type Props =
  | (CommonProps & { to: string; href?: never; onClick?: never; type?: never })
  | (CommonProps & { href: string; to?: never; onClick?: never; type?: never })
  | (CommonProps & { onClick: () => void; to?: never; href?: never; type?: 'button' | 'submit' });

/**
 * Brunner-Button:
 * - variant='primary'   → cyan Hintergrund, weißer Pfeil
 * - variant='text'      → transparenter Hintergrund, Pfeil cyan beim Hover
 * - size='large'        → Hero- und Abschluss-CTA (größerer Textgrad)
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'standard',
  className = '',
  ...rest
}: Props) {
  const classes = [
    'cf-btn',
    variant === 'primary' ? 'cf-btn--primary' : 'cf-btn--text',
    size === 'large' ? 'cf-btn--large' : 'cf-btn--standard',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const arrow =
    variant === 'primary' ? (
      <ArrowIcon color="white" size={size === 'large' ? 28 : 24} />
    ) : (
      <ArrowIcon color="black" size={24} className="cf-btn__arrow" />
    );

  const body = (
    <>
      <span className="cf-btn__label">{children}</span>
      {arrow}
    </>
  );

  if ('to' in rest && rest.to) {
    return (
      <Link to={rest.to} className={classes}>
        {body}
      </Link>
    );
  }
  if ('href' in rest && rest.href) {
    return (
      <a href={rest.href} className={classes}>
        {body}
      </a>
    );
  }
  return (
    <button type={rest.type ?? 'button'} onClick={rest.onClick} className={classes}>
      {body}
    </button>
  );
}
