import { AuthContext } from '../provides/AuthProvider'
import { useContext } from 'react'

export const useAuth = () => useContext(AuthContext)
