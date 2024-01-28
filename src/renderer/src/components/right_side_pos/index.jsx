import React, { useEffect, useState } from 'react'
import './style.css'
import SelectComponent from '../selectComponent'
import ShoppingCart from '../shopping'
import { useSelector } from 'react-redux'
const RightSide = () => {
  const [values] = useState([
    { label: 'محمد خالد', id: 1, phoneNumber: '01298377' },
    { label: 'محمود السيد', id: 2, phoneNumber: '011445553' },
    { label: 'إبراهيم حامد', id: 3, phoneNumber: '015666222' }
  ])
  const [choosedClient, setChoosedClient] = useState(null)
  const selector = useSelector((state) => state?.tables?.table?.active)
  const { isOpen } = useSelector((state) => state.leftSideBar)

  return (
    <aside className={`right_side open`}>
      <div className="right_side_nav">
        <span>الطلبات</span>
      </div>
      {/* <div className="right_side_center">
        <SelectComponent
          allValues={values}
          items={values?.map((item) => ({ id: item?.id, label: item?.label }))}
          value={choosedClient}
          setValue={setChoosedClient}
        />
      </div> */}

      {selector ? <ShoppingCart /> : null}
      {/* <div className="paySection" style={{ marginTop: "auto" }}> */}
      <div className="payDetails" style={{ marginTop: 'auto' }}>
        {/* <div className="payDeatilsRow">
          <span>السعر الكلي</span>
          <span>{selector ? '3000$' : 0}</span>
        </div>
        <div className="payDeatilsRow">
          <span>الخصم : </span>
          <input
            type="number"
            value={selector ? 500 : 0}
            style={{ width: 'fit-content', borderRadius: '5px' }}
          />
        </div> */}
        <div className="border"></div>
        <div className="payDeatilsRow">
          <span>السعر الكلي</span>
          <span>{selector ? '2500$' : 0}</span>
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
      {/* <span
        className="btn btn-success"
        style={{
          width: '80%',
          margin: '20px auto',
          height: 'fit-content',
          padding: '10px'
        }}
      >
        إنشاء الطلب
      </span> */}
      {/* </div> */}
      {/* <Calculator /> */}
    </aside>
  )
}

export default RightSide
