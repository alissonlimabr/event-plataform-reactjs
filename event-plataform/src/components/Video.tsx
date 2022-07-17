/* <div className="bg-black" = Bordas pretas do vídeo */
// aspect-video = utiliza o aspect-ratio (padrão 16:9)
// w-full = largura full
// h-full = altura full
// rounded-full = totalmente arredondado
// max-w-[1100px] = define a largura máxima e não pode exceder esse valor
// max-h-[1100px] = define a altura máxima e não pode exceder esse valor
// mx- = margin left e margin right
// mx-auto = centraliza a div horizontalmente
// items start = alinhamento mais acima possível
// gap-16 = espaçamento entre os elementos
// flex-1 = a div assume o máximo de espaço disponível
// text-2xl = font size 24px
// mt-4 = margin-top de 16px
// flex-col = ordena um elemento embaixo do outro
// text-sm = fonte de 14px
// leading-relaxed = ajuste no espaçamento das linhas
// transition-colors = transição (padrão 150ms)
// grid-cols-2 = cria um grid com duas colunas com o mesmo tamanho
// overflow-hiden = elemento interno não sobrepõe o container
// flex items-stretch = expande/estica a altura de cada item para ser a maior possível dentro do container

import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";

import '@vime/core/themes/default.css';
import { useGetLessonBySlugQuery } from "../graphql/generated";
import { Footer } from "./Footer";





// Recupera lessonSlug do Event.tsx
interface VideoProps {
    lessonSlug: string;
}

export function Video(props: VideoProps) {
    // Query com variáveis
    const { data } = useGetLessonBySlugQuery({
        variables: {
            slug: props.lessonSlug
        }
    })

    if (!data || !data.lesson)  {
        return (
        <div className="flex-1">
            <p>Carregando...</p>
        </div>
        )
    }

    return (
        <div className="flex-1">
            
            {/* Borda bg-black */}
            <div className="bg-black flex justify-center">
                {/* Player de Vídeo */}
                <div className="bg-white w-full h-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player>
                        <Youtube videoId={data.lesson.videoId} key={data.lesson.videoId}/>
                        <DefaultUi />
                    </Player>
                </div>
            </div>



            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="bg-gray-900 flex items-start gap-16">
                    <div className="flex-1">
                        {/* Título do vídeo + Descrição */}

                        <h1 className="text-2xl font-bold">{data.lesson.title}</h1>

                        <p className="mt-4 text-gray-200 leading-relaxed">
                            {data.lesson.description}
                        </p>

                    {/* Se a data.lesson.teacher existir, exibe as informações */}
                    {data.lesson.teacher && (
                            // Avatar do GitHub
                        <div className="flex items-center gap-4 mt-6">
                        <img 
                        className="h-16 w-16 rounded-full border-2 border-blue-500"
                        src={data.lesson.teacher.avatarURL}
                        alt=""
                        />
                        {/* Biografia */}
                        <div className="leading-relaxed">
                        <strong className="font-bold text-2xl block">
                            {data.lesson.teacher.name}
                        </strong>
                        <span className="text-gray-200 text-sm block">           
                            {data.lesson.teacher.bio}    
                        </span>
                        </div>
                    </div>
                    )}

                    </div>

                    <div className="flex flex-col gap-4">
                        
                    {/* BOTOES */}

                    <a href="https://discord.com/invite/rocketseat" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                        <DiscordLogo size={24}/>
                        Comunidade do Discord
                    </a>

                    <a href="https://www.rocketseat.com.br/ignite" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 transition-colors hover:text-gray-900">
                        <Lightning size={24} />
                        Acesse o conteúdo
                    </a>
                    </div>
                </div>
                
                {/* Cards de material complementar */}

                <div className="gap-8 mt-20 grid grid-cols-2 justify-items-center">
                <a href="https://www.figma.com/file/tETz4ULxeBob2ep5r1srdS/Plataforma-de-evento---Ignite-Lab-(Community)?node-id=24%3A2" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                
                                
                    {/* div box esquera do elemento(ícone) */}
                    <div className="bg-green-700 h-full p-6 flex items-center">
                        <FileArrowDown size={40}/>
                    </div>

                    {/* div box central (conteúdo) */}
                    <div className="py-6 leading-relaxed">
                    <strong className="text-2xl"> Material Complementar</strong>
                    <p className="text-sm text-gray-200 mt-2">
                        Acesse o material complementar para acelerar o seu desenvolvimento
                    </p>
                    </div>

                    {/* div box direita (flecha) */}
                    <div className="h-full p-6 flex items-center">
                        <CaretRight size={24} />
                    </div>
                </a>

                <a href="https://drive.google.com/drive/folders/1mxWnvlqmH7MbVRv2Na9xFNgCQCygM1iR" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                
                                
                    {/* div box esquera do elemento(ícone) */}
                    <div className="bg-green-700 h-full p-6 flex items-center">
                        <FileArrowDown size={40}/>
                    </div>

                    {/* div box central (conteúdo) */}
                    <div className="py-6 leading-relaxed">
                    <strong className="text-2xl"> Wallpapers Exclusivos</strong>
                    <p className="text-sm text-gray-200 mt-2">
                        Baixe Wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                    </p>
                    </div>

                    {/* div box direita (flecha) */}
                    <div className="h-full p-6 flex items-center">
                        <CaretRight size={24} />
                    </div>
                </a>

                </div>
            </div>
            <footer>
                <Footer />  
            </footer>
            </div>
        )
}
