import LogoFooter from "./LogoFooter";

export function Footer() {
  return (
    <footer className="flex items-center border-t-2 border-t-gray-600 mx-6 ">
        <div className="mr-6"> 
          <LogoFooter />
        </div>
        <div className="w-full my-6 flex justify-between ">
          <p className="text-gray-300 text-[16px]"> Rocketseat - Todos os direitos reservados</p>
          <p className="text-gray-300 text-[16px]">Políticas de privacidade</p>
        </div>
    </footer>
  );
}
