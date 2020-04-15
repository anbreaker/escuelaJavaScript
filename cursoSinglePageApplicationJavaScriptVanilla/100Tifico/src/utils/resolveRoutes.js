const resolvesRoutes = (route) => {
    // validating the route / or id
    if (route.length <= 3) {
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;
    }
    return `/${route}`; // /about
};

export default resolvesRoutes;
