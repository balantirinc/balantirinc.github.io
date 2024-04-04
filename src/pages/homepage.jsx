import Footer from '../components/footer'
import HeroDiagonal from '../components/hero-diagonal'
import TrustedBy from './../components/trusted-by'

export function HomePage() {
  return (
    <>
      <HeroDiagonal />
      <h1 className="text-7xl">Homepage</h1>
      <TrustedBy />
      <Footer />
    </>
  )
}
