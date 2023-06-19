export default function Category({ params }: { params: { category: string } }) {
  return <div className="mt-72">Category: {params.category}</div>
}
