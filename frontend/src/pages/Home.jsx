import React, { useEffect, useState } from 'react'
import api from '../services/api'

export default function Home(){
  const [sweets, setSweets] = useState([])

  useEffect(()=>{ fetchSweets() }, [])

  const fetchSweets = async ()=>{
    try{
      const res = await api.get('/sweets')
      setSweets(res.data)
    }catch(err){ console.error(err) }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Sweets</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sweets.map(s=> (
          <div key={s._id} className="p-4 bg-white rounded shadow">
            <h2 className="font-semibold">{s.name}</h2>
            <p className="text-sm text-gray-600">{s.category} • ${s.price}</p>
            <p className="mt-2">{s.description}</p>
            <div className="mt-4">
              <button className={`px-3 py-1 rounded ${s.quantity>0? 'bg-blue-600 text-white':'bg-gray-300 text-gray-600'}`} disabled={s.quantity<=0}>Purchase</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
