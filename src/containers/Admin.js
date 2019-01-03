import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getShapesList} from '../actions/shapesAction';

class Admin extends Component
{

    componentWillMount = () => {
        this.props.getShapesList([]);
    }

    render() {
        return (
            <div className="admin bg-dark">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">name</th>
                            <th scope="col">component</th>
                            <th scope="col">codepen</th>
                            <th scope="col">status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.shapesList && (
                            this.props.shapesList.map((component, index) => {
                                return component.shapes && (
                                    component.shapes.map((shape) => {
                                        return (
                                            <tr key={shape.name}>
                                                <th scope="row">{index}</th>
                                                <td>{shape.name}</td>
                                                <td>{component.name}</td>
                                                <td>{shape.codepen ? shape.codepen : 'Private'}</td>
                                                <td>{shape.status || shape.status !== null ? 'Active' : 'Inactive'}</td>
                                            </tr>
                                        )
                                    })
                                )
                            })
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    shapesList: state.shapes.shapesList
});

const mapDispatchToProps = dispatch => ({
    getShapesList: shapes => dispatch(getShapesList(shapes))
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin);