import LogoFooter from "./LogoFooter";

export function Footer() {
  return (
    <footer className="bg-gray-900 flex items-center">
        <div className="px-6"> 
          <LogoFooter />
        </div>
        <div className="w-full my-6 flex justify-between ">
          <p className="px-6 text-gray-30 text-[16px]"> Rocketseat - Todos os direitos reservados</p>
          <p className="px-6 text-gray-300 text-[16px]">Política de privacidade</p>
        </div>
    </footer>
  );
}
