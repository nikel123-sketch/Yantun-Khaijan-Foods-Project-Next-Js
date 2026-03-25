"use client"
import { Cartcontex } from '@/contex/CartProvider';
import React, { useContext, useState } from 'react';

const Add2Cart = ({food}) => {
    
   const {Addtocart}=useContext(Cartcontex)
    const [click,setclick]=useState(false);

    const hendleadd2Cart=()=>{
        setclick(true)
        Addtocart(food)
    }

    return (
     
        <button
        disabled={click}
        onClick={hendleadd2Cart} className="flex-1 bg-green-500 text-white py-1.5 rounded-lg hover:bg-green-600 transition disabled:text-amber-50 disabled:bg-gray-600">
            {click?"Added":'Add to Cart'}
          
        </button>
      
    );
};

export default Add2Cart;