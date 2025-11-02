import React, { useEffect, useState } from 'react'
import api from '../services/api'

export default function Admin(){
  const [sweets,setSweets]=useState([])
  const [form,setForm]=useState({name:'',category:'',price:'',quantity:'',description:''})

  useEffect(()=>{ fetchSweets() }, [])
  const fetchSweets=async()=>{ try{ const res=await api.get('/sweets'); setSweets(res.data);}catch(e){console.error(e)} }

  const submit = async (e)=>{
    e.preventDefault()
    try{
      await api.post('/sweets', form)
      fetchSweets()
      setForm({name:'',category:'',price:'',quantity:'',description:''})
    }catch(err){ console.error(err); alert('Create failed') }
  }

  return (
    <div>
      <h1 className="text-2xl mb-4">Admin</h1>
      <form onSubmit={submit} className="grid grid-cols-1 gap-2 max-w-md mb-6">
        <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Name" className="border p-2" />
        <input value={form.category} onChange={e=>setForm({...form,category:e.target.value})} placeholder="Category" className="border p-2" />
        <input value={form.price} onChange={e=>setForm({...form,price:e.target.value})} placeholder="Price" className="border p-2" />
        <input value={form.quantity} onChange={e=>setForm({...form,quantity:e.target.value})} placeholder="Quantity" className="border p-2" />
        <textarea value={form.description} onChange={e=>setForm({...form,description:e.target.value})} placeholder="Description" className="border p-2" />
        <button className="bg-indigo-600 text-white px-4 py-2">Add Sweet</button>
      </form>

      <div className="grid md:grid-cols-3 gap-4">
        {sweets.map(s=> (
          <div key={s._id} className="p-4 bg-white rounded shadow">
            <h2 className="font-semibold">{s.name}</h2>
            <p>{s.category} • ${s.price} • qty: {s.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
