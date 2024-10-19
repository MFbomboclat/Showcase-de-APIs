'use client';
import { useEffect, useState } from 'react';
import styles from './Card.module.css';

const DogImage = () => {
  const [dogImageUrl, setDogImageUrl] = useState('');
  const [error, setError] = useState('');

  const fetchDogImage = async () => {
    try {
      const res = await fetch('https://dog.ceo/api/breeds/image/random');
      if (!res.ok) throw new Error('Error en la respuesta de la API');
      const data = await res.json();
      setDogImageUrl(data.message);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div className={styles.card}>
      <h1>Imagen aleatoria de un perro</h1>
      {error && <p>{error}</p>}
      {dogImageUrl ? (
        <img src={dogImageUrl} alt="Un lindo perro" />
      ) : (
        <p>Cargando...</p>
      )}
      <button onClick={fetchDogImage}>
        Cambiar Perro
      </button>
    </div>
  );
};

export default DogImage;
