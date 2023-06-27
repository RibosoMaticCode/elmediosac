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
        <title>Paneles | El Medio - Agencia de Publicidad</title>
        <meta name="description" content="El Medio SAC, empresa de publicidad outdoor, indoor, btl." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <TitlePage title="Paneles" />
      <div className="container-xl py-5">
        <div className="row">
            <div className="col-md-6 mb-4">
                <div className={styles.panel_card}>
                    <Image  src="/images/slide1.jpg" alt="panel" width="430" height="200"/>
                    <h2 className="text-center py-2 mb-0">Trujillo</h2>
                </div>
            </div>
            <div className="col-md-6 mb-4">
                <div className={styles.panel_card}>
                    <Image  src="/images/slide1.jpg" alt="panel" width="430" height="200"/>
                    <h2 className="text-center py-2 mb-0">Chimbote</h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 mb-4">
                <div className={styles.panel_card}>
                    <Image  src="/images/slide1.jpg" alt="panel" width="430" height="200"/>
                    <h2 className="text-center py-2 mb-0">Chiclayo</h2>
                </div>
            </div>
            <div className="col-md-6 mb-4">
                <div className={styles.panel_card}>
                    <Image  src="/images/slide1.jpg" alt="panel" width="430" height="200"/>
                    <h2 className="text-center py-2 mb-0">Trujillo</h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 mb-4">
                <div className={styles.panel_card}>
                    <Image  src="/images/slide1.jpg" alt="panel" width="430" height="200"/>
                    <h2 className="text-center py-2 mb-0">Lima</h2>
                </div>
            </div>
            <div className="col-md-6 mb-4">
                <div className={styles.panel_card}>
                    <Image  src="/images/slide1.jpg" alt="panel" width="430" height="200" />
                    <h2 className="text-center py-2 mb-0">Virú</h2>
                </div>
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
