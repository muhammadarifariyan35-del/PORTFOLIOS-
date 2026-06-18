
import { useParams } from 'react-router-dom'

const CoursesDetails = () => {
  
  const params = useParams()
  

  return (
    <div> {params.courseId}
      <h1>coursed details page</h1>
    </div>
  )
}

export default CoursesDetails