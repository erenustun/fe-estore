import { FlexBox } from '@component'
import {
  ProcessorFilter,
  RamFilter,
  StorageFilter,
  BrandFilter,
  ColorFilter,
} from '@feature/product'

export const ProductFilter = () => (
  <FlexBox className="hidden w-full flex-wrap gap-x-2 gap-y-2 pb-4 lg:flex">
    <BrandFilter />
    <ColorFilter />
    <ProcessorFilter />
    <StorageFilter />
    <RamFilter />
  </FlexBox>
)
