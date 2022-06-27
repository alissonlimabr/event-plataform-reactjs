import LogoFooter from "./LogoFooter";

export function Footer() {
  return (
    <footer className="bg-gray-900 grid grid-cols-3 justify-items-between">
      <div className="m-6">
        <LogoFooter />
      </div>
        <div className="text-center py-7 text-[16px]">
        <p> Todos os direitos reservados</p>
        </div>
        <div className=" text-end py-7 mx-6 text-[16px]">
        <p>Política de privacidade</p>
      </div>
    </footer>
  );
}
