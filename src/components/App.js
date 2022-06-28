
function loadData() {
    let containerUserList = document.getElementById('users-list');
    let users = [];
    getUsers(1).then(firstResponse => {
        users.push(...firstResponse.data);
        getUsers(2).then(secondResponse => {
            users.push(...secondResponse.data);
            users.forEach(user => {
                let userCard = new UserCard();
                userCard.setAttribute('user', JSON.stringify(user));
                userCard.onclick = () => showUserModal(user);
                containerUserList.appendChild(userCard);
            });
        });
    });
}

function showUserModal(user) {
    let userModal = new UserModalDetail();
    userModal.setAttribute('user', JSON.stringify(user));
    userModal.setAttribute('id', 'user-modal-detail');
    let container = document.getElementById('container');
    container.appendChild(userModal);
}

function closeUserModal() {
    let modal = document.getElementById('user-modal-detail');
    modal.parentNode.removeChild(modal);
}