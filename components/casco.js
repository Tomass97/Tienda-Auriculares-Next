import Image from "next/image"
import Link from "next/link"
import styles from '../styles/cascos.module.css'

export default function Casco({ casco }) {
  const { nombre, descripcion, imagen, precio, url } = casco

  return (
    <>
      <div className={styles.casco}>
        <Image src={imagen.data.attributes.formats.medium.url} alt={`Imagen ${nombre}`}
          width={600} height={400} />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>{precio}€</p>
          <Link className={styles.enlace} href={`/cascos/${url}`}>
            Ver Producto
          </Link>
        </div>
      </div>
    </>

  )
}
