import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/absolute-position-behavior/absolute-position-behavior.js";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class MeritBadge extends LitElement {
  static properties = {
    header: { type: String },
    date: { type: String },
    logo: { type: String },
    title: { type: String },
    iconOne: { type: String },
    iconTwo: { type: String },
    iconThree: { type: String },
    locked: {type: Boolean},
  };

  static styles = css`
    
    :host{
      --stichingColor: blue; //css variable for the sitching color
      --lockedBackgroundColor: gray; //background color for the locked version of the card. 
      --meritBadgeBackgroundColor: navajowhite; //background color for the whole badge 
      --fontColor: black; //font color
    }


    .badge {
      border: 2px dashed var(--stichingColor) ;
      border-radius: 50%; 
      background-color: navajowhite;
      color: var(--fontColor); 
      text-align: center;
      line-height: 200px 
      padding: 50px; 
      margin: 20px;
      height: 400px;
      width: 400px;
      color: black;
      padding: 50px 50px 50px 50px;
    }
    
    .curvedDate{
      align-content: center;
      color: black; 
    }

    .logoImage{
      align-content: center; 
      color: black; 
    }

    .title{
      align-content: center; 
      font-size: 30px;
    }

    .detailsIcon{
      justify-content: right; 
    }

    .skillsIcon{
      justify-content: center; 
      size: 500px
    }

    .verificationLinkIcon{ 
      justify-content: left; 
    }

    .body {
      justify-content: center; 
      font-size: 45px;
      color: 2px black; 
   }

    path {
      fill: transparent;
      align: center;
   }

    text {
      fill: black;
      align: right; 
    }
  `;

  constructor() {
    super();
    this.header = "Testing Header";
    this.date = "April 25, 2023";
    this.logo = "https://static.thenounproject.com/png/65999-200.png";
    this.title = "Art of the Middle Ages";
    this.iconOne = "verified-user";
    this.iconTwo = "add";
    this.iconThree = "image:details";
    this.locked = true;
  }
  
  unlockButton(){
    this.locked = !this.locked;
    if(this.locked){
      this.shadowRoot.querySelector('.badge').style.background = 'gray';
    }else{
      this.shadowRoot.querySelector('.badge').style.background = 'blue';
    }
    
  }



  render() {
    return html`  

      <button @click="${this.unlockButton}"> Toggle Lock </button>

      <div class="badge"> 
        
      <div class="curvedDate"> 
        <svg viewBox="0 0 500 100" class="body">
          <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
            <text width="100">
              <textPath xlink:href="#curve"startOffset="50%" text-anchor="middle">
                ${this.date}
              </textPath>
           </text>
        </svg>
      </div>

        <!-- <h2 class="date">${this.date.split('').map((letter, index) => html`<span class="char${index+1}">${letter}</span>`)}</h2> -->
        
        <div class="logoImage">
        <img src="${this.logo}"class="logo">
        </div>

        <h2 class="title">${this.title}</h1>
        
        <!-- <div class="curvedTitle">
        <svg viewBox="0 0 500 500" class="body" height="1000" width="1000">
          <path id="curve2" d="M0,50 a1,1 0 0,0 100,0" />
            <text width="100">
              <textPath xlink:href="#curve2" >
                ${this.title}
              </textPath>
           </text>
        </svg>
        </div> -->

        <div class="details">
          <simple-icon class="detailsIcon" icon="${this.iconThree}"> </simple-icon> 
        </div>

        <div class="skills">
          <simple-icon class="skillsIcon" icon="${this.iconTwo}"> </simple-icon> 
        </div>

        <div class="verification">
          <simple-icon class="verificationLinkIcon" icon="${this.iconOne}"> </simple-icon>
        </div>
        
      </div>
    `;
  }
}

customElements.define("merit-badge", MeritBadge);
