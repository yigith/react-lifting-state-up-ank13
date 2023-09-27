import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Butonum from '@/components/Butonum';
import { useState } from 'react';
import { Alert, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [num, setNum] = useState(0);
  const clicked = () => setNum(num + 1);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Lifting State up in React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`mt-3 ${styles.main} ${inter.className}`}>
        <Container>
          <h1>Lifting State Up</h1>
          <Butonum sayi={num} onClick={clicked} />
          <Butonum sayi={num} onClick={clicked} />
          <Butonum sayi={num} onClick={clicked} />
          <Butonum sayi={num} onClick={clicked} />
          <Butonum sayi={num} onClick={clicked} />

          <Alert variant='success' className='mt-3'>Bootstrap kullanımı başarılı</Alert>
          <div className='mt-3 alert alert-success'>Bootstrap kullanımı başarılı</div>
          <Button>
            <FontAwesomeIcon icon={faPlus} />
          </Button>

          <Alert className='mt-3' variant='info'>Bu bir bilgi kutusudur.</Alert>
        </Container>
      </main>
    </>
  );
}
