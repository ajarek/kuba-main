import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import useFetch from '../Api/useFetch.jsx'
import {saveStorage} from '../Local/localStorage.jsx'

const Product = () => {


  let { id } = useParams()
  console.log(id)
  const { data, pending, error } = useFetch(
    `https://dummyjson.com/products/${id}`
  )

  const addCart = () => {
    const cartItem = {
      id: data && data.id,
      title: data && data.title,
      price: data && data.price,
      image: data && data.images[0],
      quantity: 1,
    }
    saveStorage(cartItem, 'cart')
  }

  console.log(data)
  return (
    <>
      {pending ? (
        <span className='loading loading-spinner loading-lg'></span>
      ) : null}
      {error ? <div>{error.message}</div> : null}
      <div className='min-h-[calc(100vh-80px)] w-full grid grid-cols-2 max-sm:grid-cols-1   p-[4rem]'>
        <div className='flex justify-center items-center'>
          <img
            src={data && data.images[0]}
            alt=''
            loading='lazy'
            width={400}
            height={400}
            className='h-[400px] object-contain'
          />
        </div>
        <div className='flex flex-col justify-center items-start gap-8'>
          <p>{data && data.title}</p>
          <p>{data && data.description}</p>
          <p>${data && data.price.toFixed(2)}</p>
          <div
            className='tooltip'
            data-tip='go ahead'
          >
            <button className='btn btn-primary px-10' onClick={addCart}>
              Buy
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
