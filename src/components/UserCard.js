
class UserCard extends HTMLElement {

    constructor() {
        super();
        this.user;
    }

    static get observedAttributes() {
        return ['user']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {
        switch (nameAttr) {
            case 'user':
                this.user = JSON.parse(newValue);
                break;
            default: this.user = new User();
        }
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="user-card-container">
            <div class="user-info-container" style="background-image: url('${this.user.avatar}');">
                <div class="user-info">
                    <span class="user-name">${this.user.first_name} ${this.user.last_name}</span>
                    <span class="user-email">${this.user.email}</span>
                </div>
            </div>
            <button class="btn-open-detail">Ver detalle</button>
        </div>
        `;
    }

}

window.customElements.define("user-card", UserCard);