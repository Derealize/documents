import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import BrowserOnly from "@docusaurus/BrowserOnly";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Get Started
          </Link>
          <BrowserOnly>
            {() => {
              let filename = "";
              if (navigator.platform.startsWith("Win")) {
                filename = "Derealize.exe";
              } else if (navigator.platform.startsWith("Mac")) {
                filename = "Derealize.dmg";
              }
              if (!filename) return <></>;
              return (
                <a
                  className="button button--secondary button--lg ml-8"
                  href={`https://cdn.socode.pro/${filename}`}>
                  Download Editor
                </a>
              );
            }}
          </BrowserOnly>
          <BrowserOnly>
            {() => {
              let filename = "";
              if (navigator.platform.startsWith("Win")) {
                filename = "Derealize-with-runtime.exe";
              } else if (navigator.platform.startsWith("Mac")) {
                filename = "Derealize-with-runtime.dmg";
              }
              if (!filename) return <></>;
              return (
                <a
                  className="button button--secondary button--lg ml-8"
                  href={`https://cdn.socode.pro/${filename}`}>
                  Download Studio (with node runtime)
                </a>
              );
            }}
          </BrowserOnly>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {
    siteConfig: { title, tagline },
  } = useDocusaurusContext();
  return (
    <Layout title={title + " | " + tagline} description={tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
