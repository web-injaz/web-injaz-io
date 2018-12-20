import React from 'react';
import SVG from '../utilities/SVG';

const Intro = () => {
    return (
        <section className="intro-section">
            <SVG attr={{className: "sh-0"}} shape={0}/>
            <SVG attr={{className: "sh-1"}} shape={1}/>
            <SVG attr={{className: "sh-2"}} shape={2}/>
            <SVG attr={{className: "sh-3"}} shape={3}/>
            <SVG attr={{className: "sh-4"}} shape={0}/>
            <SVG attr={{className: "sh-5"}} shape={1}/>
            <SVG attr={{className: "sh-6"}} shape={2}/>
            <SVG attr={{className: "sh-7"}} shape={3}/>
            <SVG attr={{className: "sh-8"}} shape={0}/>
            <SVG attr={{className: "sh-9"}} shape={1}/>
            <SVG attr={{className: "sh-10"}} shape={2}/>
            <SVG attr={{className: "sh-11"}} shape={3}/>
            <div className="jumbotron">
                <div className="container">
                    <h1>Web Injaz</h1>
                    <p>Css framework to simplify the <strong>Coloring</strong> and <strong>Styling</strong></p>
                </div>
            </div>
        </section>
    );
};

export default Intro;