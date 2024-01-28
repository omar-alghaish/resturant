import React, { useContext, useState } from 'react'
import LeftSide from '../../components/left_side_pos'
// import CenterPos from '../components/center_pos'
import RightSide from '../../components/right_side_pos'
import './style.css'
import CenterPos from '../../components/center_pos'
import Products from '../../components/products'
import { ClientContext } from '../../components/context/client/client'
import ContexProvider from '../../components/context/client/contexProvider'
import { useSelector, useDispatch } from 'react-redux'
import SideBarTemp from '../../components/sideBarTemp/SideBarTemp'

const POS = ({ children }) => {
  const ClienContextProvider = useContext(ClientContext)
  const { isOpen } = useSelector((state) => state.leftSideBar)
  console.log(ContexProvider, ClientContext)
  const currentPathname = location.pathname
  console.log(currentPathname)
  return (
    <div className="post_system">
      <LeftSide />
      <div className="pos_system_right">
        {/* <CenterPos setProducts={setProducts} />
        <Products products={products} /> */}
        {children}
      </div>
      <SideBarTemp />
    </div>
  )
}

export default POS
