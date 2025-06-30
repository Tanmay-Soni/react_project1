export function Cart({cart, setCart}){
    
    function handleEvent(item){
        setCart(cart.filter((product) => product.title != item.title))
    }

    return(
        <>
            {cart.map((item) => {
                return (
                    <>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button onClick={() => handleEvent(item)}>Remove from Cart</button>
                    </>
                )
            })}
        </>
    )
}