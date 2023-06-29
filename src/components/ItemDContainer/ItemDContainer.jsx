
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDContainer = () => {
  const [productos, setProductos] = useState([])
  const [producto, setProducto] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const { categoria } = useParams()
  const { cid } = useParams

  
  useEffect(() => {
  const db = getFirestore()
  const queryDoc = doc(db, 'productos', '5gl2Sb0283dnInVlO5nr')


  getDoc(queryDoc)
    .then(resp => setProducto({ id: resp.id, ...resp.data() } ))
}, [])
  
  
  
  return (


    <ItemDetail producto={producto}  ></ItemDetail>

  )
}

export default ItemDContainer