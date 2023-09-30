import Image from 'next/image'
import Test from './components/test'
import Page from './components/test'
import Register from './components/register'
import Download from './components/Download'
import News from './components/news'

export default function Home() {
  return (
    <main className="" >
      <Register/>
      <Page/>
      <News/>
      <Download/>
    </main>
  )
}
