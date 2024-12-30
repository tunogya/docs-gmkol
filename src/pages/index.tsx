import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {useEffect} from "react";

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  // 重定向到 /docs
  useEffect(() => {
    window.location.href = "/docs/intro";
  }, []);

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="">
    </Layout>
  );
}
