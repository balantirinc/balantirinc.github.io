import ContentProductSticky from '../components/content-product-sticky'
import ContentProductTestimonial from '../components/content-product-testimonial'
import Footer from '../components/footer'
import HeroDiagonal from '../components/hero-diagonal'
import TrustedBy from './../components/trusted-by'

export function HomePage() {
  return (
    <>
      <HeroDiagonal />
      <h1 className="text-7xl">Homepage</h1>
      <ContentProductSticky />
      <ContentProductTestimonial />
      <TrustedBy />
      <Footer />
    </>
  )
}
