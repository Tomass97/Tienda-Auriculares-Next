import { useEffect, useState } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito'))?? [] : []
  const [carrito, setCarrito] = useState(carritoLS)
  const [paginaHidratada, setPaginaHidratada] = useState(false)

  useEffect(() => {
    setPaginaHidratada(true)
  },[])

  useEffect(() => {
    localStorage.setItem('carrito',JSON.stringify(carrito))
  }, [carrito])


  const agregarCarrito = casco => {
    if (carrito.some(cascoState => cascoState.id === casco.id)) {
      const carritoActualizado = carrito.map(cascoState => {
        if (cascoState.id === casco.id) {
          cascoState.cantidad = casco.cantidad;
        }
        return cascoState;
      });
      setCarrito([...carritoActualizado]);
      localStorage.setItem('carrito', JSON.stringify(carrito));
    } else {
      setCarrito([...carrito, casco]);
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }
  }

  const eliminarProducto = id => {
    const carritoActualizado = carrito.filter(producto => producto.id != id)
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  const actualizarCantidad = casco => {
    const carritoActualizado = carrito.map(cascoState => {
      if (cascoState.id === casco.id) {
        cascoState.cantidad = parseInt(casco.cantidad)
      }
      return cascoState
    })
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify(carrito));
  }
  return  paginaHidratada ? <Component {...pageProps}
    carrito={carrito}
    agregarCarrito={agregarCarrito}
    eliminarProducto={eliminarProducto}
    actualizarCantidad={actualizarCantidad}
  /> : null
}

export default MyApp
