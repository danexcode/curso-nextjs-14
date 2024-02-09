import Link from "next/link"
import { ChatLink } from "app/components/Store/ChatLink"
import { CategoryService } from "app/services/myCommerce/categories"
import styles from './StoreLayout.module.sass'

export default async function Layout({ children }: { children: React.ReactNode }) {
  const service = new CategoryService();
  const collections = await service.find();

  return (
    <main className={styles.StoreLayout}>
      <h1>Explore</h1>
      <nav>
        <ul className={styles.StoreLayout__list}>
          {
            collections?.map((collection: CollectionType) => (
              <Link key={collection.id} href={'/store/' + collection.name} className={styles.StoreLayout__chip}>
                {collection.name}
              </Link>
            ))
          }
        </ul>
        <ChatLink />
      </nav>
      {children}
    </main>
  )
}