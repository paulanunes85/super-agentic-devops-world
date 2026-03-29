import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

import styles from './404.module.css';

export default function NotFound(): ReactNode {
  const imgSrc = useBaseUrl('/img/docs/404.png');

  return (
    <Layout title="Game Over — Page Not Found">
      <div className={styles.container}>
        <div className={styles.screen}>
          <div className={styles.scanlines} />

          <h1 className={styles.gameOver}>GAME OVER</h1>

          <img
            src={imgSrc}
            alt="AI Agent lost — Page not found"
            className={styles.image}
            loading="eager"
          />

          <p className={styles.errorCode}>ERROR 404</p>
          <p className={styles.message}>
            The page you're looking for fell into a bottomless pit.
          </p>

          <Link className={styles.continueBtn} to="/docs/intro">
            CONTINUE?
          </Link>

          <p className={styles.hint}>
            Press START to return to World 1-1
          </p>
        </div>
      </div>
    </Layout>
  );
}
