
function getUsers(page) {
    let url = `https://reqres.in/api/users?page=${page}`;
    return new Promise(resolve => {
        try {
            fetch(url).then(res => resolve(res.json()));
        } catch (error) {
            resolve({ error: error });
        }
    });
}