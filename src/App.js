import React, {Component} from 'react';
import styles from './App.module.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: 'https://i2-prod.liverpoolecho.co.uk/incoming/article14699962.ece/ALTERNATES/s1200/JS74044537.jpg',
            grayscale: 0,
            contrast: 100,
            brightness: 100,
            sepia: 0,
            saturate: 100,
        };
    };

    handleChangeGrayscale = (event) => {
        this.setState({grayscale: event.target.value});
    };
    handleChangeContrast = (event) => {
        this.setState({contrast: event.target.value});
    };
    handleChangeBrightness = (event) => {
        this.setState({brightness: event.target.value});
    };
    handleChangeSepia = (event) => {
        this.setState({sepia: event.target.value});
    };
    handleChangeSaturate = (event) => {
        this.setState({saturate: event.target.value});
    };
    handleChangeImg = (event) => {
        this.setState({img: event.target.value})
    };
    handleClick = () => {
        this.setState({
            grayscale: 0,
            contrast: 100,
            brightness: 100,
            sepia: 0,
            saturate: 100,
        })
    };

    render() {
        const imgStyle = {
            filter: `
            grayscale(${this.state.grayscale}%) 
            contrast(${this.state.contrast}%)
            brightness(${this.state.brightness}%)
            sepia(${this.state.sepia}%)
            saturate(${this.state.saturate}%)
            `,
        };
        return (
            <div className={styles.app}>
                <div className={styles.leftSide}>
                    <div className={styles.img}>
                        <img
                            src={this.state.img}
                            alt="Editable picture"
                            style={imgStyle}
                        />
                    </div>
                    <div className={styles.imgInput}>
                        <input
                            type="text"
                            value={this.state.img}
                            size={200}
                            onChange={this.handleChangeImg}
                        />
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.sliders}>
                        <div className={styles.sliders}>
                            <label htmlFor="grayscale">Оттенки серого</label>
                            <input type="range" min="0" max="100" value={this.state.grayscale} id="grayscale" onChange={this.handleChangeGrayscale}
                            />
                        </div>
                        <div className={styles.sliders}>
                            <label htmlFor="contrast">Контраст</label>
                            <input type="range" min="50" max="200" value={this.state.contrast} id="contrast" onChange={this.handleChangeContrast}/>
                        </div>
                        <div className={styles.sliders}>
                            <label htmlFor="brightness">Яркость</label>
                            <input type="range" min="50" max="200" value={this.state.brightness} id="brightness" onChange={this.handleChangeBrightness}/>
                        </div>
                        <div className={styles.sliders}>
                            <label htmlFor="sepia">Сепия</label>
                            <input type="range" min="0" max="100" value={this.state.sepia} id="sepia" onChange={this.handleChangeSepia}/>
                        </div>
                        <div className={styles.sliders}>
                            <label htmlFor="saturate">Насыщенность</label>
                            <input type="range" min="0" max="200" value={this.state.saturate} id="saturate" onChange={this.handleChangeSaturate}/>
                        </div>
                        <div>
                            <button className={styles.button} onClick={this.handleClick}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
