import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Products = () => {
  const location = useLocation()

  return (
    <div>
      <div className='flex justify-center gap-3 text-2xl text-white'>
        <Link to='mens'>Mens</Link>
        <Link to='womens'>Womens</Link>
      </div>

      {location.pathname === '/products' && <h1>Products</h1>}

      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Products