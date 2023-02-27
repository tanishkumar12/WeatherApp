import './CardAnimated.css';
const CardAnimated = props => {
    return <div className="container">
        <div className="glow"></div>
        <div className="stars"></div>
        <div className="spinner">
            <div className="sun">
                <div className="ray1"></div>
                <div className="ray2"></div>
                <div className="ray3"></div>
                <div className="ray4"></div>
            </div>
            {/* <div className="moon"></div> */}
        </div>
    </div>
}

export default CardAnimated;