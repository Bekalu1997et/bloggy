'use client'

import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import api from '@/lib/api'

interface LoginData {
  identifier: string
  password: string
}

interface RegisterData {
  username: string
  email: string
  password: string
}

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const loginMutation = useMutation({
    mutationFn: async (data: LoginData) => {
      console.log('Making login API call with data:', data)
      const response = await api.post('/auth/login', data)
      console.log('Login API response:', response.data)
      return response.data
    },
    onSuccess: (data) => {
      console.log('Login successful:', data)
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        console.log('Token and user saved to localStorage')
        window.location.href = '/feed'
      }
    },
    onError: (error: any) => {
      console.error('Login error:', error)
      console.error('Error response:', error.response?.data)
      const message = error.response?.data?.message || error.message || 'Login failed'
      alert(`Login failed: ${message}`)
    },
  })

  const registerMutation = useMutation({
    mutationFn: async (data: RegisterData) => {
      const response = await api.post('/auth/register', data)
      return response.data
    },
    onSuccess: (data) => {
      console.log('Registration successful:', data)
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        console.log('Token and user saved to localStorage')
        window.location.href = '/feed'
      }
    },
    onError: (error: any) => {
      console.error('Registration error:', error)
      console.error('Error response:', error.response?.data)
      const message = error.response?.data?.message || error.message || 'Registration failed'
      alert(`Registration failed: ${message}`)
    },
  })

  const login = async (data: LoginData) => {
    console.log('useAuth.login called with:', data)
    setIsLoading(true)
    try {
      const result = await loginMutation.mutateAsync(data)
      console.log('Login mutation result:', result)
      return result
    } catch (error) {
      console.error('Login mutation error:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (data: RegisterData) => {
    setIsLoading(true)
    try {
      await registerMutation.mutateAsync(data)
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      window.location.href = '/login'
    }
  }

  return {
    login,
    register,
    logout,
    isLoading: isLoading || loginMutation.isPending || registerMutation.isPending,
  }
}