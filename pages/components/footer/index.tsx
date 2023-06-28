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
                                <Image src="/images/icon_phone.png" alt="icon"  width="24" height="24" /> <a href="tel:51986835416">986 835 416</a>
                            </li>
                            <li className="py-1">
                            <Image src="/images/icon_mail.png" alt="icon"  width="24" height="24" /> <a href="mailto:karenbenites@elmediosac.com">karenbenites@elmediosac.com</a>
                            </li>
                            <li className="py-1">
                            <Image src="/images/icon_mark.png" alt="icon"  width="24" height="24" />  <a target="_blank" href="https://www.google.com/maps/place/Las+Flores,+V%C3%ADctor+Larco+Herrera/@-8.1283322,-79.0463331,18z/data=!3m1!4b1!4m6!3m5!1s0x91ad3d126139fe45:0x840120a8f435f07e!8m2!3d-8.1279035!4d-79.0454369!16s%2Fg%2F1jkytj4lw?entry=ttu">Mz. B Lt. 17 Urb. Las Flores <br />
                                Víctor Larco Herrera - Trujillo</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <div className="py-3">
            <p className="text-center">&#169; Copyright 2023</p>
        </div>
        </>
    )
}