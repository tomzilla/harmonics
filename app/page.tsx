export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: '100vh',
      padding: 'var(--space-6)',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
        <h1 className="display" style={{ marginBottom: 'var(--space-6)' }}>
          Harmonics<sup style={{ fontSize: '0.5em', verticalAlign: 'super' }}>24</sup>
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
      </div>
      <footer style={{
        color: 'var(--color-steel)',
        fontSize: 'var(--text-small)',
        paddingBottom: 'var(--space-12)',
        textAlign: 'center',
      }}>
        &copy; {new Date().getFullYear()} Harmonics24
      </footer>
    </main>
  );
}
