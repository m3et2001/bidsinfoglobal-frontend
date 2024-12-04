import { useState } from "react";
import { Dialog } from "primereact/dialog";

export default function TendersBySectorInfo() {
    const [visible, setVisible] = useState(false);

    return (
        <div className='section-title sectionList ListPageSection' style={{ textAlign: "center" }}>
            <h3>
                View latest Tenders by Sectors - complete list
            </h3>
            <p>
                Find the latest tenders across Industries and Sectors on BidsInfoGlobal. Our platform consolidates tender information across industries, offering valuable insights for businesses of all sizes.
                <span
                    className='readMoreLink'
                    onClick={() => setVisible(true)}
                >
                    Read more
                </span>
                <Dialog
                    className='ModalMaindiwo'
                    header='View latest Tenders by Sectors - complete list'
                    visible={visible}
                    // style={{ width: "80vw" }}
                    style={{ textAlign: "center" }}

                    onHide={() => setVisible(false)}
                >
                    <p className='m-0'>
                        Find the latest tenders across Industries and Sectors on BidsInfoGlobal. Our platform consolidates tender information across industries, offering valuable insights for businesses of all sizes.
                    </p>
                    <div className='modal_dialog_box'>
                        <h3 className='ModalTitle'>
                            Tenders by Industry/Sectors:
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
                            <li>Tenders for Access Control & Biometric</li>
                            <li>Tenders for Agriculture and Food & Beverage</li>
                            <li>Tenders for Airport</li>
                            <li>Tenders for Architecture</li>
                            <li>Tenders for Automobile</li>
                            <li>Tenders for Aviation</li>
                            <li>Tenders for Bridge & Tunnel</li>
                            <li>Tenders for Building</li>
                            <li>Tenders for Business/Management Consultancy</li>
                            <li>Tenders for Chemicals</li>
                            <li>Tenders for Construction</li>
                            <li>Tenders for Construction Materials</li>
                            <li>Tenders for Consultancy</li>
                            <li>Tenders for Defence</li>
                            <li>Tenders for Education & Training</li>
                            <li>Tenders for Electrical & Automation</li>
                            <li>Tenders for Energy & Power</li>
                            <li>Tenders for Engineering</li>
                            <li>Tenders for Entertainment & Media Services</li>
                            <li>Tenders for Finance & Insurance</li>
                            <li>Tenders for Fire Systems & Services</li>
                            <li>Tenders for Furniture</li>
                            <li>Tenders for GPS/GIS</li>
                            <li>Tenders for Harbour & Ports</li>
                            <li>Tenders for Healthcare</li>
                            <li>Tenders for Hospital & Medical Equipment</li>
                            <li>Tenders for Human Resource & Manpower</li>
                            <li>Tenders for IT Hardware</li>
                            <li>Tenders for IT Software</li>
                            <li>Tenders for Industry Sectors</li>
                            <li>Tenders for Information Technology</li>
                            <li>Tenders for Laboratory</li>
                            <li>Tenders for Legal & Law</li>
                            <li>Tenders for Machinery & Equipment</li>
                            <li>Tenders for Marine</li>
                            <li>Tenders for Metals & Non-Metals</li>
                            <li>Tenders for Mining & Minerals</li>
                            <li>Tenders for Non-Renewable Energy</li>
                            <li>Tenders for O&G Equipment</li>
                            <li>Tenders for O&G Services</li>
                            <li>Tenders for Oil & Gas</li>
                            <li>Tenders for Paper & Packaging</li>
                            <li>Tenders for Pharmaceuticals</li>
                            <li>Tenders for Plastic & Rubber</li>
                            <li>Tenders for Postal & Courier Service</li>
                            <li>Tenders for Printing & Publishing</li>
                            <li>Tenders for Railway</li>
                            <li>Tenders for Railway Infrastructure</li>
                            <li>Tenders for Renewable Energy</li>
                            <li>Tenders for Roads & Highway</li>
                            <li>Tenders for Roadway</li>
                            <li>Tenders for Security & Safety</li>
                            <li>Tenders for Security Services</li>
                            <li>Tenders for Services</li>
                            <li>Tenders for Sports</li>
                            <li>Tenders for Telecommunication</li>
                            <li>Tenders for Textile & Leather</li>
                            <li>Tenders for Tourism</li>
                            <li>Tenders for Transportation</li>
                            <li>Tenders for Water, Sanitation & Environmental</li>
                        </ul>
                        <p>
                            For more information on tenders across industries, use BidsInfoGlobal’s advanced search features to find relevant opportunities. Stay ahead of your competition and maximize your business opportunities with our regularly updated and comprehensive database.
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