import React, {useEffect, useState} from 'react'
import useFetch from "../Api/useFetch.jsx"
import { Link } from 'react-router-dom';

const URL2 = 'https://dummyjson.com/products/'

const Products = () => {
  const { data, pending, error } = useFetch(URL2);
  console.log(data);

  return <>
    <main className="h-[80px] flex flex-col justify-start items-center w-full max-w-[1440px] mx-auto">
      <h1 className="w-[100%] py-8 px-8 text-4xl">
        Products
      </h1>
      {
        pending?<div>Loading...</div>:null
      }
      {
        error?<div>{error.message}</div>:null
      }
        <div className="grid grid-cols-3 gap-4 w-full max-w-[1440px] mx-auto py-8 px-8 max-lg:grid-cols-2 max-sm:grid-cols-1 ">
          {
            data&&data.products.map((item) => {
              return <>
                <Link key={item.id} to={`/product/${item.id}`}>
                  <div className="card bg-base-100 shadow-xl w-[100%]">
                    <figure>
                      <img src={item.images[0]} alt="Shoes" className='w-[100%] h-[300px] object-cover object-center'/>
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        {item.title}
                      </h2>
                      <div className="card-actions justify-end">
                        <p>
                          {`${(item.price).toFixed(2)}$`}
                        </p>
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            })
          }
        </div>
    </main>
  </>
}

export default Products