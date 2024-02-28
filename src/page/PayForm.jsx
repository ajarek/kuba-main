import React from 'react'
import {deleteStorage, fetchStorage} from '../Local/localStorage';
import {useNavigate} from "react-router-dom";

function PayForm() {

  const navigate = useNavigate();

  let data = fetchStorage('cart');
  let result = data.reduce((acc, item) => acc + item.price*item.quantity, 0);

  return <form>
    <div>PayForm</div>
    <input type="text" value={result} className='' />
    <div>
      <input type="text" />
      <input type="text" />
    </div>
    <div>
      <input type="text" />
      <input type="text" />
    </div>
    <button onClick={() => {
        navigate('/payform');
        deleteStorage('cart');
      }
    }>
      Buy your items!
    </button>
  </form>
}

export default PayForm