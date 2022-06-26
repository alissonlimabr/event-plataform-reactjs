// Element = Qual elemento mostrar enquanto estiver nessa rota
// :slug = represent uma informação dinâmica. No caso, o slug que pode sofrer alterações
import { Route, Routes } from "react-router-dom";
import { Event } from "../pages/Event";

export function Router() {
    return (
        <Routes>
        {/* <Route path="/" element={<h1>Página Home ainda não criada</h1>} /> */}
        
        {/* Rota temporária para o nosso "home" */}
        <Route path="/" element={<Event />} />

        {/* <Route path="/event" element={<Event />} /> */}
        <Route path="/event/lesson/:slug" element={<Event />} />

    </Routes>
    );
}