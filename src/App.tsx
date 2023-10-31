import React, { lazy, Suspense } from 'react'
import Loading from './components/Loading/Loading'
const ReservationList = lazy(()=>import('./components/ReservationList/ReservationList'))


function App() {
  return (
    <div className='container mx-auto px-4 my-8'>
      <Suspense fallback={<Loading/>}>
        <ReservationList/>
      </Suspense>
    </div>
  )
}

export default App
