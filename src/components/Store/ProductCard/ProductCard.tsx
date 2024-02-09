import Image from "next/image";
import Link from "next/link";
import styles from './ProductCard.module.sass'

interface ProductCardInterface {
  product: ProductType
}

export const ProductCard = ({ product }: ProductCardInterface) => {
  return (
    <Link href={`/product/detail?id=${product.id}`} className={styles.ProductCard__link}>
      <article className={styles.ProductCard}>
        <Image
          src={product.image}
          alt={product.name}
          quality={80}
          height={320}
          width={320}
          loading="eager"
        />
        <div className={styles.ProductCard__info}>
          <h3>{product.name}</h3>
        </div>
        <span className={styles.ProductCard__priceTag}>${product.price} USD</span>
      </article>
    </Link>
  );
};
