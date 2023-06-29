import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Titulo from "../Titulo/Titulo"
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore'
import ItemList from '../ItemList/ItemList';

const ItemLContainer = () => {
  const [productos, setProductos] = useState([])
  const [producto, setProducto] = useState({})
  const { categoria } = useParams()
  const { cid } = useParams

  useEffect(() => {
    const db = getFirestore()
    const queryColletion = collection(db, 'productos')


    getDocs(queryColletion)
      .then(resp => setProductos(resp.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
      .catch(err => console.log(err))

  }, [])


  return (

    <div>
      <Titulo
        titulo="Sómos Adibas no Adidas"
      ></Titulo>
      <ItemList
        productos = {productos}
      ></ItemList>

    </div>
  )
}


export default ItemLContainer