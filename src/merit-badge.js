import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/absolute-position-behavior/absolute-position-behavior.js";
import "@lrnwebcomponents/simple-icon";

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
      background: white; 
    }
    
    .badge {
      height: 300px;
      border-radius: 50%; 
      background-color: navajowhite;
      color: black; 
      text-align: center;
      line-height: 200px 
    }

    .date{
      justify-content: center;
      color: black;  
    }

    .icon{
      justify-content: center; 
      background-color: blue; 
    }

    .title{
      justify-content: center; 
      color: black; 
    }

    .detailsIcon{

    }

    .skillsIcon{

    }

    .verificationLinkIcon{ 

    }

  `;

  constructor() {
    super();
    this.header ="Testing Header";
    this.date = "4/17/2023";
    this.logo = "communication:business";
    this.title = "Communication in Business";
  }

  render() {
    return html`
      <div class="badge">
        <h2 title="date">${this.date}</h2>
        <simple-icon class="icon">${this.logo}</simple-icon>
        <h2 class="title">${this.title}</h1>
        <simple-icon class="detailsIcon"> </simple-icon>
        <simple-icon class="skillsIcon"> </simple-icon> 
        <simple-icon class="verificationLinkIcon"> </simple-icon>
      </div>
    `;
  }
}

customElements.define("merit-badge", MeritBadge);
