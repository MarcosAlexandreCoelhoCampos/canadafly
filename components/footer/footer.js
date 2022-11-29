export default function componentFooter() {
  const totalSections = document.querySelectorAll("main > *").length;
  const classColor = totalSections % 2 == 0 ? "one" : "two";

  class Footer extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <footer class="${classColor}">
        <nav class="container">
          <ul>
            <li><a href="#">Canadá</a></li>
            <li><a href="#">Imigração</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Sobre</a></li>
          </ul>
        </nav>
      </footer>
      <div class="container signature ${classColor}">
        <h2 class=title> Marcos A.C Campos</h2>
      </div>
    `;
    }
  }
  customElements.define("footer-component", Footer);
}
