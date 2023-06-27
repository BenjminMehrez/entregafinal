




const ItemDetail = ({product}) =>{

    const {} = useCartContext()

    const onAdd = (cantidad) => {
        console.log(cantidad)
    }

    return (
        <div className="row">
            <div className="col-6">
                <img src={product.foto} className="w-25" />
                <h3>Nombre: {product.name}</h3>
                <h4>Precio: {product.precio}</h4>
                <h4>Categoria: {product.categoria}</h4>
            </div>
            <div className="col-6">
                <ItemCount inital={1} stock={5} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default ItemDetail