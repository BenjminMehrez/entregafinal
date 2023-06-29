let productos = [
    { id: '1' ,categoria: 'zapatillas', name: 'Adibas GrisMMZ', price: 300, foto:'https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80' },
    { id: '2' ,categoria: 'zapatillas', name: 'Adibas Classic', price: 150, foto:'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80' },
    { id: '3' ,categoria: 'zapatillas', name: 'Adibas Blancas', price: 200, foto:'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80' },
    { id: '4' ,categoria: 'zapatillas', name: 'Adibas Boots', price: 350, foto:'https://images.unsplash.com/photo-1605812860427-4024433a70fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' },
    { id: '5' ,categoria: 'remeras', name: 'Remera Adibas Azul', price: 90, foto:'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' },
    { id: '6' ,categoria: 'remeras', name: 'Adibas Remera Classic', price: 110, foto:'https://images.unsplash.com/photo-1564859227552-81fde4a1df0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80' },
    { id: '7' ,categoria: 'camperas', name: 'Campera Adibas', price: 300, foto:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80' }
]

export let mockFetch = (id) =>{
    return new Promise( (resolve, reject)=>{
        setTimeout(()=>{
            resolve(id ? productos.find(prod => prod.id === id) : productos )
        }, 1000)
    })

}
