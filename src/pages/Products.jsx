import { ProductCard } from "../components/ProductCard"

export function Products({cart, setCart}){

    const protein = {title:"Protein Powder", desc: "Whey protein", price: 40}
    const creatine = {title:"Creatine Powder", desc: "Monohydrate creatine", price: 20}
    const massGainer = {title:"Mass Gainer", desc: "ON Gainer", price: 50}

    const products = [protein, creatine, massGainer]

    return(
        <>
            {products.map((product) => {
                return(
                    <ProductCard product={product} cart={cart} setCart={setCart}/>
                )
            })}
        </>
    )
}