import { Route, Routes, useNavigate } from 'react-router'
import Login from './Pages/Login/Login'
import { useContext, useEffect, useState } from 'react'
import Home from './Pages/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import Loading from './Loading'
import './assets/bootstrap.min.css'
import POS from './layouts/pos-system'
import { ClientContext } from './components/context/client/client'
import CompletedOrders from './Pages/orders/CompletedOrders'
import UnCompletedOrders from './Pages/orders/UnCompletedOrders'
function App() {
  const navigate = useNavigate()

  const [loadPage, setLoadTime] = useState(true)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])
  if (loading) {
    return <Loading />
  }
  return (
    <div className="container1 App">
      <Routes>
        {localStorage.getItem('pos_talabat') ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/completedOrders" element={<CompletedOrders />} />
            <Route path='/uncompletedOrders' element={<UnCompletedOrders />} />
          </>
        ) : (
          <Route path="*" element={<Login />} />
        )}
      </Routes>
    </div>
  )
}

export default App
