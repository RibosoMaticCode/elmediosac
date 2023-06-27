import styles from '@/pages/components/footer/footer.module.css'
import Image from 'next/image'

export default function Footer(){
    return (
        <>
        <footer className={`${styles.footer} py-5`}>
            <div className="container-xl">
                <div className="row">
                    <div className="col-md-6">
                        <Image className={`${styles.footer_image} mx-auto`} src="/images/logo_white.png" alt="Logo El Medio SAC" width="200" height="80" />
                    </div>
                    <div className="col-md-6">
                        <ul className={styles.footer_social_links}>
                            <li className="py-1">
                                <Image src="/images/icon_phone.png" alt="icon"  width="24" height="24" /> <a href="#">986 835 416</a>
                            </li>
                            <li className="py-1">
                            <Image src="/images/icon_mail.png" alt="icon"  width="24" height="24" /> <a href="#">contactomedio@elmediosac.com</a>
                            </li>
                            <li className="py-1">
                            <Image src="/images/icon_mark.png" alt="icon"  width="24" height="24" />  <a href="#">Mz. B Lt. 17 Urb. Las Flores <br />
                                Víctor Larco Herrera - Trujillo</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}