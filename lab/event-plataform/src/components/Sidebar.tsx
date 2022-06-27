import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";


// Função que que faz a busca das lessons
// Ignite Lab - Day5 : método usando graphql - codegen
export function Sidebar() {
    const { data } = useGetLessonsQuery();

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