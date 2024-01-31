import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './Provider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routers/Router.jsx'
import { HelmetProvider } from 'react-helmet-async'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
