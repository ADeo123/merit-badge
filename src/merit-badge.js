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
    
    
    .badge {
      border: 2px dashed navy;
      border-radius: 50%; 
      background-color: navajowhite;
      color: black; 
      text-align: center;
      line-height: 200px 
      padding: 50px; 
      margin: 20px;
      height: 400px;
      width: 400px;
      color: black;
      padding: 50px 50px 50px 50px;
    }
    
    .date{
      
    }

    .logo{
      justify-content: center; 
      color: black;
    
    }

    .title{
      justify-content: center;
      padding 100px; 
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


    //Curved Text Attempt: 

    
    
    .char1 { transform: rotate(6deg); }
    .char2 { transform: rotate(12deg); }
    .char3 { transform: rotate(18deg); }
    .char4 { transform: rotate(24deg); }
    .char5 { transform: rotate(30deg); }
    .char6 { transform: rotate(36deg); }
    .char7 { transform: rotate(42deg); }
    .char8 { transform: rotate(48deg); }
    .char9 { transform: rotate(54deg); }
    .char10 { transform: rotate(60deg); }
    .char11 { transform: rotate(66deg); }
    .char12 { transform: rotate(72deg); }
    .char13 { transform: rotate(78deg); }
  `;

  constructor() {
    super();
    this.header = "Testing Header";
    this.date = "April 23, 2023";
    this.logo = "https://static.thenounproject.com/png/65999-200.png";
    this.title = "Art of the Middle Ages";
    this.iconOne = "verified-user";
    this.iconTwo = "add";
    this.iconThree = "image:details";
  }

  
  processText(text) {
    // empty whats there
    this.shadowRoot.querySelector(".date").innerHTML = "";
    // loop through text to process and convert to span tags
    for (var i = 0; i < text.length; i++) {
      let tag = document.createElement("span");
      if (text.charAt(i).match(/[a-z]/i)) {
        tag.classList.add("letter");
        tag.innerText = text.charAt(i);
      } else {
        tag = document.createTextNode(text.charAt(i));
      }
      this.shadowRoot.querySelector(".date").appendChild(tag);
    }
  }



  render() {
    return html`
      <div class="badge">
        <h2 class="curvedDate">
            <span class="char1">A</span>
            <span class="char2">p</span>
            <span class="char3">r</span>
            <span class="char4">i</span>
            <span class="char5">l</span>
            <span class="char6">2</span>
            <span class="char7">3</span>
            <span class="char8">,</span>
            <span class="char9"></span>
            <span class="char10">2</span>
            <span class="char11">0</span>
            <span class="char12">2</span>
            <span class="char13">3</span>
        </h2>

        <!-- <h2 class="date">${this.date.split('').map((letter, index) => html`<span class="char${index+1}">${letter}</span>`)}</h2> -->
        <img src="${this.logo}"class="logo" >
        <h2 class="title">${this.title}</h1>
        <simple-icon class="detailsIcon" icon="${this.iconThree}"> </simple-icon>
        <simple-icon class="skillsIcon" icon="${this.iconTwo}"> </simple-icon> 
        <simple-icon class="verificationLinkIcon" icon="${this.iconOne}"> </simple-icon>
      </div>
    `;
  }
}

customElements.define("merit-badge", MeritBadge);
