
class UserModalDetail extends HTMLElement {

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
        <div class="user-modal-detail">
            <div class="user-modal-detail-container">
                <div class="user-data-container">
                    <div class="user-info-container">
                        <img src="${this.user.avatar}" alt="${this.user.first_name} ${this.user.last_name} avatar" class="user-img">
                        <span class="user-name">${this.user.first_name} ${this.user.last_name}</span>
                        <span class="user-email">${this.user.email}</span>
                        <span class="extra-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae molestie urna, vitae laoreet
                            augue. Praesent ut lorem turpis. Aenean vehicula ex a facilisis suscipit. Pellentesque nunc ex,
                            convallis non mauris eu, lobortis vestibulum metus. Aliquam nibh diam, efficitur ut viverra sit
                            amet, fermentum porttitor turpis.
                        </span>
                        <button class="btn-follow">Follow</button>
                    </div>
                    <div class="user-image-bg" style="background-image: url('${this.user.avatar}');"></div>
                </div>
                <button class="close-button" onclick="closeUserModal()">
                    <img src="assets/close.svg" alt="Close" width="32">
                </button>
            </div>
        </div>
        `;
    }

}

window.customElements.define("user-modal-detail", UserModalDetail);