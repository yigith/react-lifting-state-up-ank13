import { useState } from "react";
import styles from '@/styles/Butonum.module.css';

export default function Butonum() {
    const [sayi, setSayi] = useState(0);
    const handleClick = () => setSayi(sayi + 1);

    return (
        <button className={styles.Butonum} onClick={handleClick}>
            {sayi}
        </button>
    );
}