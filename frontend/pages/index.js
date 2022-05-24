import { Main } from '../components/componentIndex'
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/products/')
      const json = await response.json()

      setItems(json)
    }

    fetchData().catch(console.error)
  }, [items])

  return (
    <>
      <Main data={items} />
    </>
  )
}
