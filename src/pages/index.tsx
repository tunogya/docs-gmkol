import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {useEffect} from "react";

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  // 重定向到 /docs
  useEffect(() => {
    window.location.href = "https://gmkol.com";
  }, []);

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="">
    </Layout>
  );
}
