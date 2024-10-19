'use client';
import { useEffect, useState } from 'react';
import styles from './Card.module.css';

const CatImage = () => {
  const [catImageUrl, setCatImageUrl] = useState('');
  const [error, setError] = useState('');

  const fetchCatImage = async () => {
    try {
      const response = await fetch(`https://cataas.com/cat?${Date.now()}`);
      if (!response.ok) throw new Error('Error en la respuesta de la API');

      setCatImageUrl(response.url);
    } catch (error) {
      console.error('Error fetching cat image:', error);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <div className={styles.card}>
      <h1>Imagen aleatoria de un gato</h1>
      {error && <p>{error}</p>}
      {catImageUrl ? (
        <img src={catImageUrl} alt="Un lindo gato" />
      ) : (
        <p>Cargando...</p>
      )}
      <button onClick={fetchCatImage}>
        Cambiar Gato
      </button>
    </div>
  );
};

export default CatImage;
