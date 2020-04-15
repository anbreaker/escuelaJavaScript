const getHas = () => location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'; // traigo el id ['','1','']

export default getHas;
