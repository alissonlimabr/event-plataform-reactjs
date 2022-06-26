// min-h-screen = faz com que, no nosso caso a div, ocupe no mínimo a tela toda
// bg-cover = a imagem cobre a tela inteira, independente do zoom
// bg-no-repeat = garante que a imagem não vai se repetir
// max-w-[1100px] = define a largura máxima que a div pode ocupar
// justify-between = posiciona os elementos opostamente nas extremidades da div
// leading-tight = diminui o line-height(altura) entre as linhas ()
// leading-relaxed = line-height maior
// w-full no form = Para obrigar o form a ocpar a largra máxima
import { Logo } from "../components/Logo";

// mx-auto = margin left e right auto
export function Subscribe() {
    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            {/* Div que contém a descrição e o formulário de inscrição */}
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                {/* Descrição */}
                <div className="max-w-[640px]">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                    Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong> 
                    </h1>

                    <p className="mt-4 text-gray-200 leading-relaxed">
                    Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>
                {/* Formulário de inscrição */}
                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block ">
                        Inscreva-se gratuitamente
                    </strong>
                    <form action="" className="flex flex-col gap-2 w-full">
                        <input 
                        className="bg-gray-900 rounded px-5 h-14"
                        type="text" 
                        placeholder="Seu nome completo" 
                        />

                        <input 
                        className="bg-gray-900 rounded px-5 h-14"
                        type="email" 
                        placeholder="Digite o seu e-mail" 
                        />

                        <button
                        className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-small hover:bg-green-700 transition-colors" 
                        type="submit"
                        >
                            Garantir minha vaga
                        </button>

                    </form>
                </div>
            </div>
            
            <img src="/src/assets/code-mockup.png" className="mt-10" alt="" />
        </div>
    )
}