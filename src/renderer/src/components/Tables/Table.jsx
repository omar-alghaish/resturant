import { useState } from 'react'
import { IoListSharp } from 'react-icons/io5'
import { TbLayoutGrid } from 'react-icons/tb'
import { FiEdit } from 'react-icons/fi'
import { IoIosAddCircle } from 'react-icons/io'

import './style.css'
import img1 from '../../assets/imgs/round-table-empty.png'
import img2 from '../../assets/imgs/round-table-fill.png'
import img3 from '../../assets/imgs/round-table-white.png'
import { useSelector, useDispatch } from 'react-redux'
import { setTable, setOpen } from '../../store/features/tables'
import ModalContent from './Modal'

const floor3 = [
  { title: 'T1', img: img1, active: false, chairs: 3 },
  { title: 'T2', img: img2, active: true, chairs: 3 },
  { title: 'T3', img: img1, active: false, chairs: 3 },
  { title: 'T4', img: img2, active: true, chairs: 3 },
  { title: 'T5', img: img2, active: true, chairs: 3 },
  { title: 'T6', img: img1, active: false, chairs: 3 },
  { title: 'T7', img: img1, active: false, chairs: 3 },
  { title: 'T8', img: img2, active: true, chairs: 3 },
  { title: 'T9', img: img1, active: false, chairs: 3 },
  { title: 'T10', img: img2, active: true, chairs: 3 },
  { title: 'T11', img: img2, active: true, chairs: 3 },
  { title: 'T12', img: img1, active: false, chairs: 3 },
  { title: 'T13', img: img1, active: false, chairs: 3 },
  { title: 'T14', img: img2, active: true, chairs: 3 },
  { title: 'T15', img: img1, active: false, chairs: 3 },
  { title: 'T16', img: img1, active: false, chairs: 3 },
  { title: 'T17', img: img2, active: true, chairs: 3 },
  { title: 'T18', img: img1, active: false, chairs: 3 },
  { title: 'T19', img: img1, active: false, chairs: 3 },
  { title: 'T20', img: img2, active: true, chairs: 3 },
  { title: 'T21', img: img2, active: true, chairs: 3 },
  { title: 'T22', img: img1, active: false, chairs: 3 }
]

const floor2 = [
  { title: 'T23', img: img1, active: false, chairs: 3 },
  { title: 'T24', img: img2, active: true, chairs: 3 },
  { title: 'T25', img: img2, active: false, chairs: 3 },
  { title: 'T26', img: img2, active: true, chairs: 3 },
  { title: 'T27', img: img1, active: true, chairs: 3 },
  { title: 'T28', img: img2, active: false, chairs: 3 },
  { title: 'T29', img: img2, active: false, chairs: 3 },
  { title: 'T30', img: img1, active: true, chairs: 3 },
  { title: 'T31', img: img1, active: false, chairs: 3 },
  { title: 'T32', img: img1, active: true, chairs: 3 },
  { title: 'T33', img: img1, active: true, chairs: 3 },
  { title: 'T34', img: img2, active: false, chairs: 3 },
  { title: 'T35', img: img2, active: false, chairs: 3 },
  { title: 'T36', img: img2, active: true, chairs: 3 },
  { title: 'T37', img: img1, active: false, chairs: 3 },
  { title: 'T38', img: img1, active: false, chairs: 3 },
  { title: 'T39', img: img2, active: true, chairs: 3 },
  { title: 'T40', img: img1, active: false, chairs: 3 },
  { title: 'T41', img: img1, active: false, chairs: 3 },
  { title: 'T42', img: img2, active: true, chairs: 3 },
  { title: 'T43', img: img2, active: true, chairs: 3 },
  { title: 'T44', img: img1, active: false, chairs: 3 }
]

