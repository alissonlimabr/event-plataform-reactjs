// rounded = bordas arredondadas (padrão 4px)
// justify-between = jorga o conteúdo para as extremidades
// text-sm = define font size e altura da linha (tamanho 14)
// text-xs = menor que o sm (tamanho 12)
// px = padding no eixo X, ou seja, horizontal
// py-[1.125rem] = padding no eixo Y, ou seja, vertical. Aprox. 2px
// border = adiciona uma borda
// gap = espaçamento entre o conteúdo
// Para ajustar o ícone =  flex, items-center e gap-2
// {props.title} = variável javascript sendo exibida dentro do html (necessário uso de chaves)
// group = define um grupo de elementos
// group-hover: = A propriedade será aplicado a todo o grupo (no caso abaixo, a div inteira)
// Link to = usado para refenciar rotas por meio do react-router-dom | Substitui o <a href="" />
import { isPast, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CheckCircle, Lock } from 'phosphor-react';
import { Link } from 'react-router-dom';

// Define as propriedades do component desse component
interface LessonProps {
    title: string;
    slug: string;
    avaliableAT: Date;
    type: 'live' | 'class'
}

// exporta a função e recebe as propriedades de LessonProps
export function Lesson(props: LessonProps) {
    const isLessonAvailable = isPast(props.avaliableAT);
    const isLessonAvailableDateFormat = format(props.avaliableAT, "EEEE ' • ' d ' de ' MMMM ' • ' k'h'mm", {
        locale: ptBR,
    });

    return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
        <span className="text-gray-300">
        {isLessonAvailableDateFormat}
        </span>
        <div className="rounded border border-gray-500  p-4 mt-2 group-hover:border-green-500">
            <header className="flex items-center justify-between">
                {isLessonAvailable ? (
                    <span className="text-sm text-blue-500 flex items-center gap-2">
                    <CheckCircle size={20}/>
                    Conteúdo Liberado
                    </span>
                ) : (
                    <span className="text-sm text-orange-500 flex items-center gap-2">
                    <Lock size={20}/>
                    Em Breve
                </span>
                )}
                <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
                {props.type === 'live' ? 'AO VIVO' :  'AULA PRÁTICA'}
                </span>
            </header>
            <strong className="text-gray-200 mt-5 block">
            {props.title}
            </strong>
        </div>
    </Link>   
    )
}