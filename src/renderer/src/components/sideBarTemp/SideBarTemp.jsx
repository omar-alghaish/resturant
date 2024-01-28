import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'

import './style.css'
import SelectComponent from '../selectComponent'
import ShoppingCart from '../shopping'
import { useSelector, useDispatch } from 'react-redux'
import { setOpen, setOrders } from '../../store/features/leftSideBar'

const calculateTotalPrice = (orders) => {
  const totalPrice = orders.reduce((acc, order) => acc + order.price, 0)
  return totalPrice
}

const SideBarTemp = ({ isOpen2 }) => {
  const [values] = useState([
    { label: 'محمد خالد', id: 1, phoneNumber: '01298377' },
    { label: 'محمود السيد', id: 2, phoneNumber: '011445553' },
    { label: 'إبراهيم حامد', id: 3, phoneNumber: '015666222' }
  ])
  const [choosedClient, setChoosedClient] = useState(null)
  const selector = useSelector((state) => state?.tables?.table?.active)
  const { isOpen } = useSelector((state) => state.leftSideBar)
  const { orders } = useSelector((state) => state.leftSideBar)
  const dispatch = useDispatch()

  const totalPrice = calculateTotalPrice(orders)
  const handleClose = () => {
    dispatch(setOpen(false))
  }
  return (
    <aside className={`right_side ${isOpen ? 'open' : ''}`}>
      <div className="right_side_nav">
        <span>الطلبات</span>
        <div>
        <IoMdClose onClick={handleClose} className="closeIcon" />
      </div>
      </div>
      <div className="orders">
        {/* {orders?.map((order, index) => (
          <div>
            <ShoppingCart data={order} />
          </div>
        ))} */}
      </div>
      <ShoppingCart />

      <div className="payDetails" style={{ marginTop: 'auto' }}>
        <div className="border"></div>
        <div className="payDeatilsRow">
          <span>السعر الكلي</span>
          <span>{totalPrice}</span>
        </div>
      </div>

      <div className="addInputField">
        <label htmlFor="">ملاحظات</label>
        <textarea name="" id="" cols="30" rows="3" style={{ width: '100%' }}></textarea>
      </div>
      <div className="rowDiv">
        <button className="btn btn-primary">تجهيز</button>
        <button className="btn btn-success">تقفيل الشيك</button>
      </div>
    </aside>
  )
}

export default SideBarTemp
