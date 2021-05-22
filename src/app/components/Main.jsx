import React from 'react'
import { Provider } from 'react-redux'
import { store } from './../store';
import Dashboard from './Dashboard';

function Main() {
    return (
       <Provider store={store}>
           <div>
                   <Dashboard/>
           </div>
       </Provider>
    )
}

export default Main

