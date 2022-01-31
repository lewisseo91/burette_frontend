import parse from 'html-react-parser';

const AfterLetterGrid = ({initData}) => {
    return(
        <section className={`home-grid`}>
            <div className={`home-grid-title`}>
                <h4 className={`home-title`}>
                    After Letter
                </h4>
            </div>
            {/* 3 row max */}
            <div className={`home-grid-content grid-style-afterletter`}>
                <div className={`home-grid-content-body`}>
                    <div className={`grid-style-afterletter-list`}>
                        <div className={`grid-style-afterletter-article`}>
                            {/* v1 fixed text after letter category 따로 짜기 */}
                            <div className={`grid-style-afterletter-article-thumbnail cursor-pointer gray-masking`}>
                                <img className={`res-img`} src="./images/ex3.jpg" alt="ex3"/>
                            </div>
                            <div className={`grid-style-afterletter-article-body`}>
                                <div className={`grid-style-afterletter-article-subtitle`}>
                                    <span className={`grid-style-afterletter-article-subtitle-txt`}>리도 못 가서 발병난다.</span>
                                </div>
                                <div className={`home-grid-content-context grid-style-afterletter-article-context`}>
                                    <span className={`home-grid-content-context-txt`}>
                                        예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 
                                        예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 
                                        예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 
                                        예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 
                                        예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={`grid-style-afterletter-article`}>
                            <div className={`grid-style-afterletter-article-thumbnail cursor-pointer gray-masking`}>
                                <img className={`res-img`} src="./images/ex3.jpg" alt="ex3"/>
                            </div>
                            <div className={`grid-style-afterletter-article-body`}>
                                <div className={`grid-style-afterletter-article-subtitle`}>
                                    <span className={`grid-style-afterletter-article-subtitle-txt`}>리도 못 가서 발병난다.</span>
                                </div>
                                <div className={`home-grid-content-context grid-style-afterletter-article-context`}>
                                    <span className={`home-grid-content-context-txt`}>
                                        예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 
                                        예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 
                                        예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 
                                        예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 
                                        예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={`grid-style-afterletter-article`}>
                            <div className={`grid-style-afterletter-article-thumbnail cursor-pointer gray-masking`}>
                                <img className={`res-img`} src="./images/ex3.jpg" alt="ex3"/>
                            </div>
                            <div className={`grid-style-afterletter-article-body`}>
                                <div className={`grid-style-afterletter-article-subtitle`}>
                                    <span className={`grid-style-afterletter-article-subtitle-txt`}>리도 못 가서 발병난다.</span>
                                </div>
                                <div className={`home-grid-content-context grid-style-afterletter-article-context`}>
                                    <span className={`home-grid-content-context-txt`}>
                                        예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 
                                        예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 
                                        예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 
                                        예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 
                                        예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AfterLetterGrid;