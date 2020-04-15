// Importo los templates creados

import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHas from '../utils/getHas';
import resolveRoutes from '../utils/resolveRoutes';

//Rutas que se utilizaran en la aplicacion

const routes = {
    '/': Home,
    '/:id': Character,
    '/Constac': 'Contact',
};

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
    let hash = getHas();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
};

export default router;
