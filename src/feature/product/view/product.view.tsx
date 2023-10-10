import { Container, Sidebar } from '@component'
import { ViewProducts } from '@feature/product'

export const ProductView = () => (
  <Container className="flex-row pt-8">
    <Sidebar withBrands={true} withCart={true} />
    <ViewProducts />
  </Container>
)
