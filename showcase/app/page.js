import Head from 'next/head';
import DogImage from './apis/DogImage';
import AnimalImage from './apis/FoxImage';
import CatImage from './apis/CatImage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Random Images API</title>
        <meta name="description" content="Muestra de la API de animales" />
      </Head>
      <main>
        <h1 style={{ textAlign: 'center' }}>Página dedicada a mostrar imágenes random sobre animales</h1>
        <div className="card-container">
          <DogImage />
          <AnimalImage />
          <CatImage />
        </div>
      </main>
    </div>
  );
}
