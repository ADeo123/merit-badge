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
  };

  static styles = css`
    :host{
      background-color: blue; 
    }
    
    .badge {
      border: 2px dashed black;
      border-radius: 50%; 
      background-color: navajowhite;
      color: black; 
      text-align: center;
      line-height: 200px 
      padding: 50px; 
      margin: 20px;
      height: 700px;
      color: black;
    }
    
    .date{
      justify-content: center;
      color: black;  
      padding: 100px 100px 100px 100px 
    }

    .icon{
      justify-content: center; 
      color: black
    }

    .title{
      justify-content: center;

    }

    .detailsIcon{
      justify-content: right; 
      size: 500px;
    }

    .skillsIcon{
      justify-content: center; 
      size: 500px
    }

    .verificationLinkIcon{ 
      justify-content: left; 
      size: 500px;
    }
  `;

  constructor() {
    super();
    this.header ="Testing Header";
    this.date = "April 20th, 2023";
    this.logo = "communication:business";
    this.title = "Art of the Middle Ages";
    this.iconOne= "verified-user";
    this.iconTwo= "add";
    this.iconThree="image:details";
    
  }




  render() {
    return html`
      <div class="badge">
        <h2 id="date" title="date">${this.date}</h2>
        <simple-icon class="icon">${this.logo}</simple-icon>
        <h2 class="title">${this.title}</h1>
        <simple-icon class="detailsIcon" icon="${this.iconThree}"> </simple-icon>
        <simple-icon class="skillsIcon" icon="${this.iconTwo}"> </simple-icon> 
        <simple-icon class="verificationLinkIcon" icon="${this.iconOne}"> </simple-icon>
      </div>
    `;
  }
}

customElements.define("merit-badge", MeritBadge);
