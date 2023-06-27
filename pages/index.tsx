import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/main.module.css'
import Header from '@/pages/components/header/index'
import Footer from '@/pages/components/footer/index'
import Carousel from '@/pages/components/carousel/index'
import FormSubmit from '@/pages/components/form/index'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>El Medio - Agencia de Publicidad</title>
        <meta name="description" content="El Medio SAC, empresa de publicidad outdoor, indoor, btl." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Carousel />
      <div className="container-xl">
        <h2 className={`${styles.title} my-5`}>Conócenos</h2>
        <div className="row mb-5">
          <div className="col-md-6">
            <Image src="/images/logo_conocenos.png" alt="Logo Conocenos" className={`${styles.about_m_image} img-fluid mb-4  mx-auto d-block`} width="400" height="200" />
          </div>
          <div className="col-md-6">
            <p>Somos una empresa de publicidad especializada en servicios que otorgan valor de marca, principalmente, a través de Publicidad Outdoor (Exterior). La empresa se ha diversificado con dos unidades de negocio, la primera con Publicidad Indoor (interior) para puntos de venta y Publicidad Below the line (BTL), para segmentos específicos del mercado donde se aplica comunicación no masiva, ni tradicional.</p>
            <p className="text-end"><Link href="/conocenos">Ver más »</Link></p>
          </div>
        </div>
        <Image  src="/images/line.png" className="img-fluid mx-auto d-block" alt="linea separadora" width="684" height="18" />
      </div>
      <div className="container-xl">
        <h2 className={`${styles.title} my-5`}>Nuestros clientes nos respaldan</h2>
        <ul className={`${styles.customers} mb-5`}>
          <li>
            <Image  src="/images/cliente1.jpg" className="img-fluid" alt="Cliente" width="200" height="200" />
          </li>
          <li>
            <Image  src="/images/cliente2.jpg" className="img-fluid" alt="Cliente" width="200" height="200" />
          </li>
        </ul>
      </div>
      <div className={`${styles.bg_blue} my-5`}>
        <div className="container-xl py-5">
          <p className={`${styles.legend} text-center my-5`}>Contamos con más de <strong>150 paneles</strong><br /> de publicidad en todos los lugares<br /> de nuestro País.</p>    
        </div>
      </div>
      <div className="container-xl">
        <ul className={`${styles.customers} mb-5`}>
          <li className="p-2">
            <Image src="/images/17.jpg" className="img-fluid my-2" alt="Cliente" width="200" height="200" />
          </li>
          <li className="p-2">
            <Image src="/images/18.jpg" className="img-fluid my-2" alt="Cliente" width="200" height="200" />
          </li>
          <li className="p-2">
            <Image src="/images/19.jpg" className="img-fluid my-2" alt="Cliente" width="200" height="200" />
          </li>
        </ul>
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
