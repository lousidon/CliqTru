import './App.css'

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">CliqTru</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <main className="hero">
        <h1>Welcome to <span className="brand">CliqTru</span></h1>
        <p>Your foundation is ready. Tell us what to build next.</p>
      </main>
    </div>
  )
}
