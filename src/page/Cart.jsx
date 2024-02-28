import React, {useState} from 'react'
import {fetchStorage, saveStorageSingle, deleteStorage} from '../Local/localStorage'
import {Link, useNavigate} from "react-router-dom";

function Cart() {

  let data = fetchStorage('cart');
  let result = data.reduce((acc, item) => acc + item.price*item.quantity, 0);

  const [currentData, setData] = useState(data);

  const deleteById = (id) => {
    const dataFilter = data.filter((item) => item.id !== id)
    saveStorageSingle(dataFilter, "cart");
    setData(dataFilter);
  }

  const navigate = useNavigate();

  return <>
    <main className='min-h-[calc(100vh-80px)] w-full max-w-[1440px] my-auto p-[4rem]'>
      {
        currentData&&currentData.length===0? <h1>Cart is empty</h1> : 
        <section className="">
          {
            currentData&&currentData.map((item) => {
              return (<div key={item.id} className="grid grid-cols-6">
                <div>
                  <img src={item.image} alt="" />
                </div>
                <div>
                  <p>{item.title}</p>
                </div>
                <div>
                  <p>{item.price}</p>
                </div>
                <div>
                  <p>{item.quantity}</p>
                </div>
                <div>
                  <p>{item.price*item.quantity}</p>
                </div>
                <div>
                  <button className='btn btn-error' onClick={() => {
                    deleteById(item.id)
                  }}>
                    Remove
                  </button>
                </div>
              </div>)
            })
          }
        </section>
      }
      <section className=''>
        {
          `${result.toFixed(2)}$`
        }
        <Link to="/payform">
          Buy your items
        </Link>
      </section>
    </main>
  </>
}

export default Cart