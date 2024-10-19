'use client';
import { useEffect, useState } from 'react';
import styles from './Card.module.css';

const FoxImage = () => {
  const [foxImageUrl, setFoxImageUrl] = useState('');
  const [error, setError] = useState('');

  const fetchFoxImage = async () => {
    try {
      const response = await fetch('https://randomfox.ca/floof/');
      if (!response.ok) throw new Error('Error en la respuesta de la API');

      const data = await response.json();
      setFoxImageUrl(data.image);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchFoxImage();
  }, []);

  return (
    <div className={styles.card}>
      <h1>Imagen aleatoria de un zorro</h1>
      {error && <p>{error}</p>}
      {foxImageUrl ? (
        <img src={foxImageUrl} alt="Un lindo zorro" />
      ) : (
        <p>Cargando...</p>
      )}
      <button onClick={fetchFoxImage}>
        Cambiar Zorro
      </button>
    </div>
  );
};

export default FoxImage;