const floor1 = [
  { title: 'T45', img: img1, active: false, chairs: 3 },
  { title: 'T46', img: img2, active: true, chairs: 3 },
  { title: 'T47', img: img1, active: false, chairs: 3 },
  { title: 'T48', img: img2, active: true, chairs: 3 },
  { title: 'T49', img: img2, active: true, chairs: 3 },
  { title: 'T50', img: img1, active: false, chairs: 3 },
  { title: 'T51', img: img1, active: false, chairs: 3 },
  { title: 'T52', img: img2, active: true, chairs: 3 },
  { title: 'T53', img: img1, active: false, chairs: 3 },
  { title: 'T54', img: img2, active: true, chairs: 3 },
  { title: 'T55', img: img2, active: true, chairs: 3 },
  { title: 'T56', img: img1, active: false, chairs: 3 },
  { title: 'T57', img: img1, active: false, chairs: 3 },
  { title: 'T58', img: img2, active: true, chairs: 3 },
  { title: 'T59', img: img1, active: false, chairs: 3 },
  { title: 'T60', img: img1, active: false, chairs: 3 },
  { title: 'T61', img: img2, active: true, chairs: 3 },
  { title: 'T62', img: img1, active: false, chairs: 3 },
  { title: 'T63', img: img1, active: false, chairs: 3 },
  { title: 'T64', img: img2, active: true, chairs: 3 },
  { title: 'T65', img: img2, active: true, chairs: 3 },
  { title: 'T66', img: img1, active: false, chairs: 3 }
]

