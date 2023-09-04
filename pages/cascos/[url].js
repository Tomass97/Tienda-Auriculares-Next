import { useState } from "react";
import Image from "next/image"
import styles from '../../styles/cascos.module.css'
import Layout from "../../components/layout";

export async function getServerSideProps({ query: { url } }) {
  const resp = await fetch(`${process.env.URL_API}/cascos?filters[url]=${url}&populate=imagen`);
  const { data } = await resp.json()

  return {
    props: {
      data
    }
  }
}

export default function Casco({data, agregarCarrito}) {

  const [cantidad, setCantidad] = useState(0)

  const { nombre, descripcion, imagen, precio } = data[0].attributes

  const handleSubmit = e => {
    e.preventDefault()
    if (cantidad < 1) {
      console.log('cantidad no valida');
      return
    }

    const cascoSeleccionado = {
      id: data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }

    agregarCarrito(cascoSeleccionado)
  }

  return (
    <Layout
      title={`${nombre}`}
    >
      <div className={styles.casco}>
        <Image src={imagen.data.attributes.formats.medium.url} alt={`Imagen ${nombre}`}
          width={600} height={400} />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>{precio}€</p>

          <form
            onSubmit={handleSubmit}
            className={styles.formulario}
          >
            <label htmlFor="cantidad">Cantidad</label>

            <select onChange={e => setCantidad(Number(e.target.value))} id="cantidad">
              <option value="0"> -- Número de artículos --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input
              type="submit"
              value='Agregar al carrito' />
          </form>
        </div>
      </div>
    </Layout>
  )
}
