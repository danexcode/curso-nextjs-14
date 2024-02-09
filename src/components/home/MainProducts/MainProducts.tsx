import Image from "next/image";
import { ProductsService } from "app/services/myCommerce/products";
import styles from "./MainProducts.module.sass";

export const MainProducts = async () => {
  const service = new ProductsService();
  const products = await service.find();

  return (
    <section className={styles.MainProducts}>
      <h3>✨ New products released!</h3>
      <div className={styles.MainProducts__grid}>
        {products?.map((product: ProductType) => {
          const imageSrc = product.image;
          return (
            <article key={product.id}>
              <p>{product.name}</p>
              <Image src={imageSrc} fill alt={product.name} loading="eager" />
            </article>
          );
        })}
      </div>
    </section>
  );
};
