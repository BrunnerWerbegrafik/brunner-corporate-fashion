import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

export default function NotFoundPage() {
  return (
    <Layout>
      <section className="cf-container cf-section">
        <h1>404</h1>
        <p className="cf-paragraph-large">
          Diese Seite gibt es nicht. Zurück zur{' '}
          <Link to="/branchen-und-themen/corporate-fashion" className="underline">
            Themenseite Corporate Fashion
          </Link>
          .
        </p>
      </section>
    </Layout>
  );
}
