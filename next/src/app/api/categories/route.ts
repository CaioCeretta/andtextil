import { db } from '@/db'
import { getCategories } from '@/utils/fetchCategories'

export async function GET() {
  const categories = await getCategories()

  return new Response(JSON.stringify(categories), {
    status: 200,
  })
}
