// Element = Qual elemento mostrar enquanto estiver nessa rota
// :slug = represent uma informação dinâmica. No caso, o slug que pode sofrer alterações
import { Route, Routes } from "react-router-dom";
import { Event } from "../pages/Event";
import { Subscribe } from "../pages/Subscribe";

export function Router() {
    return (
    <Routes>
        <Route path="/" element={<Subscribe />} />
        
        <Route path="/event" element={<Event />} />
        <Route path="/event/lesson/:slug" element={<Event />} />

    </Routes>
    );
}