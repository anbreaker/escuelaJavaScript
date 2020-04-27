const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            // si es falso ejecuta la reject
            resolve('Resuelto');
        } else {
            reject('No Resuelto');
        }
    });
};

helloPromise()
    .then((response) => console.log(response))
    .then(() => console.log('hola'))
    .catch((error) => console.log);
