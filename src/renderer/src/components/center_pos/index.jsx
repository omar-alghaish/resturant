import React, { useState, useEffect } from 'react'
import './style.css'
import { foodCategories } from '/src/data/categories.js'
import { useSelector, useDispatch } from 'react-redux'
import ModalContent from './Modal'
import { setOpen, setTable } from '../../store/features/tables'
import Table from '../Tables/Table'
import RightSide from '../right_side_pos'

const CenterPos = ({ setProducts }) => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedSubCategory, setSelectedSubCategory] = useState(null)
  const [TablesModalOpen, setTableModalOpen] = useState(false)
  const [chairs, setChairs] = useState(3)
  const dispatch = useDispatch()
  const { isOpen } = useSelector((state) => state.tables)
  const { table } = useSelector((state) => state.tables)
  const [showAllItems, setShowAllItems] = useState(false)

  const handleChange = (e) => {
    setChairs(e.target.value)
    dispatch(setTable({ ...table, numberOfChairs: chairs }))
  }
  useEffect(() => {
    console.log(selectedCategory)
  }, [selectedCategory])

  const resetFilters = () => {
    setSelectedCategory(null)
    setProducts(null)
    setSelectedSubCategory(null)
  }

  useEffect(() => {
    console.log(selectedCategory)
  }, [selectedCategory])

  return (
    <header>
      {/* <button
        className="btn btn-danger"
        style={{ margin: '10px 0' }}
        onClick={() => {
          localStorage.removeItem('pos_talabat')
          window.location.reload()
        }}
      >
        تسجيل الخروج
      </button> */}
      <div className="btns">
        <button className="btn btn-success">تيك أواي</button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setTableModalOpen(isOpen)
            setTableModalOpen(!TablesModalOpen)
            dispatch(setOpen(true))
          }}
        >
          الطاولات
        </button>
        <button className="btn btn-success">توصيل</button>
      </div>
      <ModalContent isOpen={isOpen} setOpen={setOpen}>
        <Table />
      </ModalContent>
      {table?.active && (
        <div>
          <div className="content">
            <div className="top">
              <h5>الطاوله:</h5>
              <h5>{table.title}</h5>
            </div>
            <div className="top">
              <h5>الطابق:</h5>
              <h5>
                {table.floor === 'First Floor'
                  ? 'الطابق الاول'
                  : table.floor === 'Second Floor'
                    ? 'الطابق الثاني'
                    : 'الخارج'}
              </h5>
            </div>
            {/* <div className="form-input">
              <label htmlFor="">عدد المقاعد</label>
              <input onChange={(e) => handleChange(e)} type="text" name="" id="" value={chairs} />
            </div> */}
          </div>
        </div>
      )}
      <div className="filters">
        {selectedCategory ? (
          <>
            <div className="filter_box active">
              <div className="reset-btn">
                <span onClick={resetFilters}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-arrow-right"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                    <path d="M13 18l6 -6" />
                    <path d="M13 6l6 6" />
                  </svg>
                </span>
                {/* <img src={'/src/assets/pos-logo.png'} alt="" style={{ width: '30px' }} /> */}
              </div>
              <span>{selectedCategory.name}</span>
              {selectedCategory.subcategories && (
                <span>{selectedCategory.subcategories.length} عنصر</span>
              )}
            </div>
            {selectedCategory.subcategories &&
              selectedCategory.subcategories.map((subCategory) => (
                <div
                  onClick={() => {
                    setSelectedSubCategory(subCategory?.id)
                    setProducts(subCategory?.foods)
                    setShowAllItems(false)
                  }}
                  key={subCategory.id}
                  className={
                    subCategory?.id == selectedSubCategory
                      ? `filter_box subcategory active`
                      : `filter_box subcategory`
                  }
                >
                  {/* <img src={'/src/assets/pos-logo.png'} alt="" style={{ width: '30px' }} /> */}
                  <span>{subCategory.name}</span>
                  {subCategory.items && <span>{subCategory.items.length} عنصر</span>}
                </div>
              ))}
          </>
        ) : (
          <>
            <button
              className="btn btn-success"
              onClick={() => {
                setShowAllItems(true)
                const allFoods = foodCategories.flatMap((category) =>
                  category.subcategories.flatMap((subcategory) =>
                    subcategory.foods.map((food) => ({
                      ...food,
                      category: category.name,
                      subcategory: subcategory.name
                    }))
                  )
                )

                setProducts(allFoods)
              }}
            >
              الكل
            </button>
            {foodCategories.map((category) => (
              <div
                key={category.id}
                className={`filter_box ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(category)
                  setProducts([])
                  setShowAllItems(false)
                }}
              >
                {/* <img src={'/src/assets/pos-logo.png'} alt="" style={{ width: '30px' }} /> */}
                <span>{category.name}</span>
                {category.subcategories && <span>{category.subcategories.length} عنصر</span>}
              </div>
            ))}
          </>
        )}
      </div>
      
    </header>
  )
}

export default CenterPos
