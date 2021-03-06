import React from 'react'
import styled from 'styled-components';

export default function ColorsPreview(props) {
    const Main = styled.div`${props.result ? props.result.bg : ''}`;

    return (
        <Main className={`build-demo ${props.variables ? '' : 'hidden'}`}>
            <div className={`bg-${props.variables ? props.variables.name : ''}`}>
                <div className="form-section">
                    <h4>Preview "<strong>{props.variables && props.variables.name}</strong>" colors</h4>
                    <div className="main-colors">
                        <span className="primary">primary</span>
                        <span className="secondary">secondary</span>
                        <span className="background">background</span>
                    </div>
                    {(props.variables && props.variables.enable_inverse) && <div className="main-colors">
                        <span className="light-inverse">light-inverse</span>
                        {/* <span className="text-light-inverse">text-light-inverse</span> */}
                        <span className="dark-inverse">dark-inverse</span>
                        {/* <span className="text-dark-inverse">text-dark-inverse</span> */}
                    </div>}
                    {(props.variables && props.variables.enable_contrast) && <div className="main-colors">
                        <span className="contrast">contrast</span>
                        <span className="contrast-10">contrast-10</span>
                        <span className="contrast-20">contrast-20</span>
                        <span className="contrast-30">contrast-30</span>
                        <span className="contrast-40">contrast-40</span>
                        <span className="contrast-50">contrast-50</span>
                        <span className="contrast-60">contrast-60</span>
                        <span className="contrast-70">contrast-70</span>
                        <span className="contrast-80">contrast-80</span>
                        <span className="contrast-90">contrast-90</span>
                    </div>}
                    {(props.variables && props.variables.enable_trans) && <div className="main-colors">
                        <span className="trans-10">trans-10</span>
                        <span className="trans-20">trans-20</span>
                        <span className="trans-30">trans-30</span>
                        <span className="trans-40">trans-40</span>
                        <span className="trans-50">trans-50</span>
                        <span className="trans-60">trans-60</span>
                        <span className="trans-70">trans-70</span>
                        <span className="trans-80">trans-80</span>
                        <span className="trans-90">trans-90</span>
                    </div>}
                    {(props.variables && props.variables.enable_gray) && <div className="main-colors">
                        <span className="gray-10">gray-10</span>
                        <span className="gray-20">gray-20</span>
                        <span className="gray-30">gray-30</span>
                        <span className="gray-40">gray-40</span>
                        <span className="gray-50">gray-50</span>
                        <span className="gray-60">gray-60</span>
                        <span className="gray-70">gray-70</span>
                        <span className="gray-80">gray-80</span>
                        <span className="gray-90">gray-90</span>
                    </div>}
                    {(props.variables && props.variables.enable_darken) && <div className="main-colors">
                        <span className="darken-10">darken-10</span>
                        <span className="darken-20">darken-20</span>
                        <span className="darken-30">darken-30</span>
                        <span className="darken-40">darken-40</span>
                        <span className="darken-50">darken-50</span>
                        <span className="darken-60">darken-60</span>
                        <span className="darken-70">darken-70</span>
                        <span className="darken-80">darken-80</span>
                        <span className="darken-90">darken-90</span>
                    </div>}
                    {(props.variables && props.variables.enable_lighten) && <div className="main-colors">
                        <span className="lighten-10">lighten-10</span>
                        <span className="lighten-20">lighten-20</span>
                        <span className="lighten-30">lighten-30</span>
                        <span className="lighten-40">lighten-40</span>
                        <span className="lighten-50">lighten-50</span>
                        <span className="lighten-60">lighten-60</span>
                        <span className="lighten-70">lighten-70</span>
                        <span className="lighten-80">lighten-80</span>
                        <span className="lighten-90">lighten-90</span>
                    </div>}
                </div>
            </div>
        </Main>
    )
}
