import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getShapesList } from '../actions';

import Components from '../components/Components';

class MiniShaper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 'navbar',
            activeShape: 'default',
            shapes: []
        }
    }

    componentWillMount() {
        this.props.getShapesList(this.state.shapes);
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
                                this.props.shapesList && this.props.shapesList.filter(item => item.name === 'navbar' || item.name === 'carousel').map((comp, index) => {
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
                                this.props.shapesList && this.props.shapesList.map((comp, index) => {
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
                                                                    className={`nav-link ${(this.state.activeShape === shape.shape) && 'active'}`}
                                                                    onClick={() => {this.toggleTabShape(shape.shape)}}
                                                                >
                                                                    {shape.shape}
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
                                                                id={shape.shape} 
                                                                className={`tab-pane fade ${this.state.activeShape === shape.shape && 'show active'}`}
                                                                role="tabpanel" 
                                                                aria-labelledby={`${shape.shape}-tab`}
                                                            >
                                                                <Components component={comp.name} shape={this.state.activeShape} />
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