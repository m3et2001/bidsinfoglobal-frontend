import { useState } from "react";
import { Dialog } from "primereact/dialog";

export default function ProjectsByRegionInfo() {
    const [visible, setVisible] = useState(false);

    return (
        <div className='section-title sectionList ListPageSection'>
            <h3>
                View latest Projects by Region - complete list
            </h3>
            <p>
                Find the latest projects across regions on BidsInfoGlobal. Our platform consolidates project information across different regions in the world, offering valuable insights for businesses of all sizes.
                <span
                    className='readMoreLink'
                    onClick={() => setVisible(true)}
                >
                    Read more
                </span>
                <Dialog
                    className='ModalMaindiwo'
                    header='View latest Projects by Region - complete list'
                    visible={visible}
                    style={{ textAlign: "center" }}

                    onHide={() => setVisible(false)}
                >
                    <p className='m-0'>
                        Find the latest projects across regions on BidsInfoGlobal. Our platform consolidates project information across different regions in the world, offering valuable insights for businesses of all sizes.
                    </p>
                    <div className='modal_dialog_box'>
                        <h3 className='ModalTitle'>
                            Projects by Region:
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
<ul style={{ textAlign: "left" }} >
    <li>Projects for APEC (Asia-Pacific Economic Cooperation)</li>
    <li>Projects for Africa Region</li>
    <li>Projects for America Region</li>
    <li>Projects for Asia Region</li>
    <li>Projects for Australia and New Zealand</li>
    <li>Projects for Australia and Oceania</li>
    <li>Projects for Balkan Region</li>
    <li>Projects for Baltic Region</li>
    <li>Projects for CIS Region</li>
    <li>Projects for Caribbean Region</li>
    <li>Projects for Central Africa/Middle Africa</li>
    <li>Projects for Central America</li>
    <li>Projects for Central Asia</li>
    <li>Projects for Central Europe</li>
    <li>Projects for East Africa/Eastern Africa</li>
    <li>Projects for Eastern Asia</li>
    <li>Projects for Eastern Europe</li>
    <li>Projects for Europe Region</li>
    <li>Projects for GCC (Gulf Cooperation Council) Countries</li>
    <li>Projects for Gulf Countries</li>
    <li>Projects for Latin America</li>
    <li>Projects for MENA (Middle East & North Africa)</li>
    <li>Projects for Mediterranean Region</li>
    <li>Projects for Melanesia</li>
    <li>Projects for Micronesia</li>
    <li>Projects for Middle East Asia</li>
    <li>Projects for North Africa/Northern Africa</li>
    <li>Projects for Northern America</li>
    <li>Projects for Northern Europe</li>
    <li>Projects for Polynesia</li>
    <li>Projects for SAARC (South Asian Association for Regional Cooperation)</li>
    <li>Projects for SADC (Southern African Development Community)</li>
    <li>Projects for South America</li>
    <li>Projects for South Asia</li>
    <li>Projects for South East Asia</li>
    <li>Projects for South Pacific Oceania</li>
    <li>Projects for Southern Africa</li>
    <li>Projects for Southern Europe</li>
    <li>Projects for Sub-Saharan Africa</li>
    <li>Projects for West Africa</li>
    <li>Projects for Western Asia</li>
    <li>Projects for Western Europe</li>
</ul>

                      

                    </div>
                    <div className='modal_dialog_box'>
                        {/* <h3 className='ModalTitle'>
                            Discover Global Consultancy
                            Projects
                        </h3> */}
                        <p>
                            For more information on projects across regions, use BidsInfoGlobal’s advanced search features to find relevant opportunities. Stay ahead of your competition and maximize your business opportunities with our regularly updated and comprehensive database.
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