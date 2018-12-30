import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getShapesList } from '../actions';

class MiniShaper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 'navbar',
            activeShape: 'default',
            shapes: [
                'navbar',
                'carousel'
            ]
        }
    }

    componentWillMount() {
        this.props.getShapesList(this.state.shapes);
    }

    shapesStructureList = (shapeName) => {
        return {
            navbar: (
                <nav className={"navbar navbar-expand-lg navbar-light bg-light sh-navbar-" + shapeName}>
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/">Action</a>
                                <a className="dropdown-item" href="/">Another action</a>
                                <a className="dropdown-item" href="/">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="/">Disabled</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            ),
            carousel: (
                <div id={shapeName} className={"carousel slide sh-carousel-" + shapeName} data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target={"#" + shapeName} data-slide-to="0" className="active"></li>
                        <li data-target={"#" + shapeName} data-slide-to="1"></li>
                        <li data-target={"#" + shapeName} data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="/images/slide1.webp" alt="Free vector art via https://Vecteezy.com" />
                            <div className="carousel-caption">
                                <h5>{shapeName}</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quisquam nostrum, distinctio fuga, facilis similique natus illum fugiat dolore assumenda harum. Eligendi dolorum consequatur eveniet sed blanditiis sit aspernatur fugiat.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="/images/slide2.webp" alt="Free vector art via https://Vecteezy.com" />
                            <div className="carousel-caption">
                                <h5>{shapeName}</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quisquam nostrum, distinctio fuga, facilis similique natus illum fugiat dolore assumenda harum. Eligendi dolorum consequatur eveniet sed blanditiis sit aspernatur fugiat.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="/images/slide3.webp" alt="Free vector art via https://Vecteezy.com" />
                            <div className="carousel-caption">
                                <h5>{shapeName}</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quisquam nostrum, distinctio fuga, facilis similique natus illum fugiat dolore assumenda harum. Eligendi dolorum consequatur eveniet sed blanditiis sit aspernatur fugiat.</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href={"#" + shapeName} role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href={"#" + shapeName} role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            ),
        }
    }

    componentsList = () => {        
        let shapes = this.props.shapesList;
        return shapes;
    }

    toggleTab = (tab) => {
        if(this.state.activeItem !== tab) {
            this.setState({
                activeItem: tab,
                activeShape: 'default'
            })
        }
    }
    
    toggleTabShape = (tab) => {
        if(this.state.activeShape !== tab) {
            this.setState(state => ({
                ...state,
                activeShape: tab
            }))
        }
    }

    render() {
        return (
            <section className="shaper-section">
                <div className="container">
                    <h3>Pick a Shape</h3>
                    <div className="classic-tabs">
                        <div className="nav nav-tabs nav-fill">
                            {
                                this.componentsList().map((comp, index) => {
                                    return (
                                        <div className="nav-item" key={index}>
                                            <span 
                                                className={`nav-link ${(this.state.activeItem === comp.name) && 'active'}`}
                                                onClick={() => {this.toggleTab(comp.name)}}
                                            >
                                                {comp.name}
                                            </span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="tab-content">
                            {
                                this.componentsList().map((comp, index) => {
                                    return (
                                        <div 
                                            key={index} 
                                            id={comp.name} 
                                            className={`tab-pane fade ${this.state.activeItem === comp.name && 'show active'}`}
                                            role="tabpanel" 
                                            aria-labelledby={`${comp.name}-tab`}
                                        >
                                            <div className="nav nav-tabs nav-fill">
                                                {
                                                    comp.shapes && comp.shapes.map((shape, index) => {
                                                        return (
                                                            <div className="nav-item" key={index}>
                                                                <span 
                                                                    className={`nav-link ${(this.state.activeShape === shape.name) && 'active'}`}
                                                                    onClick={() => {this.toggleTabShape(shape.name)}}
                                                                >
                                                                    {shape.name}
                                                                </span>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className="tab-content">
                                                {
                                                    comp.shapes && comp.shapes.map((shape, index) => {
                                                        return (
                                                            <div 
                                                                key={index} 
                                                                id={shape.name} 
                                                                className={`tab-pane fade ${this.state.activeShape === shape.name && 'show active'}`}
                                                                role="tabpanel" 
                                                                aria-labelledby={`${shape.name}-tab`}
                                                            >
                                                                {this.shapesStructureList(this.state.activeShape)[comp.name]}
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <h6>And alot more</h6>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        shapesList: state.shapes.shapesList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getShapesList: (shapes) => dispatch(getShapesList(shapes))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniShaper);