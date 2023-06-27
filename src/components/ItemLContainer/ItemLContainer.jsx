import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Titulo from "../Titulo/Titulo"
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore'

const ItemLContainer = () => {
      const [productos, setProductos] = useState([])
      const [producto, setProducto] = useState({})
      const {categoria} = useParams()
      const {cid} = useParams

  return (
    
    <div>
        <Titulo
        titulo="Sómos Adibas no Adidas"
        ></Titulo>

  </div>
  )
}

// useEffect (()=>{
//   const db = getFirestore()
//   const quiryCollection = collection(db, 'productos')

//   getDocs(quiryCollection)
//     .then(resp => setProductos( resp.docs.map(producto=>({ id: producto.id, ...producto.data()}))))
//     .catch(err => console.log(err))
//     .finally(()=> setIsLoading(false))
// }, [])



export default ItemLContainer