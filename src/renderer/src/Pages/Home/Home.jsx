import { useState } from 'react'
import CenterPos from '../../components/center_pos'
import Products from '../../components/products'
import POS from '../../layouts/pos-system'
import RightSide from '../../components/right_side_pos'

const Home = () => {
  const [products, setProducts] = useState(null)

  return (
    <POS>
      <RightSide />

      <CenterPos setProducts={setProducts} />
      <Products products={products} />
                
    </POS>
  )
}

export default Home
