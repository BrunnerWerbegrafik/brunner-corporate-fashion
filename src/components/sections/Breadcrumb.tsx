export default function Breadcrumb() {
  return (
    <nav className="cf-breadcrumb" aria-label="Breadcrumb">
      <div className="cf-breadcrumb__inner">
        <a
          href="https://www.brunner-werbegrafik.de/#branchen"
          className="cf-breadcrumb__link"
        >
          Branchen &amp; Themen
        </a>
        <span className="cf-breadcrumb__separator" aria-hidden="true">
          /
        </span>
        <span className="cf-breadcrumb__current" aria-current="page">
          Corporate Fashion
        </span>
      </div>
      <div className="cf-breadcrumb__line" role="presentation" />
    </nav>
  );
}
