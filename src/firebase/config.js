
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC0k63O8R37whiqn9z0X9QaMDlOMJJVqXE",
  authDomain: "entregareactbenja.firebaseapp.com",
  projectId: "entregareactbenja",
  storageBucket: "entregareactbenja.appspot.com",
  messagingSenderId: "315217587380",
  appId: "1:315217587380:web:0c5c09507765006aa8fbe1"
};


const app = initializeApp(firebaseConfig);

export const initFirebase = () => app

// const cards = [  
//   {
//     id: 1,
//     categoria: "zapatillas",
//     foto: "https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
//     nombre:
//       "Adibas GrisMMZ",
//     descripcion:
//       "Super deportivas y comodas",
//     precio: 300,
//   },
//   {
//     id: 2,
//     categoria: "zapatillas",
//     foto: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
//     nombre: "Adibas Classic",
//     descripcion:
//       "Clasicas de Adibas",
//     precio: 150,
//   },
//   {
//     id: 3,
//     categoria: "zapatillas",
//     foto: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80",
//     nombre: "Adibas Blancas",
//     descripcion:
//       "Adibas Blancas super facheras",
//     precio: 200,
//   },
//   {
//     id: 4,
//     categoria: "zapatillas",
//     foto: "https://images.unsplash.com/photo-1605812860427-4024433a70fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
//     nombre:
//       "Adibas Boots",
//     descripcion:
//       "Adibas ideales para Campo",
//     precio: 350,
//   },
//   {
//     id: 5,
//     categoria: "remeras",
//     foto: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
//     nombre: "Remera Adibas Azul",
//     descripcion:
//       "Remera Azul",
//     precio: 90,
//   },
//   {
//     id: 6,
//     categoria: "remeras",
//     foto: "https://images.unsplash.com/photo-1564859227552-81fde4a1df0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
//     nombre: "Adibas Remera Classic",
//     descripcion:
//       "Remera clasica",
//     precio: 110,
//   },
//   {
//     id: 7,
//     categoria: "camperas",
//     foto: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
//     nombre:
//       "Campera Adibas",
//     descripcion:
//       "Campera de cuero Adibas",
//     precio: 500,
//   },

// ];

// const cards = [
//   {
//     id: 1,
//     categoria: "zapatillas",
//     foto: "https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
//     nombre:
//       "Adibas GrisMMZ",
//     descripcion:
//       "Super deportivas y comodas",
//     precio: 300,
//   },
//   {
//     id: 2,
//     categoria: "zapatillas",
//     foto: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
//     nombre: "Adibas Classic",
//     descripcion:
//       "Clasicas de Adibas",
//     precio: 150,
//   },
//   {
//     id: 3,
//     categoria: "zapatillas",
//     foto: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80",
//     nombre: "Adibas Blancas",
//     descripcion:
//       "Adibas Blancas super facheras",
//     precio: 200,
//   },
//   {
//     id: 4,
//     categoria: "zapatillas",
//     foto: "https://images.unsplash.com/photo-1605812860427-4024433a70fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
//     nombre:
//       "Adibas Boots",
//     descripcion:
//       "Adibas ideales para Campo",
//     precio: 350,
//   },
//   {
//     id: 5,
//     categoria: "remeras",
//     foto: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
//     nombre: "Remera Adibas Azul",
//     descripcion:
//       "Remera Azul",
//     precio: 90,
//   },
//   {
//     id: 6,
//     categoria: "remeras",
//     foto: "https://images.unsplash.com/photo-1564859227552-81fde4a1df0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
//     nombre: "Adibas Remera Classic",
//     descripcion:
//       "Remera clasica",
//     precio: 110,
//   },
//   {
//     id: 7,
//     categoria: "camperas",
//     foto: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
//     nombre:
//       "Campera Adibas",
//     descripcion:
//       "Campera de cuero Adibas",
//     precio: 500,
//   },
// ];