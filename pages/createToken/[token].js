import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import AppScroll from '../script/appScroll.js'
import Footer from '../../components/elements/footer'
import Header from '../../components/elements/header'
import langText from '../api/lang.json'
import { useRouter } from "next/router";
import create from '../../styles/create.module.css'
import Link from 'next/link'
import AppScript from '../script/appCreate.js'


export default function Home({reference}) {
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
            <div>
                <Header langText={lang}></Header>
                <div className={create.global}>
                    <div className={styles.title}>
                        <h1>{lang.createToken[0].title}</h1><Image src="/icon/bigStar.png" alt={'Etoiles jaune'} width={96} height={96}/>
                    </div>
                    <div className={create.blockchains}>
                        {lang.createToken[0].blockchains.map((elem, key) => (
                            <Link passHref key={key} href={`/createToken/${key}`} locale={locale}>
                              <div className={`${styles.button} ` + (key == reference ? (create.active) : '')}>{elem.blockchain}</div>
                            </Link>
                        ))}
                    </div>
                    <div className={create.form}>
                        <table className={create.row}>
                          <thead>
                            <tr>
                              <th></th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {lang.createToken[0].blockchains[reference].inputs.map((input, key) => (
                              <tr key={key} className={create.subRow}>
                                <td>
                                  <label htmlFor="name">{input.name}</label>
                                </td>
                                <td className={create.td}>
                                  <input id={input.name} name={input.name} className={`${styles.input} ${create.input}`} type="text" placeholder={`${input.placeholder}`}/>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <div className={`${styles.button} ${create.button}`} id={'createToken'}>{lang.createToken[0].button}</div>
                    </div>
                </div>
            </div>
            <Footer langText={lang}></Footer>
            <AppScroll/>
            <AppScript/>
        </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { token } = context.query
  const reference = token;
  return{props:{reference}}
}