import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main className="cf-container cf-section">
      <h1>404</h1>
      <p className="cf-paragraph-large">
        Diese Seite gibt es nicht. Zurück zur{' '}
        <Link to="/branchen-und-themen/corporate-fashion" className="underline">
          Themenseite Corporate Fashion
        </Link>
        .
      </p>
    </main>
  );
}
