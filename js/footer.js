class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        
    <footer>
    <p>&copy; 2023 Loughlin Craig</p>
    <p>Student Number: 464889419</p>
    <p>
      <a href="http://jigsaw.w3.org/css-validator/check/referer">
          <img style="border:0;width:88px;height:31px"
              src="http://jigsaw.w3.org/css-validator/images/vcss"
              alt="Valid CSS!" >
      </a>
  </p>
  </footer>
      `;
  }
}
customElements.define("footer-component", Footer);
