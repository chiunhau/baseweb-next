import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Button } from 'baseui/button';
import ChevronRight from 'baseui/icon/chevron-right';
import Checkbox from '../components/Checkbox';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button
        onClick={() => alert('click')}
        endEnhancer={() => <ChevronRight size={24} />}
      >
        Get started
      </Button>
      <Checkbox />
    </div>
  );
}
