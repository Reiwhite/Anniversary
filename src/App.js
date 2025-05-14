import logo from './200w.gif';
import './App.css';

function App() {
  return (
    <div className="App" style={styles.app}>
      {/* ✅ เพลงเบา ๆ autoplay */}
      <audio src="/love.mp3" autoPlay loop />

      {/* ❤️ หัวใจลอย */}
      <div className="floating-hearts">
        {Array.from({ length: 20 }).map((_, index) => (
          <div className="heart" key={index} />
        ))}
      </div>

      <header className="App-header" style={styles.header}>
        <img src={logo} className="App-logo" alt="logo" style={styles.logo} />
        <h1 style={styles.title}>Happy Anniversary 💖</h1>
        <div className="container mt-5 mb-4" style={styles.cardContainer}>
          <div className="card border-0 shadow-sm" style={styles.card}>
            <div className="card-body text-center">
              <h5 className="card-text" style={styles.cardText}>
                สุขสันต์วันครบรอบนะ 2 เดือนแล้วเค้ามีความสุขมากๆ<br />
                อาจจะมีบางครั้งที่เราไม่เข้าใจกัน หรือ ทะเลาะกันบ่อยๆ<br />
                รักเธอมากๆเลยนะ💗
              </h5>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

const styles = {
  app: {
    minHeight: '100vh',
    backgroundImage: `linear-gradient(to bottom right, #ffe6f0, #ffffff)`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px',
    overflow: 'hidden',
    position: 'relative',
  },
  header: {
    textAlign: 'center',
    zIndex: 2,
  },
  logo: {
    width: '120px',
    marginBottom: '20px',
  },
  title: {
    color: '#d63384',
    fontFamily: "'Segoe UI', cursive",
    fontSize: '2.5rem',
    marginBottom: '30px',
  },
  cardContainer: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    borderRadius: '20px',
    padding: '20px',
  },
  cardText: {
    fontSize: '1.2rem',
    color: '#333',
    lineHeight: '1.8',
    fontFamily: "'Kanit', sans-serif",
  },
};

export default App;
