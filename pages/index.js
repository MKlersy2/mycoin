import Head from 'next/head'
import Image from 'next/image'
import homepage from '../styles/Homepage.module.css'
import styles from '../styles/Home.module.css'
import AppScroll from './script/appScroll.js'
import Casque from '../components/icon/casque'
import Timer from '../components/icon/timer'
import Money from '../components/icon/money'
import Person from '../components/icon/person'
import Footer from '../components/elements/footer'
import Header from '../components/elements/header'
import langText from './api/lang.json'
import { useRouter } from "next/router";
import Link from 'next/link'

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
        <title>CloverList.app</title>
        <meta name="description" content="CloverList.app is an app for building some coins with minimal fees " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={homepage.landing}>
          <Header langText={lang}></Header>
          <div className={homepage.landingText}>
            <div className={homepage.subLandingText}>
              <div>
                <h1 className={`${styles.bigTitle} ${homepage.title}`}>{lang.title} <span className={styles.underline}>{lang.titleImportant}</span></h1>
              </div>
              <div className={homepage.autoSizeChild}>
                <p className={homepage.desc}>{lang.desc}</p>
              </div>
              <Link passHref href={'/createToken/0'} locale={locale}>
                <div className={`${styles.wallet} ${homepage.wallet}`}>{lang.createButton}</div>
              </Link>
              <div className={homepage.icon} parallaxorig='true' parallaxbottom='true'>
                  <Image
                    src={'/icon/ethCoin.png'}
                    width={257}
                    height={259}
                    alt={'Image of ethereum coin 3d'}
                  />
              </div>
            </div>
          </div>
          <div className={homepage.forme}>
            <Image
              src={'/background/formHomepage.png'}
              layout={'fill'}
              alt={'Forme de fond homepage'}
              priority
            />
          </div>
        </div>
        <div className={homepage.global}>
          <div className={homepage.bullet}>
            <div className={homepage.subBullet}>
              <div className={homepage.bulletIcon}>
                <Timer/>
              </div>
              <div className={homepage.bulletTitle}>
                {lang.bullet[0].title}
              </div>
              <div className={homepage.bulletDesc}>
                {lang.bullet[0].desc}
              </div>
            </div>
            <div className={homepage.subBullet}>
              <div className={homepage.bulletIcon}>
                <Money/>
              </div>
              <div className={homepage.bulletTitle}>
                {lang.bullet[1].title}
              </div>
              <div className={homepage.bulletDesc}>
                {lang.bullet[1].desc}
              </div>
            </div>
            <div className={homepage.subBullet}>
              <div className={homepage.bulletIcon}>
                <Casque/>
              </div>
              <div className={homepage.bulletTitle}>
                {lang.bullet[2].title}
              </div>
              <div className={homepage.bulletDesc}>
                {lang.bullet[2].desc}
              </div>
            </div>
          </div>
          <div className={homepage.avis}>
            {lang.avis.map((elem, key) => (
              <div key={key} className={homepage.subAvis}>
                <div className={homepage.avisIcon}>
                  <div className={homepage.avisPerson}><Person/></div> <Image src="/icon/star.png" width={42} height={42} alt={'Petite étoile jaune'}/> 5/5
                </div>
                <div className={homepage.avisName}>
                  {elem.name}
                </div>
                <div className={homepage.avisDesc}>
                  {elem.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer langText={lang}></Footer>
        <AppScroll/>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>

  )
}
