import { useRouter } from 'next/router'

export default function Category() {
  const router = useRouter()
  return <div className="mt-72">Category: {router.query.category}</div>
}
