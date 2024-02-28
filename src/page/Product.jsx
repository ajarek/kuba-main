import React, { useState } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import useFetch from '../Api/useFetch.jsx'
import { saveStorage, fetchStorage } from '../Local/localStorage.jsx'
import { Link, useNavigate } from 'react-router-dom'
import Alert from '../components/Alert.jsx'

const Product = () => {
  const [quantity, setQuantity] = useState(1)
  const [alert, setAlert] = useState(false)
  
  let { id } = useParams()
  const navigate = useNavigate()
  console.log(id)
  const { data, pending, error } = useFetch(
    `https://dummyjson.com/products/${id}`
  )
  const storage = fetchStorage('cart')

  const addCart = () => {
    const cartItem = {
      id: data && data.id,
      title: data && data.title,
      price: data && data.price,
      image: data && data.images[0],
      quantity: quantity,
    }
    if (!storage.map((item) => item.id).includes(data.id)) {
      setAlert(false)
      saveStorage(cartItem, 'cart')
      navigate('/products')
    } else {
     setAlert(true)
     setTimeout(() => {
      navigate('/products')
     }, 3000)
    }

    
  }

  console.log(data)
  return (
    <>
      {pending ? (
        <span className='loading loading-spinner loading-lg'></span>
      ) : null}
      {error ? <div>{error.message}</div> : null}
      {alert ? <Alert /> : null}
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
          <div>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className='btn'
            >
              +
            </button>
            <span className='px-4'>{quantity}</span>
            <button
              onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}
              className='btn'
            >
              -
            </button>
          </div>
          <p>${data && data.price.toFixed(2)}</p>
          <p>${data && (data.price * quantity).toFixed(2)}</p>

          <div
            className='tooltip'
            data-tip='go ahead'
          >
            <button
              className='btn btn-primary px-10'
              onClick={addCart}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
