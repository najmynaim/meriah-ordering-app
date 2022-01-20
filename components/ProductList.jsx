import styles from '../styles/ProductList.module.css';
import ProductCard from './ProductCard';


const ProductList = () => {
  return (
        <div className={styles.container}>
            <h1 className={styles.title}>The Best Product In Town</h1>
            <p className={styles.desc}>
                The best product you can every found in the multiverse. 
                You wont be dissapointed im sure, you'll see what the product is, even im not so sure what the product is. lol.
            </p>
            <div className={styles.wrapper}>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    )
};

export default ProductList;
