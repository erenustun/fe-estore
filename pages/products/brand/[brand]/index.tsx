import { useRouter } from 'next/router'

export default function Brand() {
  const router = useRouter()
  return <div className="mt-72">Brand: {router.query.brand}</div>
}
