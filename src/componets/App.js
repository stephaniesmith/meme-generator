import React, { Component } from 'react';

export default class App extends Component {
    
    constructor() {
        image: null
    }

    handleImageSrc({ target }) {
        this.setState({ image: target.value });
    }

    render() {
        return (
            <section>
                <div>
                    <label>
                        Image Src:
                        <input/>
                    </label>
                </div>
                <div>
                    <label>
                        Image:
                        <input
                            type="file"
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