import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Beras Basah</h1>
      <img src="src/assets/beras-basah-edit.jpg" alt="Gambar Beras Basah" />
      <p>Pulau Beras Basah adalah sebuah pulau kecil yang terletak di Selat Makassar dan kira-kira 10 kilometer (6,2 mil) sebelah timur pantai Kalimantan . Secara administratif pulau ini berada di bawah pemerintahan Kota Bontang dan Provinsi Kalimantan Timur . Pulau ini dikenal sebagai tujuan wisata sebagai tempat menyelam yang menyajikan kehidupan bawah laut tropis </p>
    </>
  )
}

export default App
