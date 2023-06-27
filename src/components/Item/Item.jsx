import { memo } from "react" 
import { Link } from "react-router-dom"


const Item = memo ( ({producto}) => {
        return (
            <div className="d-flex container-fluid row">
                <img src="{producto.foto}" className="card-img-top" alt="imagen" />
                <div className="card-body">
                    <label>Nombre: {producto.name}</label>
                    <label>Precio: {producto.price}</label>
                </div>
                <div className="card-footer">
                    <Link to={ `/detail/${producto.id}` }>
                        <button className="btn btn-primary">Detalle</button>
                    </Link>
                </div>
            </div>
        )
    }
)

export default Item