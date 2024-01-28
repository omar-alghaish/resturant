import React, { useMemo, useState } from 'react'
import POS from '../../layouts/pos-system'
import { Table, Select } from 'antd'
// import 'antd/dist/antd.css';
import './style.css'
import { useSelector, useDispatch } from 'react-redux'
import { setOpen, setOrders } from '../../store/features/leftSideBar'

const { Option } = Select

const UnCompletedOrders = () => {
  const { isOpen } = useSelector((state) => state.leftSideBar)
  const dispatch = useDispatch()
  const [selectedOption, setSelectedOption] = useState('tables')

  const handleSelectChange = (value) => {
    setSelectedOption(value)
  }

  const tableOrders = [
    {
      table: 'T3',
      orders: [
        { name: 'chicken', quantity: 3, size: 'large', price: 10 },
        { name: 'rice', quantity: 1, size: 'medium', price: 20 },
        { name: 'cola', quantity: 2, size: 'small', price: 50 }
      ]
    },
    {
      table: 'T7',
      orders: [
        { name: 'pizza', quantity: 2, size: 'medium', price: 20 },
        { name: 'salad', quantity: 1, size: 'small', price: 50 }
      ]
    },
    {
        table: 'T5',
        orders: [
          { name: 'chicken', quantity: 3, size: 'large', price: 10 },
          { name: 'rice', quantity: 1, size: 'medium', price: 20 },
          { name: 'cola', quantity: 2, size: 'small', price: 50 }
        ]
      },
      {
        table: 'T18',
        orders: [
          { name: 'pizza', quantity: 2, size: 'medium', price: 20 },
          { name: 'salad', quantity: 1, size: 'small', price: 50 }
        ]
      }
  ]

  const takeAwayOrders = [
    {
      orderNumber: 1,
      orders: [
        { name: 'pizza', quantity: 2, size: 'medium', price: 20 },
        { name: 'chicken', quantity: 1, size: 'small', price: 50 }
      ]
    },
    {
        orderNumber: 2,
        orders: [
          { name: 'chicken', quantity: 2, size: 'medium', price: 20 },
          { name: 'salad', quantity: 1, size: 'small', price: 50 }
        ]
      },
      {
        orderNumber: 3,
        orders: [
          { name: 'pizza', quantity: 2, size: 'medium', price: 20 },
          { name: 'salad', quantity: 1, size: 'small', price: 50 }
        ]
      },
  ]

  const deliveryOrders = [
    {
      orderNumber: 1,
      customerName: 'belal alghaish',
      phone: '0103238382',
      orders: [
        { name: 'rice', quantity: 2, size: 'medium', price: 20 },
        { name: 'salad', quantity: 1, size: 'small', price: 50 }
      ]
    }
  ]

  const getDataBySelection = () => {
    return allOrders[selectedOption] || []
  }

  const customColumns = (data) => {
    if (!data.length) return []

    const keys = Object.keys(data[0])
    return keys.map((key) => ({
      title: key,
      dataIndex: key,
      key: key
    }))
  }

  const tablesColumn = [
    { title: 'الطاوله', dataIndex: 'table', key: 'table' },
    {
      title: 'الطلبات',
      dataIndex: 'orders',
      key: 'orders',
      render: (text, record) => (
        <button
          onClick={() => {
            dispatch(setOrders(record.orders))
            dispatch(setOpen(true))
          }}
        >
          عرض
        </button>
      )
    }
  ]
  const takeAwayColumn = [
    { title: 'رقم الطلب', dataIndex: 'orderNumber', key: 'orderNumber' },

    {
      title: 'الطلبات',
      dataIndex: 'orders',
      key: 'orders',
      render: (text, record) => (
        <button
          onClick={() => {
            dispatch(setOrders(record.orders))
            dispatch(setOpen(true))
          }}
        >
          عرض
        </button>
      )
    }
  ]
  const deliveryColumn = [
    { title: 'رقم الطلب', dataIndex: 'orderNumber', key: 'orderNumber' },
    { title: 'رقم الهاتف', dataIndex: 'phone', key: 'phone' },

    {
      title: 'الطلبات',
      dataIndex: 'orders',
      key: 'orders',
      render: (text, record) => (
        <button
          onClick={() => {
            dispatch(setOrders(record.orders))
            dispatch(setOpen(true))
          }}
        >
          عرض
        </button>
      )
    }
  ]
  return (
    <POS>
      <div className="orders-list">
        <Select
          onChange={handleSelectChange}
          value={selectedOption}
          style={{ width: '300px', margin: '20px 0', height: '40px' }}
        >
          <Option value="tables">طاولات</Option>
          <Option value="delivery">ديليفري</Option>
          <Option value="takeAway">تيك اوواي</Option>
        </Select>

        <Table
          dataSource={
            selectedOption === 'tables'
              ? tableOrders
              : selectedOption === 'delivery'
                ? deliveryOrders
                : takeAwayOrders
          }
          columns={
            selectedOption === 'tables'
              ? tablesColumn
              : selectedOption === 'delivery'
                ? deliveryColumn
                : takeAwayColumn
          }
        />
      </div>
    </POS>
  )
}

export default UnCompletedOrders
