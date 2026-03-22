"use client"
import React, { useState } from 'react';

const Add2Cart = () => {
    const [click,setclick]=useState(false);
    const hendleadd2Cart=()=>{
        setclick(true)
    }

    return (
     
        <button
        disabled={click}
        onClick={hendleadd2Cart} className="flex-1 bg-green-500 text-white py-1.5 rounded-lg hover:bg-green-600 transition disabled:text-amber-50 disabled:bg-amber-900">
            {click?"Added":'Add to Cart'}
          
        </button>
      
    );
};

export default Add2Cart;