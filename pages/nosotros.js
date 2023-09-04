import Layout from "../components/layout"
import Image from "next/image"
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description={'Sobre nosotros'}
    >
      <main className="contenido">
        <h1 className="heading">Sobre nosotros</h1>

        <div className={styles.contenido}>
            <Image alt="imagen nosotros" src='/nosotros.jpg' width={1000} height={800}/>
          <div>
            <p>
              TMS AUDIO nació mucho antes de que Internet se convirtiera en una realidad cotidiana...
            </p>
            <p>
              La primera tienda se abrió en 1991. Su creación respondía al modesto objetivo de suministrar material a los alumnos de la escuela y satisfacer la incipiente demanda de productos de tecnología musical, un concepto que en aquellos tiempos resultaba cuando menos extraño. Aquella fue una de las primeras tiendas de Europa dedicadas exclusivamente a lo que entonces se denominaba “informática musical”.
            </p>
            <p>
            En 2010, la tienda online de TMS AUDIO sufrió un importante cambio y se actualizó. Afronta los retos de una nueva era en el comercio electrónico.
            Hoy en día nuestra clientela está compuesta por un amplio espectro de usuarios que van desde el músico o el productor profesional hasta el joven DJ principiante, pasando por el propietario de un pequeño home-studio o el usuario más clásico en busca de lo último en composición y edición de partituras. Las tiendas TMS AUDIO ofrecen una equilibrada combinación de productos de tecnología musical.
            </p>
            <p>
            ¡Gracias por confiar en nosotros!
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
