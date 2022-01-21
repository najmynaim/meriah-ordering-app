import styles from "../styles/Cart.module.css";
import Image from "next/image";

const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}> 
                    <tr className={styles.tr}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Product</th>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image src="/img/product.png" layout="fill" alt="" />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>PRODUCT NAME</span>
                        </td>
                        <td>
                            <span className={styles.extras}>
                                Double extra, extra stuffs
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>$19.90</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>$39.80</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTittle}>Subtotal:</b>$79.60
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTittle}>Discount:</b>$0.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTittle}>Total:</b>$79.60
                    </div>
                    <button className={styles.button}>CHECKOUT NOW!</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
