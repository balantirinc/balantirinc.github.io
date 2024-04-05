import ContentProductSticky from '../components/content-product-sticky'
import ContentProductProcess from '../components/content-product-process'
import Footer from '../components/footer'
import HeroDiagonal from '../components/hero-diagonal'
import TrustedBy from './../components/trusted-by'

export function HomePage() {
  return (
    <>
      <HeroDiagonal />
      {/* <ContentProductSticky /> */}
      <ContentProductProcess />
      <TrustedBy />
      <Footer />
    </>
  )
}
