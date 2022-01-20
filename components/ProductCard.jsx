import Image from "next/image";
import styles from "../styles/ProductCard.module.css";

const ProductCard = () => {
  return (
        <div className={styles.container}>
            <Image src="/img/product.png" alt="" width="500" height="500"/>
            <h1 className={styles.title}>FIORI DI ZUCCA</h1>
            <span className={styles.price}>$19.90</span>
            <p className={styles.desc}>
                Product yang pasti akan memeriahkan hubungan anda
            </p>
        </div>
  );
};

export default ProductCard;
