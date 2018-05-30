import React, { Component } from 'react';
import WebFont from 'webfontloader';
import dom2image from 'dom-to-image';
import fileSaver from 'file-saver';

let fonts = [['Nixie One', 'serif'], ['Comfortaa', 'san-serif'], ['Megrim', 'san-serif'], ['Righteous', 'san-serif'], ['Alfa Slab One', 'slab-serif']]

fonts.map(font => {
  WebFont.load({
    google: {
      families: font
    }
  });
})

export default class App extends Component {
    
  constructor() {
    super();

    this.state = {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbviSJcx2a4U01BRinV9aTIrdxUBzy9ZCHs2WdNG49aanJilZG',
      text: 'Cats!',
      color: '#000000',
      fonts,
      selected: 'Nixie One',
      size: '3'
    }
  }

  handleImageSrc({ target }) {
    this.setState({ image: target.value });
  }

  handleUpload({ target }) {
    const reader = new FileReader();
    
    reader.readAsDataURL(target.files[0]);
    
    reader.onload = () => {
      this.setState({ image: reader.result });
    };
  }

  handleTextChange({ target }) {
    this.setState({ text: target.value });
  }

  handleColorChange({ target }) {
    this.setState({ color: target.value });
  }

  handleFontChange({ target }) {
    this.setState({ selected: target.value });
  }

  handleExport() {
    dom2image.toBlob(this.imageExport).then(blob => {
      fileSaver.saveAs(blob, 'meme.png');
    });
  }

  handleSizeChange({ target }) {
    this.setState({ size: target.value });
  }

  render() {
    const { image, text, color, fonts, selected, size } = this.state;

    return (
      <section>
        <h1>Pictures and Stuff</h1>
        <fieldset>
          <div className="row">
            <input onChange={event => this.handleImageSrc(event)} placeholder="Image URL"/>
            <span> or </span>
            <input
              type="file"
              onChange={event => this.handleUpload(event)}
            />
          </div>
          <div className="row">
            <select 
              value={selected}
              onChange={event => this.handleFontChange(event)}
            >
              {fonts.map(font => <option key={font[0]}> {font[0]}</option>)}
            </select>
            <input 
              type="range" 
              onChange={event => this.handleSizeChange(event)}
              min=".5"
              max="10"
              step="0.01"
            />
            <input
              type="color"
              onChange={event => this.handleColorChange(event)}
            />
          </div>
          <div>
            <textarea
              type="text"
              placeholder="Write you meme here"
              onChange={event => this.handleTextChange(event)}
            />
          </div>
        </fieldset>
        <div className="container" ref={node => this.imageExport = node}>
          <p style={{ color, fontFamily: selected, fontSize: size + 'em'}}>{text}</p>
          <img src={image}/>
        </div>
        <div>
          <button onClick={() => this.handleExport()}>Export</button>
        </div>
      </section>
    );
  }
}