import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/absolute-position-behavior/absolute-position-behavior.js";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icon-button.js";

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
    skills:{type: Array},
    activeNode: {type: Object},
    activeNodeTwo: {type: Object},
    skillsOpened: {type: Boolean},
    details: {type: Array},
    detailsOpened: {type: Boolean},
    titleWordOne: {type: String},
    titleWordTwo: {type: String},
    titleWordThree: {type: String},
    titleWordFour: {type: String},
    titleWordFive: {type: String},
    titleWordSix: {type: String},
  };

  static styles = css`
    
    :host{
      --stichingColor: black; 
      --lockedBackgroundColor: gray; 
      --fontColor: black; 
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
      box-shadow: 0 0 0 5px var(--simple-colors-default-theme-brown-1), 1px 0px 5px 0px ; 
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
      box-shadow: 0 0 0 5px var(--simple-colors-default-theme-grey-9), 1px 0px 5px 0px ; 
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

    .body {
      justify-content: center; 
      font-size: 45px;
      color: 4px solid black; 
   }

    path {
      fill: transparent;
      align: center;
   }

    text {
      fill: black;
      align: right; 
    }

    .skills {
      background-color: grey;
      padding: 10px;
      margin: 5px;
      border: 4px solid black;
      width: 100%;
      min-width: 100px;
    }

    .detailsTwo{
      background-color: grey;
      padding: 10px;
      margin: 5px;
      border: 4px solid black;
      width: 100%;
      min-width: 100px;
    }
    
    .curvedTitle {
      position: relative;
      width: 100px;
      height:100px;
      margin: 0 auto;
      font-size: 35px;
    }
    
    .curvedTitle span {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 70px;
      height: 300px;
      margin-left: -35px;
      line-height: 530px; 
      text-align: center;
      transform-origin: top center;
    }
    
    .curvedTitle span:nth-of-type(1)  {
      transform: rotate(37deg);
    }
    .curvedTitle span:nth-of-type(2)  {
      transform: rotate(24deg);
    }
    .curvedTitle span:nth-of-type(3)  {
      transform: rotate(13deg);
    }
    .curvedTitle span:nth-of-type(4)  {
      transform: rotate(1deg);
    }
    .curvedTitle span:nth-of-type(5)  {
      transform: rotate(-15deg);
    }
    .curvedTitle span:nth-of-type(6)  {
      transform: rotate(-39deg);
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
    this.skills = ['Computers', 'Business','Biology'];
    this.details = ['JavaScript', 'Management', "Science"];
    this.activeNode = null;
    this.skillsOpened = false;
    this.detailsOpened = false;
    this.titleWordOne = "The";
    this.titleWordTwo = "Art";
    this.titleWordThree = "of";
    this.titleWordFour = "The";
    this.titleWordFive = "Middle";
    this.titleWordSix = "Ages";
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
    }
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this.activeNode = this.shadowRoot.querySelector("#skillList");
    this.activeNodeTwo = this.shadowRoot.querySelector("#detailList");
  }

  skillClick(e) {
    this.skillsOpened = !this.skillsOpened;
    this.detailsOpened = false; 
  }

  detailsClick(e) {
    this.detailsOpened = !this.detailsOpened;
    this.skillsOpened = false; 
  }

  render() {
    return html`  

      <button @click="${this.unlockButton}"> Toggle Lock </button>

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
  
        <h2 class="curvedTitle">
            <span class="char1">${this.titleWordOne}</span>
            <span class="char2">${this.titleWordTwo}</span>
            <span class="char3">${this.titleWordThree}</span>
            <span class="char4">${this.titleWordFour}</span>
            <span class="char5">${this.titleWordFive}</span>
            <span class="char6">${this.titleWordSix}</span>
        </h2>

        <a href="https://vercel.com/login" target=”_blank”>
            <simple-icon class="verificationLinkIcon" icon="${this.iconOne}"></simple-icon>
        </a>

        <badge-sticker id="skillList">
          <simple-icon-button icon="${this.iconTwo}" @click="${this.skillClick}"></simple-icon-button>
        </badge-sticker>
       
        <badge-sticker id="detailList">
          <simple-icon-button icon="${this.iconThree}" @click="${this.detailsClick}"></simple-icon-button>
        </badge-sticker>
          
        <absolute-position-behavior
          justify
          position="bottom"
          allow-overlap
          sticky
          auto
          .target="${this.activeNode}"
          ?hidden="${!this.skillsOpened}">
            <ul class="skills">${this.skills.map(item => html`<li>${item}</li>`)}</ul>
        </absolute-position-behavior>

        <absolute-position-behavior
          justify
          position="bottom"
          allow-overlap
          sticky
          auto
          .target="${this.activeNodeTwo}"
          ?hidden="${!this.detailsOpened}">
           <ul class="detailsTwo">${this.details.map(item => html`<li>${item}</li>`)}</ul>
        </absolute-position-behavior>
    `;
  }
}

customElements.define("merit-badge", MeritBadge);
