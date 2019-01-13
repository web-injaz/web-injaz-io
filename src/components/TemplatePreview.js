import React, { Component } from 'react'
import Components from './Components';
import styled from 'styled-components';

class TemplatePreview extends Component {

    shouldComponentUpdate(nextProps) {
        if(this.props.variables !== nextProps.variables) {            
            return true;
        }
        return false;
    }
    
    render() {
        let variables = this.props.variables ? this.props.variables : [];
        let shapesList = this.props.shapesList ? this.props.shapesList : [];
        // Array of shapes
        let varsArray = Object.keys(variables);
        let firstShapeIndex = varsArray.indexOf('shapes');
        let shapesArray = varsArray.splice(firstShapeIndex + 1);
        // Style
        const Template = styled.div`${this.props.bgStyle}`;

        return (
            <Template>
                <div className={`template_preview bg-${variables.name}${this.props.variables ? '' : ' hidden'}`}>
                    {
                        shapesList.length > 0 && shapesList.map(component => {
                            return component.shapes.length > 0 && component.shapes.map(shape => {
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
                            })
                        })
                    }
                </div>
            </Template>
        )
    }
}

export default TemplatePreview;