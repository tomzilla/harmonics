export default function Home() {
  return (
    <main style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
    }}>
      <div style={{ maxWidth: 'var(--container-narrow)', textAlign: 'center' }}>
        <h1 className="display" style={{ marginBottom: 'var(--space-6)' }}>
          Harmonics Industries
        </h1>
        <p className="text-gradient" style={{
          fontSize: 'var(--text-h2)',
          fontWeight: 'var(--weight-medium)',
          background: 'var(--gradient-harmonic)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Solving human scale problems
        </p>
        <footer style={{
          marginTop: 'var(--space-12)',
          color: 'var(--color-steel)',
          fontSize: 'var(--text-small)',
        }}>
          &copy; {new Date().getFullYear()} Harmonics Industries
        </footer>
      </div>
    </main>
  );
}
