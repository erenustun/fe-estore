import { Container, FlexBox } from '@component'
import { Featured, ViewProducts } from '@feature/product'

export const ProductsView = () => (
  <Container className="py-5">
    <FlexBox>
      <Featured />
      <ViewProducts />
    </FlexBox>
  </Container>
)
