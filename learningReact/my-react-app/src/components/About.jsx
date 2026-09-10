import React from 'react'

const About = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '4rem 1.5rem',
        background: 'linear-gradient(135deg, #eef2ff 0%, #fdf2f8 100%)',
        color: '#1f2937',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <main
        style={{
          maxWidth: '760px',
          margin: '0 auto',
          padding: '3rem',
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 18px 45px rgba(79, 70, 229, 0.14)',
        }}
      >
        <p
          style={{
            margin: '0 0 0.75rem',
            color: '#6366f1',
            fontWeight: '700',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontSize: '0.8rem',
          }}
        >
          Welcome
        </p>
        <h1 style={{ margin: '0 0 1.25rem', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#111827' }}>
          About This Space
        </h1>
        <p style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
          A curious corner of the internet where ideas, experiments, and random
          bits of creativity come together.
        </p>
        <p style={{ lineHeight: 1.8, color: '#4b5563' }}>
          This page is a living notebook for learning, building, and sharing
          small discoveries. From trying new React concepts to exploring
          design ideas, every project is an opportunity to make something
          useful and a little more delightful.
        </p>
        <section
          style={{
            marginTop: '2rem',
            padding: '1.25rem 1.5rem',
            borderLeft: '4px solid #8b5cf6',
            backgroundColor: '#f5f3ff',
            borderRadius: '0 12px 12px 0',
          }}
        >
          <strong style={{ color: '#5b21b6' }}>Fun fact:</strong>{' '}
          Octopuses have three hearts, blue blood, and remarkable problem-solving
          skills.
        </section>
      </main>
    </div>
  )
}

export default About