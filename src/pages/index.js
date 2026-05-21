import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "layline.io",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Linux, Docker, Kubernetes, Windows, macOS",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "A low-code platform for real-time and batch event data processing. Build scalable workflows with 50+ pre-built connectors.",
  "url": "https://layline.io",
  "featureList": [
    "Real-time event processing",
    "Batch data pipelines",
    "50+ pre-built connectors",
    "JavaScript and Python scripting",
    "Visual workflow designer",
    "Cluster deployment and monitoring"
  ]
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "layline.io GmbH",
  "url": "https://layline.io",
  "logo": "https://doc.layline.io/img/logo/logo_name_for_light_background.svg",
  "sameAs": [
    "https://layline.io"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "layline.io Documentation",
  "url": "https://doc.layline.io",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://doc.layline.io/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function Home() {
  return (
    <Layout title="layline.io Documentation | Event Data Processing Platform" description="Master event data processing with layline.io — a low-code platform for real-time and batch data pipelines. Build scalable workflows with 50+ connectors.">
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(softwareApplicationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      </Head>
      <header className="hero-section">
        <div className="hero-content">
          <h1>Get Started with layline.io</h1>
          <p>
            A low-code platform for real-time and batch event data processing.
            Build scalable workflows in minutes — no heavy coding required.
          </p>
          <div className="hero-buttons">
            <Link className="button button--primary button--lg" to="/docs/quickstart/quickstart-overview">
              Quickstart
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/concept">
              Concepts
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
            <h3>Low-Code</h3>
            <p>Build workflows via UI and JavaScript/Python — no heavy coding required.</p>
          </div>
          <div className="feature-card">
            <h3>Connected</h3>
            <p>Seamlessly integrate with any data source or sink.</p>
          </div>
        </div>
      </section>

      <section className="quick-nav">
        <h2>Choose Your Path</h2>
        <div className="nav-grid">
          <Link to="/docs/quickstart/quickstart-overview" className="nav-tile">
            <h3>🚀 New to layline.io?</h3>
            <p>Start here: Install and run your first pipeline in minutes.</p>
          </Link>
          <Link to="/docs/quickstart/install-local" className="nav-tile">
            <h3>💻 Local Installation</h3>
            <p>Install layline.io on your local machine.</p>
          </Link>
          <Link to="/docs/quickstart/install-docker" className="nav-tile">
            <h3>🐳 Docker Deployment</h3>
            <p>Run layline.io using Docker.</p>
          </Link>
          <Link to="/docs/concept" className="nav-tile">
            <h3>📚 Core Concepts</h3>
            <p>Learn about workflows, clusters, and assets.</p>
          </Link>
        </div>
      </section>

      <section className="testimonial">
        <h2>Real-World Impact</h2>
        <blockquote>
          <p>
            "layline.io replaced our legacy system with a scalable, cloud-native solution, slashing resources by 75%."
          </p>
          <footer>— freenet, Europe's largest MVNO</footer>
        </blockquote>
        <Link className="button button--outline" to="https://layline.io">
          See How It Works
        </Link>
      </section>
    </Layout>
  );
}
