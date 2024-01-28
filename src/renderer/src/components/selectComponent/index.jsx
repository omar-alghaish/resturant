import { useEffect, useState } from 'react'
import './style.css'
import LoadingCustom from './components'
const SelectComponent = ({ items, value, setValue, NotFoundMessage, allValues }) => {
  const [open, setOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [values, setValues] = useState(items)

  useEffect(() => {
    if (searchValue && searchValue.length)
      setValues(items?.filter((item) => item?.label?.includes(searchValue)))
    else {
      setValues(items)
    }
  }, [searchValue])

  useEffect(() => {
    setValues(items)
  }, [items])
  return (
    <div className="setlectBoxComponnent">
      <div className="dropdownInput">
        <div className="drop-down-control">
          {' '}
          <input
            type="text"
            value={searchValue}
            className={open ? 'open' : ''}
            onChange={(e) => {
              setSearchValue(e.target.value)
              setOpen(true)
            }}
          />
          <span
            onClick={() => {
              setOpen(!open)
            }}
          >
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-caret-down"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 10l6 6l6 -6h-12" />
            </svg>
          </span>
        </div>
      </div>
      {open ? (
        <div className="drop-down">
          {!values ? (
            <LoadingCustom />
          ) : values?.length ? (
            values?.map((item) => {
              return (
                <span
                  onClick={() => {
                    setValue(item?.id)
                    setSearchValue(item?.label)
                    setOpen(false)
                  }}
                >
                  {item?.label}
                </span>
              )
            })
          ) : (
            <h4>{NotFoundMessage}</h4>
          )}
        </div>
      ) : null}
    </div>
  )
}

export default SelectComponent
