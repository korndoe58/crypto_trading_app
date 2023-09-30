import Image from 'next/image'
import Test from './components/test'
import Page from './components/test'
import Register from './components/register'
import Download from './components/Download'

export default function Home() {
  return (
    <main className="" >
      <Register/>
      <Page/>
      <Download/>
    </main>
  )
}
