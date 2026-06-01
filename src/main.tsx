import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import './index.css'
import { TooltipProvider } from "@ui/tooltip"

import { queryClient } from './routes/__root'
import { getCurrentUser } from './api/auth'

const router = createRouter({
  routeTree,
  context: {
    queryClient,
    auth: {
      getCurrentUser,
    },
  },
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <TooltipProvider>
        <RouterProvider router={router} />
      </TooltipProvider>
    </StrictMode>,
  )
}
