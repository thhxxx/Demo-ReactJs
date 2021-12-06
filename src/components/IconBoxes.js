import "../assets/css/icon-boxes.scss"

export const IconBoxes = () => {
    return (
        <div className="icon-boxes">
            <div className="item">
                <div className="icon">
                    <i className="fab fa-app-store"/>
                </div>
                <div className="text">
                    Download the app from the App Store.
                </div>
            </div>
            <div className="item">
                <div className="icon">
                    <i className="fab fa-google-play"/>
                </div>
                <div className="text">
                    Download the app from the Google Play.
                </div>
            </div>
            <div className="item">
                <div className="icon">
                    <i className="fal fa-clock"/>
                </div>
                <div className="text">
                    Your order will arrive at your door in 15 minutes.
                </div>
            </div>
        </div>
    )
}