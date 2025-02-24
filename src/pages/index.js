import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="layline.io Documentation" description="Master event data processing with layline.io">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Master Event Data Processing with layline.io</h1>
          <p>
            Explore the documentation for a low-code platform that powers real-time and batch event processing.
          </p>
          <div className="hero-buttons">
            <Link className="button button--primary button--lg" to="/docs/quickstart/quickstart-overview">
              Get Started
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/concept">
              Learn the Concepts
            </Link>
          </div>
        </div>
      </header>
      <section className="value-prop">
        <h2>Why layline.io?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Fast & Scalable</h3>
            <p>Handle massive event data with real-time speed and elastic scalability.</p>
          </div>
          <div className="feature-card">
            <h3>Configurable</h3>
            <p>Build workflows via UI or Javascript or Python — no heavy coding required.</p>
          </div>
          <div className="feature-card">
            <h3>Connected</h3>
            <p>Seamlessly integrate with any data source or sink.</p>
          </div>
        </div>
      </section>
      <section className="quick-nav">
        <h2>Where to Begin?</h2>
        <div className="nav-grid">
          <Link to="/docs/quickstart/quickstart-overview" className="nav-tile">
            <h3>Quickstart</h3>
            <p>Set up in minutes.</p>
          </Link>
          <Link to="/docs/concept" className="nav-tile">
            <h3>Concepts</h3>
            <p>Grasp workflows and clusters.</p>
          </Link>
          <Link to="/docs/assets" className="nav-tile">
            <h3>Assets</h3>
            <p>Configure sources and sinks.</p>
          </Link>
          <Link to="mailto:support@layline.io" className="nav-tile">
            <h3>Support</h3>
            <p>Need help? Contact us!</p>
          </Link>
        </div>
      </section>
      <section className="testimonial">
        <h2>Real-World Impact</h2>
        <blockquote>
          <p>
            "layline.io replaced our legacy system with a scalable, cloud-native solution, slashing resources by 75%."
          </p>
          <footer>— freenet, Europe’s largest MVNO</footer>
        </blockquote>
        <Link className="button button--outline" to="https://layline.io">
          See How It Works
        </Link>
      </section>
    </Layout>
  );
}