import React, { Component } from 'react';

export default class App extends Component {
    
    constructor() {
        super();

        this.state = {
            image: null
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

    render() {
        const { image } = this.state;

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
                    />
                </div>
                <div>
                    <input
                        type="text"
                    />
                </div>
                <div>
                    <input
                        type="text"
                    />
                </div>
                <div>
                    <button>Export</button>
                </div>
                <div>
                    <img src={image}/>
                </div>
            </section>
        );
    }
}