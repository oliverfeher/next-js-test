export default function Deal({ dealData }) {
    return (
        <div className="deal-card">
            <div className="header-design">
                <div className="header-design-arrow"></div>
            </div>

            <div className="outer-circle"></div>
            <div className="circle-price-container">
                <p className="original-price">{dealData.originalPrice}</p>
                <p className="sale-price">{dealData.salePrice}</p>
            </div>
            
            <div className="sale-percent">
                {/* <img src="<?php echo get_theme_file_uri('/assets/images/green_arrow_down.svg') ?>"/> */}
                <p>-{dealData.salePercent}%</p>
            </div>
            <div className="deal-card-image-container">
                <img className="deal-card-image" src={dealData.featuredImage.sourceUrl}/>
            </div>
            
            <div className="deal-card-title">
                <div className="title">
                    <p className="source">{dealData.dealSource}</p>
                    <p className="date"></p>
                </div>

                <p className="product-title">{dealData.title}</p>
            </div>

            <div className="deal-card-buttons">
                <a className="details-button button" href="test.com">Details</a>
                <a className="deals-button button" href={dealData.affiliateLink} target="_blank">Get Deal</a>
            </div>
        </div>
    )
};