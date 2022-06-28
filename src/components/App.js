
function loadData() {
    let containerUserList = document.getElementById('users-list');
    let users = [];
    getUsers(1).then(firstResponse => {
        users.push(...firstResponse.data);
        getUsers(2).then(secondResponse => {
            users.push(...secondResponse.data);
            users.forEach(user => {
                let userTag = document.createElement('p');
                userTag.textContent = `${user.first_name} ${user.last_name}`;
                containerUserList.appendChild(userTag);
            });
        });
    });
}