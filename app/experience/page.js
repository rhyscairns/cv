import { getExperience } from '@/lib/data'
import Card from './components/Card'

export default async function Experience () {
  const data = await getExperience()

  return (
    <div>
      <Card experience={data} />
    </div>
  )
}
