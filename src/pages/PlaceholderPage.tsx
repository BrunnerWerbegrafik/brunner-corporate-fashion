type Props = {
  title: string;
  note?: string;
};

export default function PlaceholderPage({ title, note }: Props) {
  return (
    <main className="cf-container cf-section">
      <h2>{title}</h2>
      <p className="cf-paragraph-large">
        {note ?? 'Coming Soon — wird in Stufe 2 gebaut.'}
      </p>
    </main>
  );
}
