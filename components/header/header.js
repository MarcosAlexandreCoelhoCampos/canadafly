export default function componentHeader() {
  class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <header>
        <div class="container header">
          <a href="../index.html">
            <h1>CanadaFly</h1>
          </a>
          <nav>
            <ul class="menu-desktop">
              <li><a href=""> Canadá </a></li>
              <li><a href=""> Imigração </a></li>
              <li><a href=""> Serviços </a></li>
              <li><a href=""> Sobre </a></li>
            </ul>
            <div class="menu-mobile">
              <img src="../../imgs/menu-button.svg" alt="Botão de menu">
              <ul>
                <li><a href=""> Canadá </a></li>
                <li><a href=""> Imigração </a></li>
                <li><a href=""> Serviços </a></li>
                <li><a href=""> Sobre </a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    `;
    }
  }
  customElements.define("header-component", Header);
}
