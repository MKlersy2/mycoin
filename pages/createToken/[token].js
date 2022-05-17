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
import Valid from '../../components/icon/valid'
import SliderCheck from '../../components/elements/sliderCheck'
import slider from '../../styles/slider.module.css';
import Checkbox from '../../components/elements/checkbox'
import Input from '../../components/elements/input'

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
            <title>CloverList</title>
            <meta name="description" content="CloverList is an app for building some coins with minimal fees " />
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
                              <div className={`${styles.button} ` + (key == reference ? (create.active) : '') + ` ` + (elem.blockchain == 'Solana' ? (create.unselectable) : '')}>{(key == reference ? (<Valid/>) : '')} {elem.blockchain}</div>
                            </Link>
                        ))}
                    </div>
                    <div className={create.form}>
                      <form className={create.formGlobal}>
                        <table className={create.row}>
                          <thead>
                            <tr>
                              <th></th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {lang.createToken[0].blockchains[reference].inputs.filter(input => input.type == 'input').map((input, key) => (
                              <tr key={key} className={create.subRow}>
                                <td>
                                  <label htmlFor={input.id}>{input.name}</label>
                                </td>
                                <td className={create.td}>
                                  <Input info={input}/>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </form>
                      <div className={create.settings}>
                      {lang.createToken[0].blockchains[reference].inputs.filter(input => input.type == 'checkbox').map((input, key) => (
                        <div key={key} className={create.checkbox}>
                          <div className={create.labelCheck}>
                            <label htmlFor={input.id}>{input.name}</label>
                            <div className={create.subLabel}>{input.detail}</div>
                          </div>
                          <Checkbox attr={input}/>
                        </div>
                      ))}
                      </div>
                      <div className={slider.settings}>
                        <SliderCheck></SliderCheck>
                        <div>{lang.createToken[0].settings}</div>
                      </div>
                      <div className={slider.form}>
                        <label htmlFor={lang.createToken[0].advanced[0].id}>{lang.createToken[0].advanced[0].name}</label>
                        <Input info={lang.createToken[0].advanced[0]}/>
                      </div>
                      <div className={`${styles.button} ${create.button} ${create.unselectable}`} id={'createToken'}>{lang.createToken[0].button}</div>
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