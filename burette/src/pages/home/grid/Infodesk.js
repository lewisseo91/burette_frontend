const Infodesk = () => {
    return (
        <section className={`home-grid`}>
            <div className={`home-grid-title`}>
                <h4 className={`home-title`}>
                    Info Desk
                </h4>
            </div>
            <div className={`home-grid-content grid-style-infodesk`}>
                <div className={`home-grid-content-body`}>
                    <ul className={`home-grid-content-list-infos`}>
                        <li className={`home-grid-content-list-info`}>
                            전시 소식
                        </li>
                        <li className={`home-grid-content-list-info`}>
                            박람회 소식
                        </li>
                        <li className={`home-grid-content-list-info`}>
                            문화/예술/테크분야
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Infodesk;