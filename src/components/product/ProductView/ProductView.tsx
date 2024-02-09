import Image from "next/image";
import { ProductViewItemsOrder } from "./ProductViewItemsOrder";
import styles from "./ProductView.module.sass";
import { SanitizeHTML } from "app/components/shared/SanitizeHTML";

interface ProductViewProps {
  product: ProductType;
}

export const ProductView = ({ product }: ProductViewProps) => {
  return (
    <main className={styles.ProductView}>
      <section className={styles.ProductView__images}>
        <Image
          loading="eager"
          src={product.image}
          width={500}
          height={500}
          quality={80}
          alt={product.name}
        />
      </section>
      <section className={styles.ProductView__info}>
        <h1 className={styles.ProductView__info__title}>{product.name}</h1>
        <p className={styles.ProductView__info__category}>{["super"]}</p>
        <SanitizeHTML tag="p" className={styles.ProductView__info__description}>
          {product.description}
        </SanitizeHTML>
        <span className={styles.ProductView__info__price}>
          $ {product.price}
        </span>
        <ProductViewItemsOrder maxQuantity={product.stock} product={product}/>
      </section>
    </main>
  );
};
