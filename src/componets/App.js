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
            selected: 'Nixie One'
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

    render() {
        const { image, text, color, fonts, selected } = this.state;

        return (
            <section>
                <h1>Pictures and Stuff</h1>
                <fieldset>
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
                        <select 
                            value={selected}
                            onChange={event => this.handleFontChange(event)}
                        >
                        {fonts.map(font => <option key={font[0]}> {font[0]}</option>)}
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
                    </fieldset>
                <div ref={node => this.imageExport = node}>
                    <h1 style={{ color, fontFamily: selected }}>{text}</h1>
                    <img src={image}/>
                </div>
                <div>
                    <button onClick={() => this.handleExport()}>Export</button>
                </div>
            </section>
        );
    }
}