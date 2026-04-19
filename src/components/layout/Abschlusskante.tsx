type Variant = 'weiss' | 'grau' | 'schwarz';

type Props = {
  /**
   * Farbe der nachfolgenden Sektion. Die Kante "zeigt" diese Farbe
   * und bildet den diagonalen Übergang von der vorherigen Sektion
   * in die nächste.
   */
  variant: Variant;
  className?: string;
};

const FILL: Record<Variant, string> = {
  weiss: '#ffffff',
  grau: '#f4f4f4',
  schwarz: '#000000',
};

/**
 * Diagonale Abschlusskante zwischen zwei Sektionen — Brunner-Signature.
 * Rendert Desktop-Variante (1920×60, asymmetrische Spitze bei ~38%)
 * und Mobile-Variante (375×30, Spitze bei ~40%). Per CSS-Media-Query
 * wird unter 992 px auf die Mobile-Form umgeschaltet.
 *
 * Der kleine margin-top: -1px verhindert sichtbare Naht zur
 * vorhergehenden Sektion.
 */
export default function Abschlusskante({ variant, className = '' }: Props) {
  const fill = FILL[variant];

  return (
    <div
      className={`cf-abschlusskante ${className}`.trim()}
      aria-hidden="true"
      style={{ marginTop: -1, lineHeight: 0 }}
    >
      <svg
        className="cf-abschlusskante__desktop"
        viewBox="0 0 1920 60"
        preserveAspectRatio="none"
        width="100%"
        height="60"
      >
        <polygon points="1920,0 733.44,60 0,0 0,60 1920,60" fill={fill} />
      </svg>
      <svg
        className="cf-abschlusskante__mobile"
        viewBox="0 0 375 30"
        preserveAspectRatio="none"
        width="100%"
        height="30"
      >
        <polygon points="375,0 150,30 0,0 0,30 375,30" fill={fill} />
      </svg>
    </div>
  );
}
