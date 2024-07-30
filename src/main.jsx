import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './dashboard.css'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ContextProvider } from './context/ContextProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'

const client = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ContextProvider>
        <RouterProvider router={router}/>
      </ContextProvider>
    </QueryClientProvider>

  </React.StrictMode>,
)
