import { Navigate, Route, Routes } from 'react-router-dom';
import CorporateFashionPage from './pages/CorporateFashionPage';
import NotFoundPage from './pages/NotFoundPage';
import PlaceholderPage from './pages/PlaceholderPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/branchen-und-themen/corporate-fashion" replace />} />

      <Route
        path="/branchen-und-themen/corporate-fashion"
        element={<CorporateFashionPage />}
      />

      {/* Stufe 2 — Gerüst mit Mock-Inhalten */}
      <Route
        path="/corporate-fashion/katalog"
        element={<PlaceholderPage title="Katalog" />}
      />
      <Route
        path="/corporate-fashion/katalog/:textilart"
        element={<PlaceholderPage title="Katalog — Textilart" />}
      />
      <Route
        path="/corporate-fashion/anwendung"
        element={<PlaceholderPage title="Anwendung" />}
      />
      <Route
        path="/corporate-fashion/anwendung/:level"
        element={<PlaceholderPage title="Anwendung — Level" />}
      />
      <Route
        path="/corporate-fashion/anfragekorb"
        element={<PlaceholderPage title="Anfragekorb" />}
      />
      <Route
        path="/corporate-fashion/anfrage"
        element={<PlaceholderPage title="Anfrage" />}
      />
      <Route
        path="/corporate-fashion/anfrage/erfolg"
        element={<PlaceholderPage title="Danke!" note="Deine Anfrage ist bei uns eingegangen." />}
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
