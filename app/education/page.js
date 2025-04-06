import { getEducation } from '@/lib/data'
import Card from './components/Card'
import NotFound from './not-found'

async function EducationCard () {
  const data = await getEducation()

  if (!data) {
    return <NotFound />
  }

  return <Card education={data} />
}

export default function Education () {
  return (
    <div>
      <EducationCard />
    </div>
  )
}


// TODO import education data here and pass it down to card component
