import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getShapesList} from '../actions/shapesAction';
import ShapesList from '../components/ShapesList';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

class Shapes extends Component
{

    componentWillMount = () => {
        this.props.getShapesList([]);
    }

    render() {        
        return (
            <div className="shapes_list">
                <Header current="Famous Theme" />
                <ShapesList list={this.props.shapesList} />
                <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(Shapes);