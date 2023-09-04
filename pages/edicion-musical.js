import React from 'react'
import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../styles/edicion.module.css'

export default function Edicion() {
  return (
    <Layout
      title='Edición'
      description='Edición y producción músical'
    >

      <main>
        <h1 className="heading">Servicios de grabación, edición y producción músical</h1>
        <div>
          <section>
            <p>
              En TMS AUDIO también ofrecemos una amplia variedad de servicios, que comprenden todas las facetas del proceso de creación de un disco. Además, tendrás la posibilidad de disponer de un estudio de grabación con distintas salas que ofrecen a su vez distintos tipos de producción musical. Te ofrecemos la posibilidad de disponer de un productor musical, podrás grabar tu disco, realizar una masterización en el estudio o masterización online, hacer remixes de tus canciones, etc… Somos sin duda el estudio más completo de Madrid.
            </p>
            <div className={`${styles.banner}`}></div>
            <div className={styles.contenido}>
              <div>
                <h2>PRODUCCIÓN MUSICAL</h2>
                <p>
                  Desde cualquiera de los tres estudios te ofrecemos un laboratorio de creación para poder desarrollar tus proyectos como se merecen, adaptándonos a tus necesidades. Ayudado en todo momento, por un equipo humano muy cualificado que hará más fácil tu viaje.
                </p>
              </div>
              <div>
                <h2>GRABACIÓN</h2>
                <p>
                Desarrollamos nuevas formas de grabar discos aprovechando las nuevas tecnologías y posibilidades de nuestro tiempo. Desde la combinación de grabaciones en home-studios, con las realizadas en nuestras salas, siempre con las mejores técnicas de captación de sonido.                </p>
              </div>
              <div>
                <h2>MEZCLA</h2>
                <p>
                Nuestras mezclas suele ser en analógico, aprovechando así, la riqueza tímbrica que aportan estos equipos. La mejor manera de comprobar la calidad de las mezclas que surgen de nuestro estudio es escuchar algunos de los resultados de los artistas que han confiado en nosotros.                </p>
              </div>
              <div>
                <h2>MASTERING</h2>
                <p>
                En 1997, nuestro ingeniero Guillermo Quero empezó a realizar sus primeros procesos de mastering. Desde entonces, han pasado una gran cantidad de discos por sus manos. Toda esa experiencia la ponemos ahora a tu servicio para poder optimizar el sonido de tu proyecto.
                </p>
              </div>
              <div>
                <h2>MASTERIZACION ONLINE Y MEZCLA</h2>
                <p>
                Te ofrecemos la opción de realizar online estos servicios sin que tengas que moverte de tu casa. Además, disfrutarás de una reducción del precio, por utilizar los huecos libres del planning del estudio. Siempre, garantizando el mismo cuidado y dedicación que si estuvieras presente.                </p>
              </div>
              <div>
                <h2>REMIXES</h2>
                <p>
                Contamos con mucha experiencia en este servicio. Esta práctica, es muy usada para promocionar y difundir las canciones de un disco con otro enfoque. El ``re-visitar`` una canción con otros arreglos permite a los artistas conectar con público de diferentes gustos musicales y abrir mercado.                </p>
              </div>
              
            </div>
          </section>
        </div>
      </main>
    </Layout>
  )
}
