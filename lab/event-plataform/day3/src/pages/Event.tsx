import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {

    // useParams<{nome: tipo}>()
    const { slug } = useParams<{ slug: string}>()

    return (
        // Flex-col = flex-direction: column. Os elementos ficam um embaixo do outro
        // Flex-1 = estica o tamanho ao máximo possível
        // min-h-screen = Altura mínima na tela. Nesse caso, 100vh = ocupa toda a altura e se o conteúdo exceder, cria uma barra de rolagem
        <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-1">
            {/* lessonSlug é recuperada no component Video.tsx*/}
            { slug ? <Video lessonSlug={slug}/>  
            : <div className="flex-1" />}
            <Sidebar />
        </main>
        </div>
        )
}