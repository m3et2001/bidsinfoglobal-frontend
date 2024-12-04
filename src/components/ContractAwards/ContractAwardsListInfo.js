import { Dialog } from "primereact/dialog";
import { useState } from "react";

export default function TenderListInfo() {
    const [visible, setVisible] = useState(false);
    return (
        <div className='section-title sectionList ListPageSection'>
            <h3>
                View latest Contract Awards by Region and Contract Awards by Industry  - complete list
            </h3>
            <p>
                Find the latest contract awards and tenders across multiple regions and industries on BidsInfoGlobal. Our platform consolidates contract award information from over 200 countries, offering valuable insights for businesses of all sizes. Contract awards help small or mid players to seek subcontracting opportunities from the big players or contractors who have won the contracts. Contract awards also help assess the competition by looking at who all are majorly winning the contracts in an industry, region, country, etc.
                <span
                    className='readMoreLink'
                    onClick={() => setVisible(true)}
                >
                    Read more
                </span>
                <Dialog
                    className='ModalMaindiwo'
                    header='View latest Contract Awards by Region and Contract Awards by Industry  - complete list'
                    visible={visible}
                    // style={{ width: "80vw" }}
                    style={{ textAlign: "center" }}
                    onHide={() => setVisible(false)}
                >
                    <p className='m-0'>
                        Find the latest contract awards and tenders across multiple regions and industries on BidsInfoGlobal. Our platform consolidates contract award information from over 200 countries, offering valuable insights for businesses of all sizes. Contract awards help small or mid players to seek subcontracting opportunities from the big players or contractors who have won the contracts. Contract awards also help assess the competition by looking at who all are majorly winning the contracts in an industry, region, country, etc.
                    </p>
                    <div className='modal_dialog_box'>
                        <h3 className='ModalTitle'>
                            Contract Awards by Region:
                        </h3>

                        <ul style={{ textAlign: "left" }}>
                            <li>Contract Awards for APEC (Asia-Pacific Economic Cooperation)</li>
                            <li>Contract Awards for Africa Region</li>
                            <li>Contract Awards for America Region</li>
                            <li>Contract Awards for Asia Region</li>
                            <li>Contract Awards for Australia and New Zealand</li>
                            <li>Contract Awards for Australia and Oceania</li>
                            <li>Contract Awards for Balkan Region</li>
                            <li>Contract Awards for Baltic Region</li>
                            <li>Contract Awards for CIS Region</li>
                            <li>Contract Awards for Caribbean Region</li>
                            <li>Contract Awards for Central Africa/Middle Africa</li>
                            <li>Contract Awards for Central America</li>
                            <li>Contract Awards for Central Asia</li>
                            <li>Contract Awards for Central Europe</li>
                            <li>Contract Awards for East Africa/Eastern Africa</li>
                            <li>Contract Awards for Eastern Asia</li>
                            <li>Contract Awards for Eastern Europe</li>
                            <li>Contract Awards for Europe Region</li>
                            <li>Contract Awards for GCC (Gulf Cooperation Council) Countries</li>
                            <li>Contract Awards for Gulf Countries</li>
                            <li>Contract Awards for Latin America</li>
                            <li>Contract Awards for MENA (Middle East & North Africa)</li>
                            <li>Contract Awards for Mediterranean Region</li>
                            <li>Contract Awards for Melanesia</li>
                            <li>Contract Awards for Micronesia</li>
                            <li>Contract Awards for Middle East Asia</li>
                            <li>Contract Awards for North Africa/Northern Africa</li>
                            <li>Contract Awards for Northern America</li>
                            <li>Contract Awards for Northern Europe</li>
                            <li>Contract Awards for Polynesia</li>
                            <li>Contract Awards for SAARC (South Asian Association for Regional Cooperation)</li>
                            <li>Contract Awards for SADC (Southern African Development Community)</li>
                            <li>Contract Awards for South America</li>
                            <li>Contract Awards for South Asia</li>
                            <li>Contract Awards for South East Asia</li>
                            <li>Contract Awards for South Pacific Oceania</li>
                            <li>Contract Awards for Southern Africa</li>
                            <li>Contract Awards for Southern Europe</li>
                            <li>Contract Awards for Sub-Saharan Africa</li>
                            <li>Contract Awards for West Africa</li>
                            <li>Contract Awards for Western Asia</li>
                            <li>Contract Awards for Western Europe</li>
                        </ul>


                    </div>
                    <div className='modal_dialog_box'>
                        <h3 className='ModalTitle'>
                            Contract Awards by Industry:
                        </h3>
                        <ul style={{ textAlign: "left" }}>
                            <li>Contract Awards for Access Control & Biometric</li>
                            <li>Contract Awards for Agriculture and Food & Beverage</li>
                            <li>Contract Awards for Airport</li>
                            <li>Contract Awards for Architecture</li>
                            <li>Contract Awards for Automobile</li>
                            <li>Contract Awards for Aviation</li>
                            <li>Contract Awards for Bridge & Tunnel</li>
                            <li>Contract Awards for Building</li>
                            <li>Contract Awards for Business/Management Consultancy</li>
                            <li>Contract Awards for Chemicals</li>
                            <li>Contract Awards for Construction</li>
                            <li>Contract Awards for Construction Materials</li>
                            <li>Contract Awards for Consultancy</li>
                            <li>Contract Awards for Defence</li>
                            <li>Contract Awards for Education & Training</li>
                            <li>Contract Awards for Electrical & Automation</li>
                            <li>Contract Awards for Energy & Power</li>
                            <li>Contract Awards for Engineering</li>
                            <li>Contract Awards for Entertainment & Media Services</li>
                            <li>Contract Awards for Finance & Insurance</li>
                            <li>Contract Awards for Fire Systems & Services</li>
                            <li>Contract Awards for Furniture</li>
                            <li>Contract Awards for GPS/GIS</li>
                            <li>Contract Awards for Harbour & Ports</li>
                            <li>Contract Awards for Healthcare</li>
                            <li>Contract Awards for Hospital & Medical Equipment</li>
                            <li>Contract Awards for Human Resource & Manpower</li>
                            <li>Contract Awards for IT Hardware</li>
                            <li>Contract Awards for IT Software</li>
                            <li>Contract Awards for Industry Sectors</li>
                            <li>Contract Awards for Information Technology</li>
                            <li>Contract Awards for Laboratory</li>
                            <li>Contract Awards for Legal & Law</li>
                            <li>Contract Awards for Machinery & Equipment</li>
                            <li>Contract Awards for Marine</li>
                            <li>Contract Awards for Metals & Non-Metals</li>
                            <li>Contract Awards for Mining & Minerals</li>
                            <li>Contract Awards for Non-Renewable Energy</li>
                            <li>Contract Awards for O&G Equipment</li>
                            <li>Contract Awards for O&G Services</li>
                            <li>Contract Awards for Oil & Gas</li>
                            <li>Contract Awards for Paper & Packaging</li>
                            <li>Contract Awards for Pharmaceuticals</li>
                            <li>Contract Awards for Plastic & Rubber</li>
                            <li>Contract Awards for Postal & Courier Service</li>
                            <li>Contract Awards for Printing & Publishing</li>
                            <li>Contract Awards for Railway</li>
                            <li>Contract Awards for Railway Infrastructure</li>
                            <li>Contract Awards for Renewable Energy</li>
                            <li>Contract Awards for Roads & Highway</li>
                            <li>Contract Awards for Roadway</li>
                            <li>Contract Awards for Security & Safety</li>
                            <li>Contract Awards for Security Services</li>
                            <li>Contract Awards for Services</li>
                            <li>Contract Awards for Sports</li>
                            <li>Contract Awards for Telecommunication</li>
                            <li>Contract Awards for Textile & Leather</li>
                            <li>Contract Awards for Tourism</li>
                            <li>Contract Awards for Transportation</li>
                            <li>Contract Awards for Water, Sanitation & Environmental</li>
                        </ul>





                    </div>
                    <div className='modal_dialog_box'>
                        {/* <h3 className='ModalTitle'>
                            Discover Global Consultancy
                            ContractAwards
                        </h3> */}
                        <p>
                            For more information on contract awards and tenders from across the globe, use BidsInfoGlobal’s advanced search features to find relevant opportunities by region and industry. Stay ahead in your procurement and business efforts with our regularly updated and comprehensive database.
                        </p>

                    </div>

                </Dialog>
            </p>
        </div>
    )
}