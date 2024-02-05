interface CategoryProps {
    params: {
        categories: string[],
        searchParams?: object
    }
}

export default function Category(props: CategoryProps) {
    const { categories } = props.params
    console.log(props);
    return (
        <h1>Categoria dinamica: {categories}</h1>
    )
}