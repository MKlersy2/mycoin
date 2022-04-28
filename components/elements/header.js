import styles from '../../styles/Home.module.css'
import header from '../../styles/Header.module.css'
import Twitter from '../icon/twitter'
import Discord from '../icon/discord'
import Gitbook from '../icon/gitbook'
import Arrow from '../icon/arrow'
import { useRouter } from "next/router";
import Link from 'next/link'

export default function Header(langGlobal) {
    const { locale, locales, asPath } = useRouter();
    const langText = langGlobal.langText;
    return (
        <header>
            <div className={header.global}>
            <div className={header.leftBar}>
                <Link passHref href={'/'} locale={locale}><div className={`${header.buttonLeft} ` + (asPath == '/' ? (header.buttonActive) : '')}>{langText.indexButton}</div></Link>
                <Link passHref href={'/createToken/0'} locale={locale}><div className={`${header.buttonLeft} ` + (asPath.includes('/createToken/') ? (header.buttonActive) : '')}>{langText.createButton}</div></Link>
                {/* <Link passHref href={'/about'} locale={locale}><div className={`${header.buttonLeft} ` + (asPath == '/about' ? (header.buttonActive) : '')}>{langText.aboutButton}</div></Link> */}
                <Link passHref href={'/contact'} locale={locale}><div className={`${header.buttonLeft} ` + (asPath == '/contact' ? (header.buttonActive) : '')}>{langText.contactButton}</div></Link>
            </div>
            <div className={header.logo}></div>
            <div className={`${header.rightBar} ${header.wallet}`}>
                <div className={header.lang}>
                    <div>{locale} <Arrow/></div>
                    <div className={header.langChoice}>
                        {locales.map((elem, key) => (
                            <Link passHref href={asPath} key={key} locale={elem}><div className={(locale == elem ? (header.active) : '')} key={key}>{elem}</div></Link>
                        ))}
                    </div>
                </div>
                <div className={`${styles.wallet} `}>{langText.walletConnect}</div>
            </div>
            </div>
            <div className={header.media}>
            <div className={styles.pressEffect}><Twitter/></div>
            <div className={styles.pressEffect}><Discord/></div>
            <div className={styles.pressEffect}><Gitbook/></div>
            </div>
        </header>

    )
}