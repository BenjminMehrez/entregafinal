import { useCartContext } from "../../context/CartContext"

const CartCoutainer = () => {
    const { cartList, vaciarCarro, precioTotal } = useCartContext()
    return (
        <div>
            { cartList.map(product => (
                <li key={product.id}>
                    <img src={product.foto} alt="imagen" />
                    Nombre: {product.name} - Cantidad: {product.quantity}
                    <button> X </button>
                </li>
            ))}
            <h3>Precio Total: {precioTotal()}</h3>
            <button onClick={vaciarCarro}>Vaciar Carrito</button>
        </div>
    )
}

export default CartCoutainer