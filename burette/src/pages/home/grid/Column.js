import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Column = ({initData}) => {
    const {title, subTitle, contents, tags, thumbnails } = initData;

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
                        <h2>
                            {/* 세상에 없던 가치 <br /> 
                            브랜드에 깃든 영혼 <br />
                            브랜드의 실험정신 */}
                            {title}
                        </h2>
                    </div>
                </div>
                <div className={`home-grid-content-body`}>
                    <div className={`home-grid-content-context`}>
                        <span className={`home-grid-content-context-txt`}>
                            {contents}
                        </span>
                    </div>
                </div>
                <div className={`home-grid-content-footer`}>
                    <div className={`home-grid-content-footer-subtitle`}>
                        {/* <pre>
                            <b>가까운 미래</b><br />
                            <b>보다 빠른 성장</b>
                        </pre> */}
                        {subTitle}
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