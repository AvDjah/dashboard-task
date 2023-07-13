import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import SideBar from '@/components/Sidebar/SideBar'
import Dashboard from '@/components/Dashboard/Dashboard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>

      <div className='container'>
        <SideBar></SideBar>
        <Dashboard></Dashboard>
      </div>

    </div>
  )
}
