import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
import Image from 'next/image'

 
export const metadata = {
  title: 'Apex Pathing',
  description: 'The ultimate motion profiling and pathing library for FTC teams. Achieve smooth, reliable, and high-speed autonomous movement.',
}
 
const banner = <Banner storageKey="some-key">Welcome to ApexPathing! 🎉</Banner>
const navbar = (
  <Navbar
    logo={
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-1rem' }}>
        <Image src="/logo.png" alt="ApexPathing" width={32} height={32} />
        <b style={{ marginLeft: '0.5em' }}>ApexPathing</b>
      </div>
    }
  />
)
const footer = <Footer>MIT {new Date().getFullYear()} © ApexPathing.</Footer>
 
export default async function RootLayout({ 
  children 
} :{
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head></Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/ApexPathing/main.git"
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
