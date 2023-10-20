'use client'

import { MessagesProvider } from '@/context/messages'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const queryClient = new QueryClient()

const Layout: FC<LayoutProps> = ({ children }) => {


  return (
    <QueryClientProvider client={queryClient}>
      <MessagesProvider>{children}</MessagesProvider>
    </QueryClientProvider>
  )
}

export default Layout
