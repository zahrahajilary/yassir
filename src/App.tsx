import React, {lazy, Suspense} from 'react';
import Loading from "./components/Loading/Loading";
const ReservationList = lazy(()=>import('./components/ReservationList/ReservationList'))


function App() {
  return (
    <div>
        <Suspense fallback={<Loading/>}>
            <ReservationList/>
        </Suspense>

    </div>
  );
}

export default App;
