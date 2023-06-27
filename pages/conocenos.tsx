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
        <title>Conócenos | El Medio - Agencia de Publicidad</title>
        <meta name="description" content="El Medio SAC, empresa de publicidad outdoor, indoor, btl." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <TitlePage title="Conócenos" />
      <div className="container-xl">
        <div className="row py-5">
          <div className="col-md-6">
            <Image src="/images/nosotros.jpg" className={`${styles.about_image} img-fluid mb-4`} alt="Nosotros" width="200" height="200" />
          </div>
          <div className="col-md-6">
            <p className={styles.about_text}>
            Somos una empresa de publicidad especializada en servicios que otorgan valor de marca, principalmente, a través de Publicidad Outdoor (Exterior). La empresa se ha diversificado con dos unidades de negocio, la primera con Publicidad Indoor (interior) para puntos de venta y Publicidad Below the line (BTL), para segmentos específicos del mercado donde se aplica comunicación no masiva, ni tradicional.
            </p>
          </div>
        </div>
      </div>
      <div className="container-xl">
        <div className="row mb-5">
          <p className={`${styles.super_subtitle} text-center`}>Contamos con más de</p>
          <p className={`${styles.super_title} text-center`}>150 paneles</p>
          <p className={`${styles.super_subtitle} text-center`}>en todo el País, en ciudades como:</p>
        </div>
      </div>
      <div className="container-xl">
        <div className="row py-5">
          <div className="col-md-7">
            <Image  src="/images/peru_map.jpg" className={`${styles.about_map} img-fluid mb-4`} alt="Mapa Peru" width="200" height="200" />
          </div>
          <div className="col-md-5">
            <ul className={styles.about_cities}>
              <li className="my-4 py-2"><Image  src="/images/dot.png" alt="Dot" width="20" height="20"/> Trujillo</li>
              <li className="my-4 py-2"><Image  src="/images/dot.png" alt="Dot" width="20" height="20" /> Virú</li>
              <li className="my-4 py-2"><Image  src="/images/dot.png" alt="Dot" width="20" height="20" /> Lima</li>
              <li className="my-4 py-2"><Image  src="/images/dot.png" alt="Dot" width="20" height="20" /> Chiclayo</li>
              <li className="my-4 py-2"><Image  src="/images/dot.png" alt="Dot" width="20" height="20" /> Chimbote</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`${styles.back_form} py-5`}>
        <div className="container-xl">
          <div className={`${styles.form_comtainer} mx-auto`}>
            <FormSubmit />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
