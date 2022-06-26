import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

// Fazendo uma query para o graphCMS
const GET_LESSONS_QUERY = gql`
    query MyQuery {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
        id
        lessonType
        availableAt
        title
        slug
        }
    }
`

interface GetLessonsQueryResponse {
    lessons: Array<{
        id: string;
        title: string;
        slug: string;
        availableAt: string;
        lessonType: 'live' | 'class';
    }>
}

export function Sidebar() {
    const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)

    return (
        // w-[348px] = Quando não tem um tamanho pré-definido, passamos em px dentro de um array
        // p-6 = padding em todos os lados
        // gap = espaçamento entre os conteúdos
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pb-6 mg-6 border-gray-500 block"> 
            Cronograma de Aulas
            </span>
            {data?.lessons.map(lesson => {
                return (
                    <Lesson 
                    title={lesson.title}
                    slug={lesson.slug}
                    avaliableAT={new Date(lesson.availableAt)}
                    type={lesson.lessonType}
                />
                )
            })}
            <div className="flex flex-col gap-8">

            </div>
        </aside>
        )
}