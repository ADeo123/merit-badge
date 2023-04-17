import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/absolute-position-behavior/absolute-position-behavior.js";

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
    .badge {
      height: 300px;
      border-radius: 50%; 
      background-color: navajowhite;
      color: black; 
      text-align: center;
      line-height: 200px 
    }
  `;

  constructor() {
    super();
    this.header = "";
    this.date = "4/17/2023";
    this.logo = "communication:business";
    this.title = "Communication in Business";
  }

  render() {
    return html`
      <div class="badge">
        <h2 title="date">${this.date}</h2>
        <simple-icon icon="${this.logo}"> </simple-icon>
        <h2 class="title">${this.title}</h1>
      </div>
    `;
  }
}

customElements.define("merit-badge", MeritBadge);
