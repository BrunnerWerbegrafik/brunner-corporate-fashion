type Props = {
  caption: string;
  /** Seitenverhältnis, z.B. "16/9", "4/5", "1/1" */
  ratio?: string;
  className?: string;
};

/**
 * Einheitlich gestylter Platzhalter für noch fehlende Bilder.
 * Wird später ersetzt, sobald Brunner Assets liefert.
 */
export default function ImagePlaceholder({ caption, ratio = '4/3', className = '' }: Props) {
  return (
    <div
      className={`cf-img-placeholder ${className}`.trim()}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`Platzhalter: ${caption}`}
    >
      <span className="cf-img-placeholder__caption">{caption}</span>
    </div>
  );
}
