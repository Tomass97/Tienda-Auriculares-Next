import Layout from "../components/layout"
import Casco from "../components/casco";
import styles from '../styles/inicio.module.css'
import Image from "next/image";

export default function Home({ cascos, primerosTresResultados }) {

  return (
    <>
      <Layout
        title={'Inicio'}
        description={'Venta de auriculares de todas las gamas'}
      >
        <main className="contenedor">

          <h1 className="heading">Los más vendidos</h1>
          <div className={styles.grid_masvendido}>
            {primerosTresResultados?.map(casco => (
              <Casco
                key={casco.id}
                casco={casco.attributes}
              />
            ))}
          </div>

          <h1 className="heading">Nuestros productos</h1>
          <div className={styles.grid}>
            {cascos?.map(casco => (
              <Casco
                key={casco.id}
                casco={casco.attributes}
              />
            ))}
          </div>
          <div className={styles.info}>
            <section>
             <div>
             <h2>¿Por qué confiar en TMS AUDIO?</h2>
              <p>
                
                Somos verdaderos fanáticos de los auriculares y los equipos de sonido. Probamos todo lo que sale, lo analizamos y elegimos solo lo mejor.

                Nuestro objetivo es que cada compra en TMS AUDIO sea un éxito. Consúltanos.
              </p>
             </div>


              <div>
              <p>
                  <span>2 años de garantía</span>
                  <p>
                    Todos nuestros productos nuevos tienen 2 años de garantía ante cualquier defecto de fabricación.
                  </p>
                </p>

                <p>
                  <span>Envío Gratis 24h</span>
                  <p>
                    Todos los pedidos de más de 75€ a península, España y Portugal tienen portes gratis. Y la mayoría se entregan en 24h laborables.
                  </p>
                </p>

                <p>
                  <span> Satisfacción garantizada</span>
                  <p>
                    Tienes 14 días para decidir si estás totalmente satisfecho con tu compra o nos la devuelves. Así de fácil.
                  </p>
                </p>

                <p>
                  <span>100% Originales</span>
                  <p>
                    Garantizamos que todo lo que vendemos es 100% original y procede del fabricante o del distribuidor autorizado en España.
                  </p>
                </p>
              </div>
            </section>
          </div>
          <section className={styles.lista}>
                <div>
                    <ul>
                        Pago seguro Visa, MasterCard, Paypal, transferencia e incluso Bizum.
                        <div>
                        <Image src='/mastercard.svg' alt="paypal img" width={40} height={10} />
                        <Image src='/paypal.svg' alt="paypal img" width={40} height={10} />
                        <Image src='/visa.svg' alt="paypal img" width={40} height={10} />
                        </div>
                    </ul>
                    <ul>
                        Recogida en tienda
                        Puedes recoger tu pedido en nuestra tienda si lo prefieres.
                        <div>
                        <Image src='/tienda.svg' alt="paypal img" width={40} height={10} />
                        </div>
                    </ul>
                    <ul>
                        Financiación
                        Puedes pagar tus compras a plazos.
                        <div>
                        <Image src='/financiar.svg' alt="paypal img" width={40} height={10} />
                        </div>
                    </ul>
                </div>
            </section>
        </main>

      </Layout>
    </>
  )
}

export async function getStaticProps() {


  const urlCascos = `${process.env.URL_API}/cascos?populate=imagen`
  const respCascos = await fetch(urlCascos)
  const { data: cascos } = await respCascos.json()

  const primerosTresResultados = cascos.slice(7,11);


  return {
    props: {
      cascos,
      primerosTresResultados
    }
  }
}
