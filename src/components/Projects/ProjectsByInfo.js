import { useState } from "react";
import { Dialog } from "primereact/dialog";

export default function ProjectsByInfo() {
    const [visible, setVisible] = useState(false);

    return (
        <div className='section-title sectionList ListPageSection'>
            <h3>
                View latest Projects by Sectors - complete
                list
            </h3>
            <p>
                bidsinfoglobal has the most comprehensive
                database of Projects from 150+ Sectors and
                industries Globally. Find Sector-wise bids,
                eprocurement notices, eprojects and more. Get
                Projects by local and international
                government authorities for your sector on
                daily basis. We provide valuable
                opportunities for a wide range of
                businesses, manufacturers, service
                providers, MSMEs, SMEs and more, across
                various sub-industries and sectors.
                <span
                    className='readMoreLink'
                    onClick={() => setVisible(true)}
                >
                    Read more
                </span>
                <Dialog
                    className='ModalMaindiwo'
                    header='Consultancy Projects - Govt eTender, Consultancy eProcurement Notice, RFP, bids'
                    visible={visible}
                    style={{ width: "80vw" }}
                    onHide={() => setVisible(false)}
                >
                    <p className='m-0'>
                        Consultancy Projects: Find Latest
                        Tender Notices, for thousands of
                        Consultancy eProjects, eProcurement
                        Notices, Bids, Updates & more.
                        Search Government & Private
                        Consultancy Projects published on
                        various tender and eProcurement
                        portals worldwide. bidsinfoglobal
                        Has the Largest Database of Global
                        Consultancy Projects online. We cover
                        Consultancy Projects published on
                        thousands of online Tender portals
                        and Newspapers. So that you do not
                        have to visit 100s of websites to
                        find perfect Consultancy tender for
                        your Businesss. Get 100% accurate
                        Tender information for Consultancy
                        projects & find Complete tender
                        details. along with that you can
                        also get tender results, tender
                        updates, procurement notice, Govt
                        Projects, Tender notifications &
                        govt contracts.
                    </p>
                    <div className='modal_dialog_box'>
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
                        <ul>
                            <li>
                                Consultancy projects by
                                cities
                            </li>
                            <li>
                                Consultancy projects by
                                states
                            </li>
                            <li>
                                Consultancy projects by
                                coutries
                            </li>
                            <li>
                                Consultancy projects by Value
                            </li>
                            <li>
                                Consultancy projects by
                                opening & Closing Date
                            </li>
                            <li>
                                Consultancy projects by
                                Authority
                            </li>
                        </ul>
                    </div>
                    <div className='modal_dialog_box'>
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
                    </div>
                    <div className='modal_dialog_box'>
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
                    </div>
                </Dialog>
            </p>
        </div>
    )
}