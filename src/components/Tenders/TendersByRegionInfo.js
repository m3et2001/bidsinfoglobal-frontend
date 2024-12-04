import { useState } from "react";
import { Dialog } from "primereact/dialog";

export default function TendersByRegionInfo() {
    const [visible, setVisible] = useState(false);

    return (
        <div className='section-title sectionList ListPageSection' style={{ textAlign: "center" }}>
            <h3>View latest Tenders by Regions - complete list
            </h3>
            <p>
                Find the latest tenders across regions on BidsInfoGlobal. Our platform consolidates tender information across different regions in the world, offering valuable insights for businesses of all sizes.
                <span
                    className='readMoreLink'
                    onClick={() => setVisible(true)}
                >
                    Read more
                </span>
                <Dialog
                    className='ModalMaindiwo'
                    header='View latest Tenders by Regions - complete list'
                    visible={visible}
                    // style={{ width: "80vw" }}'
                    style={{ textAlign: "center" }}
                    onHide={() => setVisible(false)}
                >
                    <p className='m-0' >
                        Find the latest tenders across regions on BidsInfoGlobal. Our platform consolidates tender information across different regions in the world, offering valuable insights for businesses of all sizes.
                    </p>
                    <div className='modal_dialog_box'>
                        <h3 className='ModalTitle'>
                            Tenders by Region:
                        </h3>
                        {/* <p>
                            bidsinfoglobal has the most
                            comprehensive coverage for
                            Consultancy tenders in 200+
                            countries globally. So Whether
                            you are looking for small value
                            local tender or a High Value
                            International Consultancy
                            Tender, You can be assured to
                            find the Perfect Business
                            opportunity from any corner of
                            the world as bidsinfoglobal is
                            largest tender aggergator for
                            Consultancy tenders of all types
                            where users can find
                        </p> */}
                        <ul style={{ textAlign: "left" }}>
                            <li>Tenders for APEC (Asia-Pacific Economic Cooperation)</li>
                            <li>Tenders for Africa Region</li>
                            <li>Tenders for America Region</li>
                            <li>Tenders for Asia Region</li>
                            <li>Tenders for Australia and New Zealand</li>
                            <li>Tenders for Australia and Oceania</li>
                            <li>Tenders for Balkan Region</li>
                            <li>Tenders for Baltic Region</li>
                            <li>Tenders for CIS Region</li>
                            <li>Tenders for Caribbean Region</li>
                            <li>Tenders for Central Africa/Middle Africa</li>
                            <li>Tenders for Central America</li>
                            <li>Tenders for Central Asia</li>
                            <li>Tenders for Central Europe</li>
                            <li>Tenders for East Africa/Eastern Africa</li>
                            <li>Tenders for Eastern Asia</li>
                            <li>Tenders for Eastern Europe</li>
                            <li>Tenders for Europe Region</li>
                            <li>Tenders for GCC (Gulf Cooperation Council) Countries</li>
                            <li>Tenders for Gulf Countries</li>
                            <li>Tenders for Latin America</li>
                            <li>Tenders for MENA (Middle East & North Africa)</li>
                            <li>Tenders for Mediterranean Region</li>
                            <li>Tenders for Melanesia</li>
                            <li>Tenders for Micronesia</li>
                            <li>Tenders for Middle East Asia</li>
                            <li>Tenders for North Africa/Northern Africa</li>
                            <li>Tenders for Northern America</li>
                            <li>Tenders for Northern Europe</li>
                            <li>Tenders for Polynesia</li>
                            <li>Tenders for SAARC (South Asian Association for Regional Cooperation)</li>
                            <li>Tenders for SADC (Southern African Development Community)</li>
                            <li>Tenders for South America</li>
                            <li>Tenders for South Asia</li>
                            <li>Tenders for South East Asia</li>
                            <li>Tenders for South Pacific Oceania</li>
                            <li>Tenders for Southern Africa</li>
                            <li>Tenders for Southern Europe</li>
                            <li>Tenders for Sub-Saharan Africa</li>
                            <li>Tenders for West Africa</li>
                            <li>Tenders for Western Asia</li>
                            <li>Tenders for Western Europe</li>
                        </ul>

                        <p>
                            For more information on tenders across regions, use BidsInfoGlobal’s advanced search features to find relevant opportunities. Stay ahead of your competition and maximize your business opportunities with our regularly updated and comprehensive database.
                        </p>

                    </div>
                    {/* <div className='modal_dialog_box'>
                        <h3 className='ModalTitle'>
                            Discover Global Consultancy
                            Tenders
                        </h3>
                        <p>
                            bidsinfoglobal has the most
                            comprehensive coverage for
                            Consultancy tenders in 200+
                            countries globally. So Whether
                            you are looking for small value
                            local tender or a High Value
                            International Consultancy
                            Tender, You can be assured to
                            find the Perfect Business
                            opportunity from any corner of
                            the world as bidsinfoglobal is
                            largest tender aggergator for
                            Consultancy tenders of all types
                            where users can find
                        </p>
                        <p>
                            bidsinfoglobal has the most
                            comprehensive coverage for
                            Consultancy tenders in 200+
                            countries globally. So Whether
                            you are looking for small value
                            local tender or a High Value
                            International Consultancy
                            Tender, You can be assured to
                            find the Perfect Business
                            opportunity from any corner of
                            the world as bidsinfoglobal is
                            largest tender aggergator for
                            Consultancy tenders of all types
                            where users can find
                        </p>
                    </div>
                    <div className='modal_dialog_box'>
                        <h3 className='ModalTitle'>
                            Discover Global Consultancy
                            Tenders
                        </h3>
                        <p>
                            bidsinfoglobal has the most
                            comprehensive coverage for
                            Consultancy tenders in 200+
                            countries globally. So Whether
                            you are looking for small value
                            local tender or a High Value
                            International Consultancy
                            Tender, You can be assured to
                            find the Perfect Business
                            opportunity from any corner of
                            the world as bidsinfoglobal is
                            largest tender aggergator for
                            Consultancy tenders of all types
                            where users can find
                        </p>
                        <p>
                            bidsinfoglobal has the most
                            comprehensive coverage for
                            Consultancy tenders in 200+
                            countries globally. So Whether
                            you are looking for small value
                            local tender or a High Value
                            International Consultancy
                            Tender, You can be assured to
                            find the Perfect Business
                            opportunity from any corner of
                            the world as bidsinfoglobal is
                            largest tender aggergator for
                            Consultancy tenders of all types
                            where users can find
                        </p>
                        <p>
                            bidsinfoglobal has the most
                            comprehensive coverage for
                            Consultancy tenders in 200+
                            countries globally. So Whether
                            you are looking for small value
                            local tender or a High Value
                            International Consultancy
                            Tender, You can be assured to
                            find the Perfect Business
                            opportunity from any corner of
                            the world as bidsinfoglobal is
                            largest tender aggergator for
                            Consultancy tenders of all types
                            where users can find
                        </p>
                        <p>
                            bidsinfoglobal has the most
                            comprehensive coverage for
                            Consultancy tenders in 200+
                            countries globally. So Whether
                            you are looking for small value
                            local tender or a High Value
                            International Consultancy
                            Tender, You can be assured to
                            find the Perfect Business
                            opportunity from any corner of
                            the world as bidsinfoglobal is
                            largest tender aggergator for
                            Consultancy tenders of all types
                            where users can find
                        </p>
                    </div> */}
                </Dialog>
            </p>
        </div>
    )
}