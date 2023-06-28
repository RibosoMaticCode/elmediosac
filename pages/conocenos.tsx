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
            Somos una empresa especializada en publicidad en la vía pública, con una trayectoria en la compra y venta de espacios publicitarios y campañas que han impactado la publicidad urbana.
            </p>
            <p className={styles.about_text}>
            Nuestra misión es llevar los mensajes de la marca a las audiciencias de la manera más eficiente y medible. Somos la solución más completa al contar con un portafolio de puntos estratégicos más variado y con la capacidad de adaptarlos a las necesidades de nuestros clientes.
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
              <li className="my-4"><Image  src="/images/dot.png" alt="Dot" width="20" height="20"/> Trujillo</li>             
              <li className="my-4"><Image  src="/images/dot.png" alt="Dot" width="20" height="20" /> Lima</li>
              <li className="my-4"><Image  src="/images/dot.png" alt="Dot" width="20" height="20" /> Piura</li>
              <li className="my-4"><Image  src="/images/dot.png" alt="Dot" width="20" height="20" /> Chiclayo</li>
              <li className="my-4"><Image  src="/images/dot.png" alt="Dot" width="20" height="20" /> Huaraz</li>
              <li className="my-4"><Image  src="/images/dot.png" alt="Dot" width="20" height="20" /> Chepén</li>
              <li className="my-4"><Image  src="/images/dot.png" alt="Dot" width="20" height="20" /> Tarapoto</li>
              <li className="my-4"><Image  src="/images/dot.png" alt="Dot" width="20" height="20" /> Chimbote</li>
              <li className="my-4"><Image  src="/images/dot.png" alt="Dot" width="20" height="20" /> Lambayeque</li>
              <li className="my-4"><Image  src="/images/dot.png" alt="Dot" width="20" height="20" /> Ferreñafe</li>
              <li className="my-4"><Image  src="/images/dot.png" alt="Dot" width="20" height="20" /> Jaén</li>
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
