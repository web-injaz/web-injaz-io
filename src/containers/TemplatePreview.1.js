import React, { Component } from 'react'
import Components from '../components/Components';
import styled from 'styled-components';
import { connect } from 'react-redux';
import qs from 'qs';
import { compileToCss, getShapesList } from '../actions';

class TemplatePreview extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         variables: ''
      }
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.shapesList !== nextProps.shapesList) {
            return true;
        }
        if (this.props.result !== nextProps.result) {
            return true;
        }
        if (this.state.variables !== nextState.variables) {
            return true;
        }
        return false;
    }

    componentDidMount() {        
        this.setState({
            variables: qs.parse(this.props.location ? this.props.location.search.substr(1) : '')
        }, () => {            
            this.props.sendVariables(this.state.variables);
        });
        this.props.getShapesList([]);
    }

    render() {
        let variables = this.state.variables;
        let shapesList = this.props.shapesList;
        let result = this.props.result;
        console.log(shapesList);
        
        // Array of shapes
        let varsArray = Object.keys(variables);
        let shapesArray = [];
        if(variables.shapes !== 'all') {
            varsArray.forEach(element => {
                if(variables[element] === true && !element.startsWith('enable')) {
                    shapesArray.push(element);
                }
            });
        }
        
        // Style
        const Template = styled.div`${result ? result.bg : ''}`;

        return (
            <Template>
                <div className={`template_preview bg-${variables.name}${variables ? '' : ' hidden'}`}>
                    {
                        shapesList.length > 0 && shapesList.map(component => {
                            return component.shapes.length > 0 && component.shapes.map(shape => {
                                if(variables.shapes === 'all') {
                                    return (
                                        <Components
                                            key={shape.shape}
                                            component={component.name}
                                            shape={shape.shape}
                                        />
                                    )
                                }
                                else {
                                    return shapesArray.map(item => {
                                        if (item === shape.shape) {
                                            return (
                                                <Components
                                                    key={item}
                                                    component={component.name}
                                                    shape={shape.shape}
                                                />
                                            )
                                        }
                                        else {
                                            return null;
                                        }
                                    });
                                }
                            })
                        })
                    }
                </div>
            </Template>
        )
    }
}


const mapStateToProps = state => {
    return {
        result: state.compile.result,
        variables: state.compile.variables,
        shapesList: state.shapes.shapesList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendVariables: vars => dispatch(compileToCss(vars)),
        getShapesList: shapes => dispatch(getShapesList(shapes))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplatePreview);