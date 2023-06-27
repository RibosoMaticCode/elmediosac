import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/main.module.css'
import Header from '@/pages/components/header/index'
import Footer from '@/pages/components/footer/index'
import FormSubmit from '@/pages/components/form/index'
import TitlePage from '@/pages/components/titlepage/index'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Contacto | El Medio - Agencia de Publicidad</title>
        <meta name="description" content="El Medio SAC, empresa de publicidad outdoor, indoor, btl." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <TitlePage title="Contáctanos" />
      <div className={`py-5`}>
        <div className="container-xl">
          <div className={`${styles.contact_frm} mx-auto px-5 py-4 rounded`}>
            <FormSubmit />
          </div>
        </div>
      </div>
      <div className="container-xl py-5">
        <div className="row">
            <div className="col-md-6">
              <Image  src="/images/contact.jpg" className={`${styles.contact_image} img-fluid mb-4`} alt="contacto" width="400" height="536" />
            </div>
            <div className="col-md-6">
              <ul className={styles.contact_links}>
                  <li className="my-3 py-2">
                    <Image  src="/images/icon_phoneb.png" alt="icon" width="32" height="32" /> <a href="#">986 835 416</a>
                  </li>
                  <li className="my-3 py-2">
                    <Image  src="/images/icon_mailb.png" alt="icon" width="32" height="32" /> <a href="#">contactomedio@elmediosac.com</a>
                  </li>
                  <li className="my-3 py-2">
                    <Image  src="/images/icon_markb.png" alt="icon" width="32" height="32"/>  <a href="#">Mz. B Lt. 17 Urb. Las Flores <br />
                      Víctor Larco Herrera - Trujillo</a>
                  </li>
              </ul>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
