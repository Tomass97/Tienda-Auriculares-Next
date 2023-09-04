import Layout from "../components/layout"
import Casco from "../components/casco";
import styles from '../styles/inicio.module.css'

export async function getServerSideProps () {
  const resp = await fetch(`${process.env.URL_API}/cascos?populate=imagen`);
  const { data: cascos } = await resp.json();

  return {
    props: {
      cascos
    },
  }
}
export default function Tienda({cascos}) {

  return (
    <>
      <Layout
        title={'Tienda'}
        description={'Tienda virtual, Venta de auriculares de todas las gamas'}
      >
        <main className="contenedor">
          <h1 className="heading">Tienda</h1>

          <div className={styles.grid}>
          {cascos?.map(casco => (
            <Casco
              key={casco.id}
              casco={casco.attributes}
            />
          ))}
          </div>
        </main>
      </Layout>
    </>
  )
}