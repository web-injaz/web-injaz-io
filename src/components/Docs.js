import React from 'react';
import Highlight from 'react-highlight';

const Docs = () => {
    return (
        <section className="docs-section">
            <div className="container">
                <h3>Get Started</h3>
                <div className="install">
                    <h4>Install</h4>
                    <p>in your project style folder, open the command line and run</p>
                    <Highlight className="css">
                        npm install wi-framework --save
                    </Highlight>
                </div>
                <div className="import">
                    <h4>Import</h4>
                    <p>Create Sass file if you don't have one and import the framework</p>
                    <Highlight className="css">
                        @import '../../node_modules/wi-framework/index';
                    </Highlight>
                </div>
                <h4 className="text-center"><a href="https://webinjaz.gitbook.io/framework/">Documentation</a></h4>
            </div>
        </section>
    );
};

export default Docs;