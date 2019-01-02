import React from 'react';

const Carousel = shapeName => (
    <div id={shapeName} className={`carousel slide sh-carousel-${shapeName}`} data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target={"#" + shapeName} data-slide-to="0" className="active"></li>
            <li data-target={"#" + shapeName} data-slide-to="1"></li>
            <li data-target={"#" + shapeName} data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="d-block w-100" src="/images/slide1.webp" alt="Free vector art via https://Vecteezy.com" />
                <div className="carousel-caption">
                    <h5>{shapeName}</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quisquam nostrum, distinctio fuga, facilis similique natus illum fugiat dolore assumenda harum. Eligendi dolorum consequatur eveniet sed blanditiis sit aspernatur fugiat.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src="/images/slide2.webp" alt="Free vector art via https://Vecteezy.com" />
                <div className="carousel-caption">
                    <h5>{shapeName}</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quisquam nostrum, distinctio fuga, facilis similique natus illum fugiat dolore assumenda harum. Eligendi dolorum consequatur eveniet sed blanditiis sit aspernatur fugiat.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src="/images/slide3.webp" alt="Free vector art via https://Vecteezy.com" />
                <div className="carousel-caption">
                    <h5>{shapeName}</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quisquam nostrum, distinctio fuga, facilis similique natus illum fugiat dolore assumenda harum. Eligendi dolorum consequatur eveniet sed blanditiis sit aspernatur fugiat.</p>
                </div>
            </div>
        </div>
        <a className="carousel-control-prev" href={"#" + shapeName} role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href={"#" + shapeName} role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
);

