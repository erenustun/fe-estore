export default function Brand({ params }: { params: { brandName: string } }) {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="font-semibold">Page: Brands &gt; {params.brandName}</div>
    </main>
  )
}
