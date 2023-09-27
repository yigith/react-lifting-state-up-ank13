import styles from '@/styles/Butonum.module.css';

export default function Butonum(props) {

    return (
        <button onClick={props.onClick} className={styles.Butonum} >
            {props.sayi}
        </button>
    );
}