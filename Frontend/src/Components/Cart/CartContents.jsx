import React from 'react'
import { RiDeleteBin3Line } from "react-icons/ri";

const CartContents = () => {
    const cartproducts =[
        {
            id:1,
            name:"Shirt",
            price:15,
            size:"M",
            color:"White",
            quantity:"1",
            img:"https://picsum.photos/200?random=1"
       },
        {
            id:2,
            name:"T-Shirt",
            price:10,
            size:"M",
            color:"Black",
            quantity:"10",
            img:"https://picsum.photos/200?random=2"

       }
]
  return (
    <div>
        {cartproducts.map((prod,index)=>{
            return <div key={index} className='flex items-start justify-between py-4 border-b '>
                <div className='flex items-start '>
                    <img src={prod.img} alt={prod.name}
                     className='w-20 h-24 object-cover mr-4 rounded'/>
                    <div>
                        <h3>{prod.name}</h3>
                        <p>Size:{prod.size} | Color:{prod.color}</p>    
                        <div className='flex items-center mt-2'>
                            <button className='border bg-gray-100 px-2 py-2 '>-</button>
                            <span className='p-3'>{prod.quantity}</span>
                            <button className='border bg-gray-100 px-2 py-2'>+</button>       
                        </div>                  
                    </div>
                </div>
                <div>
                    <p className='font-medium'>${prod.price.toLocaleString()}</p>
                    <button className='h-6 w-6 mt-2 text-red-600'><RiDeleteBin3Line/></button>
                </div>
            </div>
        })}
    </div>
  )
}

export default CartContents
