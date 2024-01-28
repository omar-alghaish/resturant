/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import Modal from '../modal'
import { useDispatch } from 'react-redux'
import { addCart } from '../../store/cartReducer'

const Product = ({ item, isFound }) => {
  const [showModal, setShowModal] = useState(false)
  const [totalPrice, setTotalPrice] = useState(item?.price)
  const [sizes, setSizes] = useState({ price: 0 })
  let [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  const [additionals, setAdditionals] = useState([])
  useEffect(() => {
    if (sizes || additionals?.length || quantity) {
      setTotalPrice(
        (parseFloat(item?.price) +
          parseFloat(sizes?.price) +
          additionals?.reduce((acc, curr) => {
            return acc + parseFloat(curr?.price)
          }, 0)) *
          parseInt(quantity)
      )
    }
  }, [additionals, sizes, quantity])
  const addToCart = () => {
    dispatch(
      addCart({
        product: item,
        selectedSize: sizes,
        selectedExts: additionals,
        totalPrice: totalPrice,
        quantity: quantity
      })
    )
  }
  useEffect(() => {
    if (!showModal) {
      setSizes({ price: 0 })
      setAdditionals([])
      setQuantity(1)
    }
  }, [showModal])

  return (
    <>
      <div
        onClick={() =>
          item?.options?.length || item?.additionals?.length ? setShowModal(item?.id) : null
        }
        className={isFound ? 'productBox active' : 'productBox'}
        style={{ cursor: 'pointer' }}
      >
        <span style={{ opacity: 0.4 }}>متاح</span>
        {/* <img style={{ width: '50px', minHeight: '50px' }} src={'/src/assets/pos-logo.png'} alt="" /> */}
        <div className="addiotionalInfo">
          <span>{item?.name}</span>
          <span>
            {/* <span> الكمية المتاحة :</span> */}
            {/* <span>{item?.quantity}</span> */}
          </span>
          <span>
            <span>السعر:</span>
            <span>{item?.price} جنية</span>
          </span>
        </div>
      </div>
      <Modal
        headerTitle={'تحديد خصائص الوجبة'}
        open={showModal}
        toggle={setShowModal}
        onClose={setShowModal}
        children={
          <>
            {' '}
            <div className="productOptions">
              <div
                className="optionsBtn"
                style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}
              >
                <button className="btn btn-success" onClick={addToCart}>
                  إضافة
                </button>
              </div>

              {item?.options?.length ? (
                <>
                  <div className="sizes">
                    <h3 className="optionLabel">الأحجام</h3>
                    <div className="changerInputs">
                      {item?.options?.map((item) => {
                        return (
                          <div className="addInputField">
                            <input
                              type="radio"
                              name={'item'}
                              id={'item'}
                              value={item?.id}
                              onChange={(e) => setSizes(item)}
                            />
                            <div>
                              <span>{item?.name}</span>
                              <span>({item?.price})</span>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </>
              ) : null}
              {item?.additionals?.length ? (
                <div className="sizes">
                  <h3 className="optionLabel">الإضافات</h3>
                  <div className="changerInputs">
                    {item?.additionals?.map((item) => {
                      return (
                        <div className="addInputField">
                          <input
                            type="checkbox"
                            name={item?.id}
                            id={item?.id}
                            value={item?.id}
                            onChange={(e) =>
                              setAdditionals(
                                additionals?.filter((s_item) => s_item?.id == item?.id)?.length
                                  ? additionals?.filter((s_item) => s_item?.id != item?.id)
                                  : [...additionals, item]
                              )
                            }
                          />
                          <div>
                            <span>{item?.name}</span>
                            <span>({item?.price})</span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ) : null}
              <div
                className="addInputField"
                style={{
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start'
                }}
              >
                <label htmlFor="">ملاحظات</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="3"
                  style={{ width: '100%', borderRight: '.1px solid', borderRadius: '5px' }}
                ></textarea>
              </div>
              <div className="fields">
                <div className="inputField">
                  <label htmlFor="">الكمية</label>
                  <br />
                  <div className="setQuantity">
                    <span
                      style={{
                        cursor: 'pointer',
                        margin: '0 8px',
                        fontSize: '24px',
                        userSelect: 'none'
                      }}
                      onClick={(e) => (quantity > 1 ? setQuantity(--quantity) : null)}
                    >
                      -
                    </span>
                    <input
                      type="number"
                      value={quantity}
                      min={1}
                      onChange={(e) => setQuantity(e?.target?.value)}
                    />
                    <div
                      role="button"
                      style={{
                        cursor: 'pointer',
                        margin: '0 8px',
                        fontSize: '24px',
                        userSelect: 'none'
                      }}
                      onClick={(e) => setQuantity(++quantity)}
                    >
                      +
                    </div>
                  </div>
                </div>
                <div className="inputField">
                  <label htmlFor="">السعر الكلي</label>
                  <br />
                  <input
                    type="number"
                    value={totalPrice}
                    onChange={(e) => setTotalPrice(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </>
        }
      />
    </>
  )
}

export default Product
