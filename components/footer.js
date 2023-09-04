import Link from "next/link"
import styles from '../styles/footer.module.css'

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={`contenedor ${styles.contenido}`}>
                    <nav className={styles.navegacion}>
                        <Link href='/'>
                            Inicio
                        </Link>

                        <Link href='/nosotros'>
                            Nosotros
                        </Link>

                        <Link href='/tienda'>
                            Tienda
                        </Link>
                        <Link href='/edicion-musical'>
                            Edición músical
                        </Link>
                    </nav>

                    <div className={styles.year}>
                        TMS AUDIO {new Date().getFullYear()}
                    </div>
                </div>
            </footer>
        </>
    )
}
