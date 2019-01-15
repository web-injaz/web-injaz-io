import React from 'react';
import Highlight from 'react-highlight';

export default function CombileResult(props) {
    return (
        <div className={`build-result ${props.result ? '' : 'hidden'}`}>
            <div className="form-section">
                <h4>Results</h4>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <span className="lang">Sass</span>
                        <Highlight className={`css `}>
                            {props.result && props.result.sass.replace(/;/g, ";\n")}
                        </Highlight>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        {props.error && <div className="row">
                            <div className="col-12">
                                <blockquote className="blockquote">Something went wrong: {props.error || props.error.statusText}</blockquote>
                            </div>
                        </div>}
                        <span className="lang">Css</span>
                        <Highlight className={`css ${props.result ? '' : 'hidden'}`}>
                            {props.result && props.result.css}
                        </Highlight>
                    </div>
                </div>
            </div>
        </div>
    )
}