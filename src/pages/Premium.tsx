import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Premium() {
  const [hasPremiumAccess, setHasPremiumAccess] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    checkUser()
  }, [])

  async function checkUser() {
    const { data: { user } } = await supabase.auth.getUser()
    setUser(user)
    if (user) {
      setHasPremiumAccess(false)
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Inicia sesión para acceder al contenido premium
          </h2>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {hasPremiumAccess ? 'Contenido Premium' : 'Acceso no autorizado'}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {hasPremiumAccess 
              ? 'Bienvenido a tu área premium. Aquí encontrarás tus planes personalizados.'
              : 'Contacta con el administrador para obtener acceso premium.'}
          </p>
        </div>
      </div>
    </div>
  )
}
