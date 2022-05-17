import styles from '../../styles/Home.module.css'
import header from '../../styles/Header.module.css'
import Twitter from '../icon/twitter'
import Discord from '../icon/discord'
import Gitbook from '../icon/gitbook'
import Arrow from '../icon/arrow'
import { useRouter } from "next/router";
import Link from 'next/link'
import Image from 'next/image'
import Green from '../logo/green'
import Mix from '../logo/mix'
import Bleu from '../logo/bleu'

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
            <div className={header.logo}><Bleu/></div>
            <div className={`${header.rightBar} ${header.wallet}`}>
                <div className={header.lang}>
                    <div>{locale} <Arrow/></div>
                    <div className={header.langChoice}>
                        {locales.map((elem, key) => (
                            <Link passHref href={asPath} key={key} locale={elem}><div className={(locale == elem ? (header.active) : '')} key={key}>{elem}</div></Link>
                        ))}
                    </div>
                </div>
                <div className={`${styles.wallet}`} walletconnect="true"><Image alt={'Logo metamask'} src={'/icon/metamask.png'} width={25} height={25}/>{langText.walletConnect}</div>
            </div>
            </div>
            <div className={header.media}>
                <div className={`${styles.pressEffect} ${styles.unselectable}`}><Twitter/></div>
                <div className={styles.pressEffect}><Link href={'https://discord.gg/dWapPhqa'} passHref><a target={'_blank'}><Discord/></a></Link></div>
                <div className={`${styles.pressEffect} ${styles.unselectable}`}><Gitbook/></div>
            </div>
        </header>

    )
}