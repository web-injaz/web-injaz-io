import React, { Component } from 'react'
import moment from 'moment';

export default class ShapesList extends Component {
    render() {
        return (
            <div className="admin bg-dark">
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Component</th>
                                <th scope="col">Package</th>
                                <th scope="col">Structure</th>
                                <th scope="col">Codepen</th>
                                <th scope="col">Status</th>
                                <th scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.list && (
                                this.props.list.map((component) => {
                                    return component.shapes && (
                                        component.shapes.map((shape, index) => {
                                            return (
                                                <tr key={shape.shape}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{shape.shape}</td>
                                                    <td>{component.name}</td>
                                                    <td><a href={shape.package}>npm</a></td>
                                                    <td>{component.source}</td>
                                                    <td>{shape.codepen ? shape.codepen : 'Private'}</td>
                                                    <td>{shape.status ? 'Active' : 'Inactive'}</td>
                                                    <td>{moment(shape.date).fromNow()}</td>
                                                </tr>
                                            )
                                        })
                                    )
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
