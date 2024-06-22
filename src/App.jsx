import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import berasBasahImage from './assets/beras-basah-edit.jpg'; // import gambar dengan benar

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Beras Basah</h1>
      <img src={berasBasahImage} alt="Pulau Beras Basah" />
      <p>
        Pulau Beras Basah adalah sebuah pulau kecil yang terletak di Selat Makassar dan kira-kira 10 kilometer (6,2 mil) sebelah timur pantai Kalimantan. Secara administratif pulau ini berada di bawah pemerintahan Kota Bontang dan Provinsi Kalimantan Timur. Pulau ini dikenal sebagai tujuan wisata sebagai tempat menyelam yang menyajikan kehidupan bawah laut tropis.
      </p>
    </>
  );
}

export default App;
