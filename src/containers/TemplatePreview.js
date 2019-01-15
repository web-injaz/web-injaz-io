import React, { Component } from 'react'
import Components from '../components/Components';
import styled from 'styled-components';

class TemplatePreview extends Component {
    shouldComponentUpdate(nextProps) {
        if (this.props.shapesList !== nextProps.shapesList ||
            this.props.result !== nextProps.result ||
            this.props.variables !== nextProps.variables ||
            this.props.isFullScreen !== nextProps.isFullScreen) {
            return true;
        }
        return false;
    }

    render() {
        let variables = this.props.variables || '';
        let shapesList = this.props.shapesList || '';
        let result = this.props.result || '';
        
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
        const fullClass = this.props.isFullScreen ? ' full' : '';

        return (
            <Template>
                <div className={`template_preview${fullClass} bg-${variables.name}${variables ? '' : ' hidden'}`}>
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

export default TemplatePreview;