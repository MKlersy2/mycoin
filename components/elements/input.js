import styles from '../../styles/Home.module.css'
import create from '../../styles/create.module.css'

export default function Input(attr) {
    const input = attr.info;
    return (
        (input.required ? (<input id={input.id} name={input.id} className={`${styles.input} ${create.input}`} type={input.dataType} placeholder={`${input.placeholder}`} required/>) : (<input id={input.id} name={input.id} className={`${styles.input} ${create.input}`} type="text" placeholder={`${input.placeholder}`}/>))
    )
}