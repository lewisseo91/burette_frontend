import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Column = () => {
    return (
        <section className={`home-grid cursor-pointer`}>
            <div className={`home-grid-title`}>
                <h4 className={`home-title`}>
                    Column
                </h4>
            </div>
            <div className={`home-grid-content grid-style-column`}>
                <div className={`home-grid-content-header`}>
                    <div className={`home-grid-content-header-quote`}>
                        <FontAwesomeIcon icon={faQuoteLeft} />
                    </div>
                    <div className={`home-grid-content-header-subtitle`}>
                        <pre>
                            <b>세상에 없던 가치</b><br />
                            <b>브랜드에</b><br />
                            <b>깃든 영혼</b><br />
                            <b>브랜드의 실험정신</b>
                        </pre>
                    </div>
                </div>
                <div className={`home-grid-content-body`}>
                    <div className={`home-grid-content-context`}>
                        <span className={`home-grid-content-context-txt`}>
                            예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 
                            예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 
                            예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 
                            예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 
                            예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 예제 문장이에용/ 
                        </span>
                    </div>
                </div>
                <div className={`home-grid-content-footer`}>
                    <div className={`home-grid-content-footer-subtitle`}>
                        <pre>
                            <b>가까운 미래</b><br />
                            <b>보다 빠른 성장</b>
                        </pre>
                    </div>
                    <div className={`home-grid-content-footer-quote`}>
                        <FontAwesomeIcon icon={faQuoteRight} />
                    </div>
                </div>
                <div className={`home-grid-content-tags`}>
                        <span className={`home-grid-content-tag`}>
                            #여행
                        </span>
                        <span className={`home-grid-content-tag`}>
                            #랜선투어
                        </span>
                        <span className={`home-grid-content-tag`}>
                            #여행
                        </span>
                        <span className={`home-grid-content-tag`}>
                            #랜선투어
                        </span>
                        <span className={`home-grid-content-tag`}>
                            #여행
                        </span>
                    </div>
            </div>
        </section>
    );
}

export default Column;