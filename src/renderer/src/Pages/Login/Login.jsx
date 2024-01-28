import { useState } from 'react'
// import Keyboard from 'react-simple-keyboard'
import 'react-simple-keyboard/build/css/index.css'
import './login.css'
const Login = () => {
  const [loadInput, setLoadInput] = useState(1)
  const [name, setName] = useState('')
  const [password, setPassWord] = useState('')
  const renderKeys = () => {
    const rows = [
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
      ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
      ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
      ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    ]

    return rows.map((row, rowIndex) => (
      <div key={rowIndex} className="keyboard-row">
        {row.map((key) => (
          <button
            key={key}
            onClick={() => {
              if (loadInput == 1) {
                setName(name + key)
              } else {
                setPassWord(password + key)
              }
            }}
          >
            {key}
          </button>
        ))}
      </div>
    ))
  }
  return (
    <div className="Login_page">
      <div className="loding_parent">
        <div className="right">
          <h5>دخول</h5>
          <div>
            <label htmlFor="">الإسم:</label>
            <input className="form-control" type="text" placeholder="أدخل الإسم" />
          </div>
          <div>
            <label htmlFor="">كلمة السر:</label>
            <input className="form-control" type="text" placeholder="أدخل الإسم" />
          </div>
          <div className="log_btn">
            <button
              className=""
              onClick={() => {
                localStorage.setItem('pos_talabat', JSON.stringify({ id: '1', name: 'Mohammed' }))
                window.location.href = '/'
              }}
            >
              دخول
            </button>
          </div>
        </div>
        <div className="left">
          <img src="/src/assets/pos-logo.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login
