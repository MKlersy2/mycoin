import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AppScroll from './script/appScroll.js'
import Footer from '../components/elements/footer'
import Header from '../components/elements/header'
import langText from './api/lang.json'
import { useRouter } from "next/router";
import contact from '../styles/contact.module.css'
import Link from 'next/link'
import FondContact from '../components/img/FondContact'

export default function Home() {
  const { locale } = useRouter();
  var lang = langText[0][locale][0];
  if(locale === undefined) {
    lang = langText[0].en[0];
  } else {
    if(locale === 'en') {
      lang = langText[0].en[0];
    } else if(locale === 'fr') {
      lang = langText[0].fr[0];
    }
  }
  return (
    <div className={styles.container}>
        <Head>
            <title>MyCoin.app</title>
            <meta name="description" content="MyCoin.app is an app for building some coins with minimal fees " />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <div className={contact.general}>
                <Header langText={lang}></Header>
                <div className={contact.global}>
                    <div className={`${styles.title} ${contact.title}`}>
                        <h1>{lang.contact[0].title}</h1>
                    </div>
                    <div className={contact.form}>
                        <input placeholder={lang.contact[0].inputName} className={styles.input}/>
                        <input placeholder={lang.contact[0].inputEmail} className={styles.input}/>
                        <input placeholder={lang.contact[0].inputSubject} className={styles.input}/>
                        <textarea className={`${styles.input} ${contact.textArea}`} placeholder={lang.contact[0].inputComment}></textarea>
                        <div className={`${styles.button} ${contact.button}`}>{lang.contact[0].button}</div>
                    </div>
                </div>
                <div className={contact.fond}>
                    <FondContact/>
                    <div className={contact.chat}>
                        <Image src={'/icon/chatBubble.png'} width={267} height={267} alt={'Bulle de chat'}/>
                    </div>
                </div>
            </div>
            <Footer langText={lang}></Footer>
            <AppScroll/>
        </main>
    </div>
  )
}