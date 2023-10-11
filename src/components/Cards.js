import React from 'react'
import Card from './Card';
import image1 from "../assets/Practica1.jpg"
import image2 from "../assets/Fondo.jpg.jpg"
import image3 from "../assets/Practica1.jpg"

const cards = [
{
  id: 1,
  title: 'Administrador',
  image: image1,
  instructor: "Arely Rodriguez Galicia"
},
{
  id: 2, 
  title: 'Administrador',
  image: image2,
  instructor: "Adrea Heredia Hernandez"  
},
{
  id: 3,
  title: 'Administrador',
  image: image3,
  instructor: "Oscar Portillo"
}
]


export default function Cards() {
  console.log ()
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className='row'>
        {
          cards.map(c =>(
            <div className="col-md-4" key={cards.id}>
              <Card
              key = {c.id}
              id = {c.id}
              title = {c.title}
              image = {c.image}
              instructor = {c.instructor}
              />
            </div>
          ))
        }
      </div>
    </div>  
  )
  
}