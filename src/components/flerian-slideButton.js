class FlerianSlideButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});

    this.attr = {
      color: this.getAttribute("flerian-color"),
      size: this.getAttribute("flerian-size"),
      img: this.getAttribute("flerian-img"),
      media: this.getAttribute("flerian-limit"),
      right: this.getAttribute("flerian-right-position"),
      bottom: this.getAttribute("flerian-bottom-position"),
    }

  }

  mediaQueryCondition(control, size, position) {
    if(control !== false) {
      let limit = parseFloat(control);
      return (`
      @media (min-width: ${control}) {
        :host {
          right: unset;
          left: calc(50% + ${limit / 2}px - (${size} + ${position}));
        }
      }
      `)
    }else {
      return "";
    }
  }

  templateCondition(control) {
    if(control === null) {
      return "<span></span>";
    }else {
      return `<img src="${control}" alt="arrow"/>`
    }
  }

  styles() {
    let color = this.attr.color;
    if(color === null) {
      color = ["#FF0075", "#12CAD6"];
    }else if(color.split(" ").length < 2) {
      color = ["#FF0075", color];
    }else {
      color = color.split(" ");
    }

    let size = this.attr.size;
    if(size === null) {
      size = ["50px", "50px"];
    }else if(size.split(" ").length !== 2) {
      size = ["50px", "50px"];
    }else {
      size = size.split(" ");
    }let sizeNumber = [parseFloat(size[0]), parseFloat(size[1])]

    let limit = this.attr.media;
    if(limit === null) {
      limit = false;
    }

    let right = (this.attr.right) ?this.attr.right :"15px";
    let bottom = (this.attr.bottom) ?this.attr.bottom :"15px";

    const css = `
    <style>
      :host {
        width: ${size[0]};
        height: ${size[1]};
        border-radius: 10px;
        background-color: ${color[1]};
        display: block;
        position: fixed;
        bottom: ${bottom};
        right: ${right};
        box-shadow: -2px 2px 5px -1px rgb(0 0 0 / 50%);
        z-index: 1000;

        transform: translateY(80px);
        transition-property: transform, opacity;
        transition-duration: 0.5s;
        transition-timing-function: ease-in-out;
        opacity: 0;
      }
      .container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      span {
        display: block;
        width: 0;
        height: 0;
        border-radius: ${sizeNumber[0] * (24/100)}px;
        border-bottom: ${sizeNumber[1] * (60/100)}px solid ${color[0]};
        border-left: ${sizeNumber[0] * (30/100)}px solid transparent;
        border-right: ${sizeNumber[0] * (30/100)}px solid transparent;
      }
      img {
        width: 60%;
      }
      
      ${this.mediaQueryCondition(limit, size[0], right)}
      </style>
    `;

    return css
  }

  template() {
    const html = `
      ${this.styles()}
      <div class="container">
        ${this.templateCondition(this.attr.img)}
      </div>
    `;

    const template = document.createElement("template");
    template.innerHTML = html;
    return template;
  }



//Esta funcion activa la aparicion y desaparicion del boton dependiendo de la posicion en "window.scrollY"
  scrollEvent = (e) => {
    let value = window.scrollY;
    if(value === 0) {
      this.style.transform = "translateY(80px)"
      this.style.opacity = "0"
    }else {
      this.style.transform = "translateY(0px)"
      this.style.opacity = "1"
    }
  }
  //Esta funcion ejecuta el scroll de la pantalla hasta el inicio de la pagina (window.scrollY = 0)
  scrollPage(e) {
    window.scroll({top: 0, behavior: "smooth"});
  }

  //Esta funcion ejecuta toda la funcionalidad del boton. dispara todas las funciones de funcionalidad
  componentExe() {
    document.addEventListener("scroll", this.scrollEvent);
    this.addEventListener("click", this.scrollPage);
  }

  connectedCallback() {
    const tem = this.template();
    this.shadowRoot.appendChild(tem.content.cloneNode(true));

    this.componentExe()
  }
  disconnectedCallback() {
    document.removeEventListener("scroll", this.scrollEvent);
    this.removeEventListener("click", this.scrollPage);
  }
}

window.customElements.define("flerian-slide-button", FlerianSlideButton);


/////////////////////////////////////
/* 
--flerian-color="CssColor CssColor"; Este atributo define el color que tendra la flecha y el boton (el primer valor define la flecha, el segundo el boton). Si el atributo de imagen esta activo, solo se le debe pasar un valor a 'flerian-color'
--flerian-size="CssSize CssSize"; Este atributo define la medida en ancho y alto del boton (el primer valor define el ancho y el segundo el alto)
--flerian-img="ruta" define la ruta de imagen para el boton
--flerian-limit="px" define el posicionamiento final del boton con respecto al crecimiento del ancho de pantalla
--flerian-right-position="px" definen la posicion del boton con respecto al viewport
--flerian-bottom-position="px" definen la posicion del boton con respecto al viewport
*/