const Table = () => {
  const [activeGrid, setActiveGrid] = useState('gridBoxes')
  const { table } = useSelector((state) => state.tables)
  const [activeImgIndex, setActiveImgIndex] = useState(null)
  const [activeTab, setActiveTab] = useState('First Floor')
  const [addTableModal, setAddTableModal] = useState(false)
  const [editTableModal, setEditTableModal] = useState(false)
  const [editTableName, setEditTableName] = useState('')
  const [gridType, setGridType] = useState(null)
  const [newTable, setNewTable] = useState({
    floor: 'First Floor',
    chairs: 0
  })

  const [editTable, setEditTable] = useState({
    floor: 'First Floor',
    chairs: 0
  })

  const dispatch = useDispatch()
  const handleTabClick = (tab) => {
    setActiveTab(tab)
    const floorDataMap = {
      'First Floor': floor1,
      'Second Floor': floor2,
      'Outdoor Terrace': floor3
    }

    const selectedData = floorDataMap[tab] || []
    setActiveImgIndex(null)
    setData(selectedData)
  }
  floor1.length
  const handleAdd = () => {
    if (newTable.floor === 'First Floor') {
      floor1.push({ ...newTable, img: img2, title: `T${floor1.length + 1}` })
    } else if (newTable.floor === 'Second Floor') {
      floor2.push({ ...newTable, img: img2, title: `T${floor2.length + 1}` })
    } else {
      floor3.push({ ...newTable, img: img2, title: `T${floor3.length + 1}` })
    }
    setNewTable({
      floor: 'First Floor',
      chairs: 0
    })
  }
  const [data, setData] = useState(floor1)
  console.log(activeTab)
  const handleGridClick = (e, index) => {
    e.stopPropagation()
    // setActiveGrid(e.target.id)
    setActiveImgIndex(index)

    dispatch(setTable({ ...table, ...data[index], floor: activeTab }))
    setGridType(data[index]?.active)
    // dispatch(setOpen(false))
  }
  console.log(floor2)
  const handleUpdate = () => {
    let updatedFloorData

    if (editTable.floor === 'First Floor') {
      updatedFloorData = floor1.map((item) =>
        item.title === editTableName ? { ...editTable, title: editTableName, img: item.img } : item
      )
      // Update the state with the modified floor data
      setData(updatedFloorData)
    } else if (editTable.floor === 'Second Floor') {
      updatedFloorData = floor2.map((item) =>
        item.title === editTableName ? { ...editTable, title: editTableName, img: item.img } : item
      )
      setData(updatedFloorData)
    } else {
      updatedFloorData = floor3.map((item) =>
        item.title === editTableName ? { ...editTable, title: editTableName, img: item.img } : item
      )
      setData(updatedFloorData)
    }
  }

  console.log(activeGrid)
  const updatedData = data.map((item, index) => ({
    ...item,
    img: index === activeImgIndex ? img3 : item.img
  }))
  return (
    <div className="table1">
      <div className="header">
        <div className="row1">
          <div className="icons">
            {/* <div
              id="gridBoxes"
              onClick={() => setActiveGrid('gridBoxes')}
              className={`${activeGrid === 'gridBoxes' ? 'active' : ''}`}
            >
              <TbLayoutGrid />
            </div> */}
            {/* <div
              id="gridList"
              onClick={() => setActiveGrid('gridList')}
              className={`${activeGrid === 'gridList' ? 'active' : ''}`}
            >
              <IoListSharp />
            </div> */}
          </div>
        </div>
        <div className="row2">
          <div className="tabs">
            <p
              className={`tab ${activeTab === 'First Floor' ? 'active' : ''}`}
              onClick={() => handleTabClick('First Floor')}
            >
              الطابق الاول
            </p>
            <p
              className={`tab ${activeTab === 'Second Floor' ? 'active' : ''}`}
              onClick={() => handleTabClick('Second Floor')}
            >
              الطابق الثاني
            </p>
            <p
              className={`tab ${activeTab === 'Outdoor Terrace' ? 'active' : ''}`}
              onClick={() => handleTabClick('Outdoor Terrace')}
            >
              الخارج
            </p>
          </div>
          <div className="icons">
            <div
              className="edit"
              onClick={() => {
                setEditTableModal(true)
              }}
            >
              <FiEdit />
            </div>
            <div
              onClick={() => {
                setAddTableModal(true)
                //    dispatch(setOpen(false))
              }}
            >
              <IoIosAddCircle />
            </div>
            {/* <div className="search">
                <input type="text" name="" id="" placeholder='بحث' />
                <div>
                                   <CiSearch />

                </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="center">
        <div className={`main-table ${activeGrid === 'gridList' ? 'list' : ''}`}>
          {updatedData.map((item, index) => (
            <div
              key={index}
              className={`img ${index === activeImgIndex ? 'active' : ''} ${!item.active ? 'disabled' : ''}`}
              onClick={(e) => handleGridClick(e, index)}
            >
              <img src={item?.img} alt="" />
              <h3>{item?.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="bottom">
        {/* <button className="bottom-button">
          <MdOutlineModeEdit /> Edit
        </button> */}
        {activeImgIndex && (
          <button disabled={!gridType} className="bottom-button">
            نقل
          </button>
        )}
        {activeImgIndex && (
          <button
            className="bottom-button"
            onClick={() => {
              dispatch(setOpen(false))
            }}
          >
            اختيار
          </button>
        )}
        {/* {activeImgIndex && <button className="bottom-button">عرض الفاتوره</button>} */}

        {/* <button className="bottom-button">Transfer Item</button> */}
        {/* <button className="bottom-button">Transfer Table</button> */}
      </div>
      <ModalContent isOpen={addTableModal} setOpen={setAddTableModal}>
        <div className="addTable-container">
          <div className="content">
            <div className="form-input">
              <label htmlFor="">الطابق</label>
              <select
                onChange={(e) => setNewTable({ ...newTable, floor: e.target.value })}
                value={newTable.floor}
              >
                <option value="First Floor">الطابق الاول</option>
                <option value="Second Floor">الطابق الثاني</option>
                <option value="Outdoor Terrace">الخارج</option>
              </select>
            </div>
            <div className="form-input">
              <label htmlFor="">عدد المقاعد</label>
              <input
                type="text"
                onChange={(e) => setNewTable({ ...newTable, chairs: e.target.value })}
                value={newTable.chairs}
              ></input>
            </div>
            <button
              onClick={() => {
                setAddTableModal(false)
                handleAdd()
              }}
            >
              اضافه
            </button>
          </div>
        </div>
      </ModalContent>
      <ModalContent isOpen={editTableModal} setOpen={setEditTableModal}>
        <div className="addTable-container">
          <div className="content">
            <div className="form-input">
              <label htmlFor="">الطابق</label>
              <select
                onChange={(e) => setEditTable({ ...editTable, floor: e.target.value })}
                value={editTable.floor}
              >
                <option value="First Floor">الطابق الاول</option>
                <option value="Second Floor">الطابق الثاني</option>
                <option value="Outdoor Terrace">الخارج</option>
              </select>
            </div>
            <div className="form-input">
              <label htmlFor="">اسم الطاوله</label>
              <input
                type="text"
                onChange={(e) => setEditTableName(e.target.value)}
                value={editTableName}
              ></input>
            </div>
            <div className="form-input">
              <label htmlFor="">عدد المقاعد</label>
              <input
                type="text"
                onChange={(e) => setEditTable({ ...editTable, chairs: e.target.value })}
                value={editTable.chairs}
              ></input>
            </div>
            <button
              onClick={() => {
                setEditTableModal(false)
                handleUpdate()
              }}
            >
              اضافه
            </button>
          </div>
        </div>
      </ModalContent>
    </div>
  )
}

export default Table
