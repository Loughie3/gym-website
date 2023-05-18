class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      
      <header>
        <nav>
          <ul>
           <li><a href="../index.html">Home</a></li>
            <li><a href="../html/about.html">About</a></li>
            <li><a href="../html/services.html">Services</a></li>
            <li><a href="../html/contact.html">Contact</a></li>
            <li><a href="../html/meet-maurice.html">Meet Maurice</a></li>
          </ul>
        </nav>
      </header>
      <section id="hero">    
      hey
      
      </section>
    `;
  }
}
customElements.define("header-component", Header);
