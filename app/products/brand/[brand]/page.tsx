export default function Brand({ params }: { params: { brand: string } }) {
  return <div className="mt-72">Brand: {params.brand}</div>
}
