
function getUsers(page) {
    let data = localStorage.getItem(`users-page-${page}`);
    if (data) {
        return new Promise(resolve => {
            // alert(`Página ${page} cargada desde LocalStorage`);
            resolve(JSON.parse(data));
        });
    } else {
        let url = `https://reqres.in/api/users?page=${page}`;
        return new Promise(resolve => {
            try {
                fetch(url).then(res => {
                    res.json().then(response => {
                        let dataToSave = JSON.stringify(response);
                        localStorage.setItem(`users-page-${page}`, dataToSave);
                        resolve(response);
                    });
                });
            } catch (error) {
                resolve({ error: error });
            }
        });
    }
}