import React, { useState } from 'react'

const ContexProvider = ({ children }) => {
  const [client, setClient] = useState()
  return <ClientContext.Provider value={{ client, setClient }}>{children}</ClientContext.Provider>
}

export default ContexProvider
