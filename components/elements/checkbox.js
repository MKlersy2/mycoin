import check from '../../styles/checkbox.module.css';

export default function Checkbox(input) {
    const isRequired = input.attr.required
    const nameInput = input.attr.id
    return (
        (isRequired ? (<input type='checkbox' name={nameInput} id={nameInput} className={check.global} required/>) : (<input type='checkbox' name={nameInput} id={nameInput} className={check.global}/>))
    )
}