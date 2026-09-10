const Home = () => {
  return (
    <div style={{ minHeight: '100vh', padding: '4rem 2rem', background: 'linear-gradient(135deg, #eef2ff, #fdf2f8)', fontFamily: 'Arial, sans-serif', color: '#1f2937' }}>
      <main style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ color: '#7c3aed', fontWeight: 'bold', letterSpacing: '2px' }}>WELCOME HOME</p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', margin: '1rem 0', lineHeight: 1.05 }}>
          Make today a little more <span style={{ color: '#ec4899' }}>wonderful.</span>
        </h1>
        <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.15rem', lineHeight: 1.7 }}>
          A cheerful corner of the internet for fresh ideas, small wins, and unexpected inspiration.
        </p>
        <button style={{ border: 0, borderRadius: '999px', padding: '1rem 2rem', background: '#7c3aed', color: 'white', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 10px 25px rgba(124, 58, 237, .25)' }}>
          Explore something new ✨
        </button>
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginTop: '4rem' }}>
          {['Dream big', 'Stay curious', 'Enjoy the journey'].map((item, index) => (
            <article key={item} style={{ padding: '1.5rem', borderRadius: '1rem', background: 'rgba(255, 255, 255, .7)', boxShadow: '0 8px 20px rgba(31, 41, 55, .08)' }}>
              <div style={{ fontSize: '2rem' }}>{['🌈', '🚀', '🌱'][index]}</div>
              <h2 style={{ fontSize: '1.1rem', marginBottom: 0 }}>{item}</h2>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}

export default Home