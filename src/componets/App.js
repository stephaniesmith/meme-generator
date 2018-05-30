import React, { Component } from 'react';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
      families: ['Nixie One', 'serif']
    }
  });

  WebFont.load({
    google: {
      families: ['Comfortaa', 'sans-serif']
    }
  });

  WebFont.load({
    google: {
      families: ['Megrim', 'sans-serif']
    }
  });

  WebFont.load({
    google: {
      families: ['Righteous', 'slab-serif']
    }
  });

  WebFont.load({
    google: {
      families: ['Alfa Slab One', 'slab-serif']
    }
  });

export default class App extends Component {
    
    constructor() {
        super();

        this.state = {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbviSJcx2a4U01BRinV9aTIrdxUBzy9ZCHs2WdNG49aanJilZG',
            text: 'Cats!',
            color: '#000000',
            font: 'Nixie One'
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

    render() {
        const { image, text, color, font } = this.state;

        return (
            <section>
                <div>
                    <label>
                        Image Src:
                        <input onChange={event => this.handleImageSrc(event)}/>
                    </label>
                </div>
                <div>
                    <label>
                        Image:
                        <input
                            type="file"
                            onChange={event => this.handleUpload(event)}
                        />
                    </label>
                </div>
                <div>
                    <select>
                    <option>Fonts</option>)}
                    </select>
                </div>
                <div>
                    <input
                        type="color"
                        onChange={event => this.handleColorChange(event)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Write you meme here"
                        onChange={event => this.handleTextChange(event)}
                    />
                </div>
                {/* <div>
                    <input
                        type="text"
                    />
                </div> */}
                <div>
                    <button>Export</button>
                </div>
                <div>
                    <h1 style={{ color, fontFamily: font }}>{text}</h1>
                    <img src={image}/>
                </div>
            </section>
        );
    }
}