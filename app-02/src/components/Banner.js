const Banner = ({ brand }) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{brand??"UnNamed"}</a>
        </div>
    </nav>
);

export default Banner;