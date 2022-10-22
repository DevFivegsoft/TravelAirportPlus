import React from 'react';
import { parkingTypesSection } from '../WebsiteData/Data'

const TypesParkingData = ({ id, cardImg, cardPara }) => {
    return (
        <>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="card"> <img src={cardImg} alt="ON SITE PARKING" class="img-fluid" />
                    <p class="home-para">{cardPara}</p>
                </div> 
            </div>
        </>
    )
}

const ParkingTypesData = () => {

    const TypesParking = parkingTypesSection.map((cardData, i) => {
        return (
            <TypesParkingData
                key={cardData.id}
                id={cardData.id}
                item={cardData}
                cardImg={cardData.cardImg}
                cardPara={cardData.cardPara}
            />
        )
    })
    return (
        <>
            {TypesParking}
        </>
    )

}

const HomeTypes = () => {
    return (
        <>
            <section id="section" className="third-bg-img">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <h2 className="sec-white-main">Airport Travel Plus</h2>
                            <img src="assets/images/icons/white-border.png" className="img-fluid d-block m-auto border-img" alt="heading bottom" />
                            <p className="home-white-para">Airport Travel Plus is providing discounted rates and deals available on airports parking, airport lounges, and airport transfers and in travel industry services. We are a highly customer centric and market driven organization, focused solely to make traveling easy and hassle free! Our state-of-the-art secure transaction system and a simplified user interface to provide a seamless experience to our customers.</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {<ParkingTypesData />}
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeTypes;