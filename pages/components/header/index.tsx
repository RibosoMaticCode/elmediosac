import styles from '@/pages/components/header/header.module.css'
import handleMenu from '@/pages/components/header/menu';
import React, { useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Header(){
    useEffect(() => {
        handleMenu();
    }, []);

    const router = useRouter();

    return(
        <>
            <header className="container-xl">
                <div className="row my-5">
                    <div className="col-md-3">
                        <Link href='/' className="my-3 d-block">
                            <Image className={styles.logo_img} src="/images/logo.png" alt="Logo El Medio SAC" width="200" height="50" />
                        </Link>
                    </div>
                    <div className="col-md-9">
                        <ul className={styles.top_social_links}>
                            <li className="mx-1">
                                <Link href="https://www.facebook.com/elmediosac">
                                    <Image src="/images/icon_fb.png" alt="Facebook" width="20" height="20" />
                                </Link>
                            </li>
                            <li className="mx-1">
                                <Link href="https://www.instagram.com/elmediosac">
                                    <Image src="/images/icon_insta.png" alt="Instagram" width="20" height="20" /> 
                                </Link>             
                            </li>
                            <li className="mx-1">El Medio</li>
                        </ul>
                        <nav className={styles.menu}>
                            <ul id="menu_list" className={styles.menu_list}>
                                <li><Link className={router.asPath === "/" ? styles.selected : ''} href="/" data-target="inicio">Inicio</Link></li>
                                <li><Link className={router.asPath === "/conocenos" ? styles.selected : ''} href="/conocenos" data-target="conocenos">Nosotros</Link></li>
                                <li><Link className={router.asPath === "/nuestros-clientes" ? styles.selected : ''} href="/nuestros-clientes" data-target="nuestros-clientes">Nuestros clientes</Link></li>
                                <li><Link className={router.asPath === "/paneles" ? styles.selected : ''} href="/paneles" data-target="paneles">Paneles</Link></li>
                                <li><Link className={router.asPath === "/contacto" ? styles.selected : ''} href="/contacto" data-target="contacto">Contacto</Link></li>
                            </ul>
                            <select id="menu_select" className={styles.menu_select} defaultValue="">
                                <option value="" disabled>Menú</option>
                                <option value="inicio">Inicio</option>
                                <option value="conocenos">Nosotros</option>
                                <option value="nuestros-clientes">Nuestros Clientes</option>
                                <option value="paneles">Paneles</option>
                                <option value="contacto">Contacto</option>
                            </select>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}