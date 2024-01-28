import { createSlice } from '@reduxjs/toolkit'
const someCarts = [
  {
    cart_client_id: 1,
    cart_id: 101,
    client: { id: 1, name: 'محمد خالد', phoneNumber: '01298377' },
    data: [
      {
        client: { id: 1, name: 'محمد خالد', phoneNumber: '01298377' },
        items: {
          items: [
            {
              id: 122,
              name: 'سوشي',
              quantity: 1,
              price: 20,
              options: [{ id: 8, name: 'نوع السمك', price: 5 }],
              additionals: [{ id: 107, name: 'صوص الصويا', price: 3 }]
            },
            {
              id: 211,
              name: 'ناتشوز',
              quantity: 1,
              price: 8,
              options: [{ id: 10, name: 'صوص الدبل', price: 2 }],
              additionals: [
                { id: 108, name: 'جبن مذاب', price: 4 },
                { id: 109, name: 'فاصوليا', price: 3 }
              ]
            }
          ]
        },
        totalPrice: 35,
        discount: 5,
        totalQuantity: 3
      }
    ]
  }
]

const initialState = {
  allCarts: someCarts ? someCarts : [],

  cartUser: {
    cart_client_id: null,
    cart_id: null,
    client: {},
    data: [{ items: [], totalPrice: 0, discount: 0, totalQuantity: 0 }]
  }
}

const cartSlice = createSlice({
  initialState,
  name: 'Cart',
  reducers: {
    addCart: (state, action) => {
      console.log(action?.payload)
    },
    changeClient: (state, action) => {
      state.cartUser.client = action?.payload
      console.log(action?.payload)
    }
  }
})

export const { addCart } = cartSlice?.actions
export default cartSlice?.reducer
