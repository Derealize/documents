import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import Hero from "../components/Hero";

export default function Home() {
  const {
    siteConfig: { title, tagline },
  } = useDocusaurusContext();

  return (
    <Layout title={title + " | " + tagline} description={tagline}>
      <Hero />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
