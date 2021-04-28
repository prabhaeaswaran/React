import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchUsers,Selector } from './features/counter/counterSlice'

const App = () => {
  const dispatch = useDispatch()
  const { list, loading, errors } = useSelector(Selector)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const renderList = () => {
    if (loading) return <p>Loading..</p>
    if (errors) return <p>Error in displaying</p>

    return list.map((list:any) =>
      <div key={list.userId} className='tile'>
        <h2>{list.title}</h2>
      </div>
    )
  }

  return (
    <section>
      <h1>ARTICLES</h1>
      <div className='content'>
        {renderList()}
      </div>
    </section>
  )
}

export default App


