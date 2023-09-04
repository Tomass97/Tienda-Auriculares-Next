import Link from 'next/link'
import styles from '../styles/header.module.css'
import Image from 'next/image'


export default function Header() {
    return (
        <div className={styles.barra}>
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
                <Link href='/carrito'>
                    <Image src='/carrito.svg' width={35} height={30} alt='imagen carrito' />
                </Link>
            </nav>
            <header className={styles.header}>
                <div className='contenedor'>
                    <div className={styles.logo}>
                        <h1 className={styles.titulo}>TMS <span>AUDIO</span></h1>
                    </div>
                </div>
            </header>
            
            <section className={styles.info}>
                <div>
                    <ul>
                        Distribuidor oficial
                    </ul>
                    <ul>
                    Envío gratis a partir de 75€
                    </ul>
                    <ul>
                        Entrega en 24 horas
                    </ul>
                </div>
            </section>
        </div>
    )
}
