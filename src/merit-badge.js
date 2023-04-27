import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/absolute-position-behavior/absolute-position-behavior.js";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class MeritBadge extends LitElement {
  static properties = {
    header: { type: String },
    date: { type: String},
    logo: { type: String },
    title: { type: String },
    iconOne: { type: String },
    iconTwo: { type: String },
    iconThree: { type: String },
    locked: {type: Boolean},
    day: {type: String},
    month: {type: String},
    year: {type: String},
  };

  static styles = css`
    
    :host{
      --stichingColor: black; //css variable for the sitching color
      --lockedBackgroundColor: gray; //background color for the locked version of the card. 
      --fontColor: black; //font color
    }


    .badge {
      z-index: 5;
      top: 10px;
      left:10px; 
      position: absolute; 
      border: 2px dashed var(--stichingColor) ;
      border-radius: 50%; 
      background-color: var(--simple-colors-default-theme-brown-1);
      color: var(--fontColor); 
      text-align: center;
      line-height: 200px 
      padding: 50px; 
      margin: 20px;
      height: 400px;
      width: 400px;
      color: black;
      padding: 50px 50px 50px 50px;
      box-shadow: 0 0 0 4px var(--simple-colors-default-theme-brown-1), 2px 1px 6px 4px ; 
    }

    .lockedBadge{
      z-index: 6;
      top: 10px;
      left: 10px;
      opacity: 85%;
      position: absolute;
      border: 2px dashed var(--stichingColor) ;
      border-radius: 50%; 
      background-color: var(--simple-colors-default-theme-grey-9);
      color: var(--fontColor); 
      text-align: center;
      line-height: 200px 
      padding: 50px; 
      margin: 20px;
      height: 400px;
      width: 400px;
      padding: 50px 50px 50px 50px;
      box-shadow: 0 0 0 4px var(--simple-colors-default-theme-grey-9), 2px 1px 6px 4px ; 
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
    this.date = this.getDate();
    this.logo = "https://static.thenounproject.com/png/65999-200.png";
    this.title = "Art of the Middle Ages";
    this.iconOne = "verified-user";
    this.iconTwo = "add";
    this.iconThree = "image:details";
    this.locked = true;
  
  }

  getDate(){
    var date = new Date();
    var day = date.getDate()
    var month = date.getMonth()+1
    var year = date.getFullYear()
    return " "+ day.toString() + "/" + month.toString() + "/" + year.toString();
  }
  
  unlockButton(){
    this.locked = !this.locked;
    if(this.locked){
      this.shadowRoot.querySelector(".lockedBadge").style.visibility='visible';
      this.shadowRoot.querySelector(".badge").style.visibility='visible';
    }else{
      this.shadowRoot.querySelector(".lockedBadge").style.visibility='hidden';
      this.shadowRoot.querySelector(".badge").style.visibility='visible';
      this.shadowRoot.querySelector(".date").innerHTML = this.getDate();
    }
  }

  //
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this.activeNode = this.shadowRoot.querySelector(".skills");
  }

  //skills is stateful 
  skillClick(e) {
    this.skillsOpened = !this.skillsOpened;
  }


  render() {
    return html`  

      <button @click="${this.unlockButton}"> Toggle Lock </button>
      <button @click="${this.skillClick}"> Toggle Skills </button>

      <div class="lockedBadge">
        <img src="https://www.freeiconspng.com/thumbs/lock-icon/lock-icon-11.png">
      </div>

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
            <a href="https://www.w3schools.com/js/default.asp" target=”_blank”>
              <simple-icon class="detailsIcon" icon="${this.iconThree}"> </simple-icon>
            </a>
          </div>
  
          <div class="skills">
            <simple-icon class="skillsIcon" icon="${this.iconTwo}"> </simple-icon> 
          </div>
  
          <div class="verification">
            <a href="https://vercel.com/login" target=”_blank”>
              <simple-icon class="verificationLinkIcon" icon="${this.iconOne}"> </simple-icon>
            </a>
          </div>
        </div>

    `;
  }
}

customElements.define("merit-badge", MeritBadge);
