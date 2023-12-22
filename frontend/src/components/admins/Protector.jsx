import React, { useEffect } from 'react'
import { Store } from '../../context/DataStore'
import { useNavigate } from 'react-router-dom'

export default function Protector({ children }) {
  const { token } = Store()
  const navigate = useNavigate()
  
  useEffect(() => {
    if (!token) {
      navigate('/admins/')
    }
  },[token])
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}
