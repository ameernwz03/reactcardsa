import React from 'react'
import Cards from './cards' 
import 'bootstrap/dist/css/bootstrap.min.css'

function Herosec() {
  const prods = [
    {
      imgURL: "https://talhareviews.store/cdn/shop/files/Shadow_6d488f56-d559-4f64-ab64-0964eb29d145.jpg?v=1706559116&width=360",
      name: "Card 1",
      Desc: "Description for card 1"
    },
    {
      imgURL: "https://talhareviews.store/cdn/shop/files/moto_edge_plus_for_cat.jpg?v=1710850584&width=360",
      name: "Card 2",
      Desc: "Description for card 2"
    },
    {
      imgURL: "https://talhareviews.store/cdn/shop/files/orange_5e126649-4a20-4b50-8f72-83c9137c4ca1.jpg?v=1724423995&width=360",
      name: "Card 3",
      Desc: "Description for card 3"
    },
    {
        imgURL: "https://talhareviews.store/cdn/shop/files/x100_copy_c17cd24d-ef9d-456e-a795-ee57d806293c.jpg?v=1723889998&width=360",
        name: "Card 4",
        Desc: "Description for card 4"
      },
      {
        imgURL: "https://talhareviews.store/cdn/shop/files/White_656a9f1a-ce09-4a3e-a094-3e3b7cec0270.jpg?v=1708457064&width=360",
        name: "Card 5",
        Desc: "Description for card 5"
      }
      
  ];

  return (
    <div className='d-flex'>
      {
      prods.map((card) => (
        <Cards key={card.name} imgURL={card.imgURL} name={card.name} Desc={card.Desc} />
      ))
      }
    </div>
  );


}

export default Herosec