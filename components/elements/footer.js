import Link from 'next/link';
import footer from '../../styles/footer.module.css'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router';

export default function Footer(langGlobal) {
    const { locale } = useRouter();
    const langText = langGlobal.langText;
    return (
        <div className={footer.global}>
            <div className={footer.subGlobal}>
                <div className={footer.subGlobalLeft}>
                    <div className={footer.col}>
                        <div className={footer.title}>{langText.footer[0].title}</div>
                        <Link href={langText.footer[0].titleLink} passHref locale={locale}><div className={footer.button}>{langText.footer[0].button1}</div></Link>
                        {/* <Link href={langText.footer[0].button1Link} passHref locale={locale}><div className={footer.button}>{langText.footer[0].button2}</div></Link>
                        <Link href={langText.footer[0].button2Link} passHref locale={locale}><div className={footer.button}>{langText.footer[0].button3}</div></Link> */}
                        <Link href={langText.footer[0].button3Link} passHref locale={locale}><div className={footer.button}>{langText.footer[0].button4}</div></Link>
                    </div>
                    <div className={footer.col}>
                        <div className={footer.title}>{langText.footer[1].title}</div>
                        <div className={footer.button}>{langText.footer[1].button1}</div>
                        <div className={footer.button}>{langText.footer[1].button2}</div>
                        <div className={footer.button}>{langText.footer[1].button3}</div>
                    </div>
                </div>
                <div className={footer.subGlobalRight}>
                    <div className={footer.col}>
                        <div className={footer.title}>{langText.footer[2].title}</div>
                        <div className={footer.desc}>{langText.footer[2].button1}</div>
                        <div className={footer.inputGlobal}>
                            <input className={styles.input} type="text" placeholder={langText.footer[2].placeholder}/>
                        </div>
                        <div className={`${styles.button}`}>{langText.footer[2].button2}</div>
                    </div>
                </div>
            </div>
        </div>
    )

}