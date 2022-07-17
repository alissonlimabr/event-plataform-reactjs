import { Logo } from "./Logo";

export function Header() {
    return (
        // Cores personalizadas definidas no tailwind.config.js
        //  border-b = borda de 1 px
        //  w-full = width full
        //  flex = display flex
        // py-5 = padding vertical de 20px. Para calcular em px tem que multiplicar por 4.
        
        <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600" >
            <Logo />
        </header>
        )
}