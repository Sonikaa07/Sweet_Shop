import React, { useState } from 'react'
import api from '../services/api'

export default function Register(){
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const submit = async (e)=>{
    e.preventDefault()
    try{
      const res = await api.post('/auth/register',{ name, email, password })
      localStorage.setItem('token', res.data.token)
      alert('Registered')
    }catch(err){ console.error(err); alert('Register failed') }
  }

  return (
    <form onSubmit={submit} className="max-w-md">
      <h1 className="text-2xl mb-4">Register</h1>
      <label className="block">Name</label>
      <input value={name} onChange={e=>setName(e.target.value)} className="border p-2 w-full mb-2" />
      <label className="block">Email</label>
      <input value={email} onChange={e=>setEmail(e.target.value)} className="border p-2 w-full mb-2" />
      <label className="block">Password</label>
      <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="border p-2 w-full mb-2" />
      <button className="bg-green-600 text-white px-4 py-2">Register</button>
    </form>
  )
}
