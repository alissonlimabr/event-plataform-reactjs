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
import classnames from 'classnames';
import { isPast, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CheckCircle, Lock } from 'phosphor-react';
import { Link, useParams } from 'react-router-dom';

// Define as propriedades do component desse component
interface LessonProps {
    title: string;
    slug: string;
    avaliableAT: Date;
    type: 'live' | 'class'
}

// exporta a função e recebe as propriedades de LessonProps
export function Lesson(props: LessonProps) {

    const { slug } = useParams<{slug : string }>()

    const isLessonAvailable = isPast(props.avaliableAT);
    const isLessonAvailableDateFormat = format(props.avaliableAT, "EEEE ' • ' d ' de ' MMMM ' • ' k'h'mm", {
        locale: ptBR,
    });

    // isActiveLesson corresponde à aula ativa da url
    const isActiveLesson = slug === props.slug

    return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
        <span className="text-gray-300">
        {isLessonAvailableDateFormat}
        </span>

        

        {/* Alternativa1 para css condicional no tailwind. Se a lesson corresponder à aula ativa (props.slug), modifica a cor de fundo da div 
            
            <div className={`rounded border border-gray-500  p-4 mt-2 group-hover:border-green-500 ${isActiveLesson ? 'bg-green-500' : ''}`}>
        
            Mas é preferível utilizar a biblioteca classenames (npm i classnames)
        */}

        <div className={classnames('rounded border border-gray-500  p-4 mt-2 group-hover:border-green-500', {
            'bg-green-500' : isActiveLesson
        })}>
            <header className="flex items-center justify-between">
                {isLessonAvailable ? (
                    <span className={classnames('text-sm flex items-center gap-2', {
                        'text-white' : isActiveLesson,
                        'text-blue-500' : !isActiveLesson
                    })}>
                    <CheckCircle size={20}/>
                    Conteúdo Liberado
                    </span>
                ) : (
                    <span className="text-sm text-orange-500 flex items-center gap-2">
                    <Lock size={20}/>
                    Em Breve
                </span>
                )}
                <span className={classnames('text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold', {
                    'border-white' : isActiveLesson,
                    'border-green-300' : !isActiveLesson
                })}>
                {props.type === 'live' ? 'AO VIVO' :  'AULA PRÁTICA'}
                </span>
            </header>
            {/* 
                className={classnames('css que nunca muda'), {
                    css : condicional,
                    css:  !condicional // diferente do valor
                }}
            */}
            <strong className={classnames(' mt-5 block', {
                'text-white' : isActiveLesson,
                'text-gray-200' : !isActiveLesson

})}>
            {props.title}
            </strong>
        </div>
    </Link>   
    )
}