const Navbar = shapeName => (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light sh-navbar-${shapeName}`}>
        <a className="navbar-brand" href={"#" + shapeName}>Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href={"#" + shapeName}>Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={"#" + shapeName}>Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href={"#" + shapeName} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href={"#" + shapeName}>Action</a>
                    <a className="dropdown-item" href={"#" + shapeName}>Another action</a>
                    <a className="dropdown-item" href={"#" + shapeName}>Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href={"#" + shapeName}>Disabled</a>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
);

const Alert = shapeName => (
    <div className={`alert alert-primary sh-alert-${shapeName}`} role="alert">
        A simple primary alert—check it out!
    </div>
);

const Breadcrumb = shapeName => (
    <nav aria-label={`breadcrumb sh-breadcrumb-${shapeName}`}>
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href={"#" + shapeName}>Home</a></li>
            <li className="breadcrumb-item"><a href={"#" + shapeName}>Library</a></li>
            <li className="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
    </nav>
);

const Dropdown = shapeName => (
    <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href={"#" + shapeName}>Action</a>
            <a className="dropdown-item" href={"#" + shapeName}>Another action</a>
            <a className="dropdown-item" href={"#" + shapeName}>Something else here</a>
        </div>
    </div>
);

const Form = shapeName => (
    <section className={`form sh-form-${shapeName}`}>
    <form>
        <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label className="form-check-label" for="defaultCheck1">
                Default checkbox
            </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled/>
            <label className="form-check-label" for="defaultCheck2">
                Disabled checkbox
            </label>
            </div>
            <div className="form-group">
            <select className="form-control">
                <option>Default select</option>
            </select>
            </div>
            <div className="form-check">
        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
        <label className="form-check-label" for="exampleRadios1">
            Default radio
        </label>
        </div>
        <div className="form-check">
        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
        <label className="form-check-label" for="exampleRadios2">
            Second default radio
        </label>
        </div>
        <div className="form-check">
        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled/>
        <label className="form-check-label" for="exampleRadios3">
            Disabled radio
        </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>

    <form>
        <div className="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="form-group">
            <label for="exampleFormControlSelect1">Example select</label>
            <select className="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </select>
        </div>
        <div className="form-group">
            <label for="exampleFormControlSelect2">Example multiple select</label>
            <select multiple className="form-control" id="exampleFormControlSelect2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </select>
        </div>
        <div className="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"/>
        </div>
    </form>

    <form>
        <div className="form-group">
            <label for="exampleFormControlFile1">Example file input</label>
            <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
        </div>
    </form>

    <input className="form-control" type="text" placeholder="Readonly input here…" readonly/>

    <form>
        <div className="form-group row">
            <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
            <input type="text" readonly className="form-control-plaintext" id="staticEmail" value="email@example.com"/>
            </div>
        </div>
        <div className="form-group row">
            <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
            </div>
        </div>
    </form>

    <form>
        <div className="form-group">
            <label for="formControlRange">Example Range input</label>
            <input type="range" className="form-control-range" id="formControlRange"/>
        </div>
    </form>

    <form>
        <div className="form-group">
            <label for="formGroupExampleInput">Example label</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
        </div>
        <div className="form-group">
            <label for="formGroupExampleInput2">Another label</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
        </div>
    </form>

    <form>
        <div className="row">
            <div className="col">
            <input type="text" className="form-control" placeholder="First name"/>
            </div>
            <div className="col">
            <input type="text" className="form-control" placeholder="Last name"/>
            </div>
        </div>
    </form>

    <form>
        <div className="form-row">
            <div className="col">
            <input type="text" className="form-control" placeholder="First name"/>
            </div>
            <div className="col">
            <input type="text" className="form-control" placeholder="Last name"/>
            </div>
        </div>
    </form>

    <form>
        <div className="form-row">
            <div className="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
            </div>
            <div className="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
            </div>
        </div>
        <div className="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
        </div>
        <div className="form-group">
            <label for="inputAddress2">Address 2</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
        </div>
        <div className="form-row">
            <div className="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity"/>
            </div>
            <div className="form-group col-md-4">
            <label for="inputState">State</label>
            <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
            </select>
            </div>
            <div className="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip"/>
            </div>
        </div>
        <div className="form-group">
            <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck"/>
            <label className="form-check-label" for="gridCheck">
                Check me out
            </label>
            </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
    </form>

    <form>
        <div className="form-group row">
            <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
            </div>
        </div>
        <div className="form-group row">
            <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
            </div>
        </div>
        <fieldset className="form-group">
            <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
            <div className="col-sm-10">
                <div className="form-check">
                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                <label className="form-check-label" for="gridRadios1">
                    First radio
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                <label className="form-check-label" for="gridRadios2">
                    Second radio
                </label>
                </div>
                <div className="form-check disabled">
                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled/>
                <label className="form-check-label" for="gridRadios3">
                    Third disabled radio
                </label>
                </div>
            </div>
            </div>
        </fieldset>
        <div className="form-group row">
            <div className="col-sm-2">Checkbox</div>
            <div className="col-sm-10">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                <label className="form-check-label" for="gridCheck1">
                Example checkbox
                </label>
            </div>
            </div>
        </div>
        <div className="form-group row">
            <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
        </div>
    </form>

    <form>
        <fieldset disabled>
            <div className="form-group">
            <label for="disabledTextInput">Disabled input</label>
            <input type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input"/>
            </div>
            <div className="form-group">
            <label for="disabledSelect">Disabled select menu</label>
            <select id="disabledSelect" className="form-control">
                <option>Disabled select</option>
            </select>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled/>
            <label className="form-check-label" for="disabledFieldsetCheck">
                Can't check this
            </label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </fieldset>
    </form>

    <h2>Custom forms</h2>

    <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="customCheck1"/>
        <label className="custom-control-label" for="customCheck1">Check this custom checkbox</label>
    </div>

    <div className="custom-control custom-radio">
        <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"/>
        <label className="custom-control-label" for="customRadio1">Toggle this custom radio</label>
    </div>
    <div className="custom-control custom-radio">
        <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
        <label className="custom-control-label" for="customRadio2">Or toggle this other custom radio</label>
    </div>

    <select className="custom-select">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>

    <label for="customRange1">Example range</label>
    <input type="range" className="custom-range" id="customRange1"/>

    <label for="customRange2">Example range</label>
    <input type="range" className="custom-range" min="0" max="5" id="customRange2"/>

    <label for="customRange3">Example range</label>
    <input type="range" className="custom-range" min="0" max="5" step="0.5" id="customRange3"/>

    <div className="custom-file">
        <input type="file" className="custom-file-input" id="customFile"/>
        <label className="custom-file-label" for="customFile">Choose file</label>
    </div>
    </section>
);

const Jumbotron = shapeName => (
    <div className={`jumbotron sh-jumbotron-${shapeName}`}>
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4"/>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a className="btn btn-primary btn-lg" href={"#" + shapeName} role="button">Learn more</a>
    </div>
);

const Nav = shapeName => (
    <ul className={`nav sh-nav-${shapeName}`}>
        <li className="nav-item">
            <a className="nav-link active" href={"#" + shapeName}>Active</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href={"#" + shapeName}>Link</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href={"#" + shapeName}>Link</a>
        </li>
        <li className="nav-item">
            <a className="nav-link disabled" href={"#" + shapeName}>Disabled</a>
        </li>
    </ul>
);

const Pagination = shapeName => (
    <nav aria-label="Page navigation example">
        <ul className={`pagination sh-pagination-${shapeName}`}>
            <li className="page-item"><a className="page-link" href={"#" + shapeName}>Previous</a></li>
            <li className="page-item"><a className="page-link" href={"#" + shapeName}>1</a></li>
            <li className="page-item"><a className="page-link" href={"#" + shapeName}>2</a></li>
            <li className="page-item"><a className="page-link" href={"#" + shapeName}>3</a></li>
            <li className="page-item"><a className="page-link" href={"#" + shapeName}>Next</a></li>
        </ul>
    </nav>
);

const Components = props =>
{

    const compsList = {
        'carousel': Carousel(props.shape),
        'navbar': Navbar(props.shape),
        'alert': Alert(props.shape),
        'form': Form(props.shape),
        'pagination': Pagination(props.shape),
        'nav': Nav(props.shape),
        'breadcrumb': Breadcrumb(props.shape),
        'jumbotron': Jumbotron(props.shape),
        'dropdown': Dropdown(props.shape)
    }
    
    return (props.component ? (
        compsList[props.component] ? (compsList[props.component]) : <h4>Sorry, Component {props.component} unavailable</h4>
        ) : null);
}

export default Components;