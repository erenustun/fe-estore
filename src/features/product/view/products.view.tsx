import { Container, H2 } from '@component'
import { FormattedMessage } from 'react-intl'
import { ViewProducts } from '@feature/product/component/view-products.component'

export const ProductsView = () => (
  <Container>
    <div className="flex flex-col">
      <H2>
        <FormattedMessage id="product_index" />{' '}
      </H2>
      <ViewProducts />
    </div>
  </Container>
)
