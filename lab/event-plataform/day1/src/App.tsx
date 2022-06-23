
import { gql, useQuery } from "@apollo/client";

const GET_LESSONS_QUERY = gql `
  query {
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

function App() {

  /* Método sem o useQuery*/

  // useEffect(() => {
  //   client.query({
  //     query: GET_LESSONS_QUERY,
  //   }).then(response => {
  //     console.log(response.data);
  //   })
  // }, [])

  /* Método usando useQuery*/

  const {data} = useQuery<{ lessons: Lesson[]}> (GET_LESSONS_QUERY)

  
  return (
      <ul>
        {data?.lessons.map(lesson => {
          return <li key={lesson.id}>{lesson.title}</li>
        })}
      </ul>
    )
}



export default App
