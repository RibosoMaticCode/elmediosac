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
        <title>Nuestros Clientes | El Medio - Agencia de Publicidad</title>
        <meta name="description" content="El Medio SAC, empresa de publicidad outdoor, indoor, btl." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <TitlePage title="Nuestros clientes" />
      <div className="container-xl py-5">
        {/* cliente */}
        <div className="d-flex align-items-center justify-content-center mb-4">
          <div className={styles.customer_coverimg}>
            <Image  src="/images/customer1.jpg" className={`${styles.customer_img} mx-auto`} alt="Cliente" width="200" height="150" />
          </div>
          <div className={`${styles.customer_desc} flex-grow-1`}>
            <p>
              Cliente: <strong>Universidad César Vallejo</strong>
            </p>
            <p>
              Presencia de campañas de publicidad en ciudades como Trujillo, Chiclayo, Chimbote, Lima, Virú, entre otros.
            </p>
          </div> 
        </div>
        <Image  src="/images/line.png" className={`${styles.line_max} mx-auto d-block`} alt="linea separadora" width="684" height="18" />
        {/* cliente */}
        <div className="d-flex align-items-center justify-content-center my-4">
          <div className={styles.customer_coverimg}>
            <Image  src="/images/customer2.jpg" className={`${styles.customer_img} mx-auto`} alt="Cliente" width="200" height="150"/>
          </div>
          <div className={`${styles.customer_desc} flex-grow-1`}>
            <p>
              Cliente: <strong>Universidad Señor de Sipán</strong>
            </p>
            <p>
            Presencia de campañas de publicidad en ciudades como Chiclayo, Chepén, entre otros.
            </p>
          </div>
        </div>
        <Image  src="/images/line.png" className={`${styles.line_max} mx-auto d-block`} alt="linea separadora" width="684" height="18" />
        {/* cliente */}
        <div className="d-flex align-items-center justify-content-center my-4">
          <div className={styles.customer_coverimg}>
            <Image  src="/images/customer3.jpg" className={`${styles.customer_img} mx-auto`} alt="Cliente" width="200" height="150" />
          </div>
          <div className={`${styles.customer_desc} flex-grow-1`}>
            <p>
              Cliente: <strong>Academia U. Cesar Vallejo</strong>
            </p>
            <p>
              Presencia de campañas de publicidad en la ciudad de Trujillo.
            </p>
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
