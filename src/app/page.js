import Image from 'next/image'
import Notification from './components/notification'
import Test from './components/test'
import Page from './components/test'
import Register from './components/register'

export default function Home() {
  return (
    <main className=" bg-red-300">
      <Register/>
      <Page/>
    </main>
  )
}
