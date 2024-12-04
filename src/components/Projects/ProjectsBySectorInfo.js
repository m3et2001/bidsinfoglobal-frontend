import { useState } from "react";
import { Dialog } from "primereact/dialog";

export default function ProjectsBySectorInfo() {
    const [visible, setVisible] = useState(false);

    return (
        <div className='section-title sectionList ListPageSection'>
            <h3>
                View latest Projects by Sectors - complete list
            </h3>
            <p>
                Find the latest projects across Industries and Sectors on BidsInfoGlobal. Our platform consolidates project information across industries, offering valuable insights for businesses of all sizes.
                <span
                    className='readMoreLink'
                    onClick={() => setVisible(true)}
                >
                    Read more
                </span>
                <Dialog
                    className='ModalMaindiwo'
                    header='View latest Projects by Sectors - complete list'
                    visible={visible}
                    style={{ textAlign:"center" }}
                    
                    onHide={() => setVisible(false)}
                >
                    <p className='m-0'>
                        Find the latest projects across Industries and Sectors on BidsInfoGlobal. Our platform consolidates project information across industries, offering valuable insights for businesses of all sizes.
                    </p>
                    <div className='modal_dialog_box'>
                        <h3 className='ModalTitle'>
                            Projects by Industry/Sectors:
                        </h3>
                        {/* <p>
                            bidsinfoglobal has the most
                            comprehensive coverage for
                            Consultancy projects in 200+
                            countries globally. So Whether
                            you are looking for small value
                            local tender or a High Value
                            International Consultancy
                            Tender, You can be assured to
                            find the Perfect Business
                            opportunity from any corner of
                            the world as bidsinfoglobal is
                            largest tender aggergator for
                            Consultancy projects of all types
                            where users can find
                        </p> */}
                    
                    <ul style={{ textAlign:"left" }} >
                            <li>Projects for Access Control & Biometric</li>
                            <li>Projects for Agriculture and Food & Beverage</li>
                            <li>Projects for Airport</li>
                            <li>Projects for Architecture</li>
                            <li>Projects for Automobile</li>
                            <li>Projects for Aviation</li>
                            <li>Projects for Bridge & Tunnel</li>
                            <li>Projects for Building</li>
                            <li>Projects for Business/Management Consultancy</li>
                            <li>Projects for Chemicals</li>
                            <li>Projects for Construction</li>
                            <li>Projects for Construction Materials</li>
                            <li>Projects for Consultancy</li>
                            <li>Projects for Defence</li>
                            <li>Projects for Education & Training</li>
                            <li>Projects for Electrical & Automation</li>
                            <li>Projects for Energy & Power</li>
                            <li>Projects for Engineering</li>
                            <li>Projects for Entertainment & Media Services</li>
                            <li>Projects for Finance & Insurance</li>
                            <li>Projects for Fire Systems & Services</li>
                            <li>Projects for Furniture</li>
                            <li>Projects for GPS/GIS</li>
                            <li>Projects for Harbour & Ports</li>
                            <li>Projects for Healthcare</li>
                            <li>Projects for Hospital & Medical Equipment</li>
                            <li>Projects for Human Resource & Manpower</li>
                            <li>Projects for IT Hardware</li>
                            <li>Projects for IT Software</li>
                            <li>Projects for Industry Sectors</li>
                            <li>Projects for Information Technology</li>
                            <li>Projects for Laboratory</li>
                            <li>Projects for Legal & Law</li>
                            <li>Projects for Machinery & Equipment</li>
                            <li>Projects for Marine</li>
                            <li>Projects for Metals & Non-Metals</li>
                            <li>Projects for Mining & Minerals</li>
                            <li>Projects for Non-Renewable Energy</li>
                            <li>Projects for O&G Equipment</li>
                            <li>Projects for O&G Services</li>
                            <li>Projects for Oil & Gas</li>
                            <li>Projects for Paper & Packaging</li>
                            <li>Projects for Pharmaceuticals</li>
                            <li>Projects for Plastic & Rubber</li>
                            <li>Projects for Postal & Courier Service</li>
                            <li>Projects for Printing & Publishing</li>
                            <li>Projects for Railway</li>
                            <li>Projects for Railway Infrastructure</li>
                            <li>Projects for Renewable Energy</li>
                            <li>Projects for Roads & Highway</li>
                            <li>Projects for Roadway</li>
                            <li>Projects for Security & Safety</li>
                            <li>Projects for Security Services</li>
                            <li>Projects for Services</li>
                            <li>Projects for Sports</li>
                            <li>Projects for Telecommunication</li>
                            <li>Projects for Textile & Leather</li>
                            <li>Projects for Tourism</li>
                            <li>Projects for Transportation</li>
                            <li>Projects for Water, Sanitation & Environmental</li>
                        </ul>

                    </div>
                    <div className='modal_dialog_box'>
                        {/* <h3 className='ModalTitle'>
                            Discover Global Consultancy
                            Projects
                        </h3> */}
                        <p>
                            For more information on projects across industries, use BidsInfoGlobal’s advanced search features to find relevant opportunities. Stay ahead of your competition and maximize your business opportunities with our regularly updated and comprehensive database.
                        </p>
                        {/* <p>
                            bidsinfoglobal has the most
                            comprehensive coverage for
                            Consultancy projects in 200+
                            countries globally. So Whether
                            you are looking for small value
                            local tender or a High Value
                            International Consultancy
                            Tender, You can be assured to
                            find the Perfect Business
                            opportunity from any corner of
                            the world as bidsinfoglobal is
                            largest tender aggergator for
                            Consultancy projects of all types
                            where users can find
                        </p> */}
                    </div>
                    {/* <div className='modal_dialog_box'>
                        <h3 className='ModalTitle'>
                            Discover Global Consultancy
                            Projects
                        </h3>
                        <p>
                            bidsinfoglobal has the most
                            comprehensive coverage for
                            Consultancy projects in 200+
                            countries globally. So Whether
                            you are looking for small value
                            local tender or a High Value
                            International Consultancy
                            Tender, You can be assured to
                            find the Perfect Business
                            opportunity from any corner of
                            the world as bidsinfoglobal is
                            largest tender aggergator for
                            Consultancy projects of all types
                            where users can find
                        </p>
                        <p>
                            bidsinfoglobal has the most
                            comprehensive coverage for
                            Consultancy projects in 200+
                            countries globally. So Whether
                            you are looking for small value
                            local tender or a High Value
                            International Consultancy
                            Tender, You can be assured to
                            find the Perfect Business
                            opportunity from any corner of
                            the world as bidsinfoglobal is
                            largest tender aggergator for
                            Consultancy projects of all types
                            where users can find
                        </p>
                        <p>
                            bidsinfoglobal has the most
                            comprehensive coverage for
                            Consultancy projects in 200+
                            countries globally. So Whether
                            you are looking for small value
                            local tender or a High Value
                            International Consultancy
                            Tender, You can be assured to
                            find the Perfect Business
                            opportunity from any corner of
                            the world as bidsinfoglobal is
                            largest tender aggergator for
                            Consultancy projects of all types
                            where users can find
                        </p>
                        <p>
                            bidsinfoglobal has the most
                            comprehensive coverage for
                            Consultancy projects in 200+
                            countries globally. So Whether
                            you are looking for small value
                            local tender or a High Value
                            International Consultancy
                            Tender, You can be assured to
                            find the Perfect Business
                            opportunity from any corner of
                            the world as bidsinfoglobal is
                            largest tender aggergator for
                            Consultancy projects of all types
                            where users can find
                        </p>
                    </div> */}
                </Dialog>
            </p>
        </div>
    )
}