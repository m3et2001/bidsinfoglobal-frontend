import { Dialog } from "primereact/dialog";
import { useState } from "react";

export default function TenderListInfo() {
    const [visible, setVisible] = useState(false);
    return (
        <div className='section-title sectionList ListPageSection'>
            <h3>
                Consultancy Grants - Govt eTender,
                Consultancy eProcurement Notice, RFP, bids
            </h3>
            <p>
                Consultancy Grants: Find Latest Tender
                Notices, for thousands of Consultancy
                eGrants, eProcurement Notices, Bids,
                Updates & more. Search Government & Private
                Consultancy Grants published on various
                tender and eProcurement portals worldwide.
                bidsinfoglobal Has the Largest Database of
                Global Consultancy Grants online. We cover
                Consultancy Grants published on thousands
                of online Tender portals and Newspapers. So
                that you do not have to visit 100s of
                websites to find perfect Consultancy tender
                for your Businesss...
                <span
                    className='readMoreLink'
                    onClick={() => setVisible(true)}
                >
                    Read more
                </span>
                <Dialog
                    className='ModalMaindiwo'
                    header='Consultancy Grants - Govt eTender, Consultancy eProcurement Notice, RFP, bids'
                    visible={visible}
                    style={{ width: "80vw" }}
                    onHide={() => setVisible(false)}
                >
                    <p className='m-0'>
                        Consultancy Grants: Find Latest
                        Tender Notices, for thousands of
                        Consultancy eGrants, eProcurement
                        Notices, Bids, Updates & more.
                        Search Government & Private
                        Consultancy Grants published on
                        various tender and eProcurement
                        portals worldwide. bidsinfoglobal
                        Has the Largest Database of Global
                        Consultancy Grants online. We cover
                        Consultancy Grants published on
                        thousands of online Tender portals
                        and Newspapers. So that you do not
                        have to visit 100s of websites to
                        find perfect Consultancy tender for
                        your Businesss. Get 100% accurate
                        Tender information for Consultancy
                        grants & find Complete tender
                        details. along with that you can
                        also get tender results, tender
                        updates, procurement notice, Govt
                        Grants, Tender notifications &
                        govt contracts.
                    </p>
                    <div className='modal_dialog_box'>
                        <h3 className='ModalTitle'>
                            Discover Global Consultancy
                            Grants
                        </h3>
                        <p>
                            bidsinfoglobal has the most
                            comprehensive coverage for
                            Consultancy grants in 200+
                            countries globally. So Whether
                            you are looking for small value
                            local tender or a High Value
                            International Consultancy
                            Tender, You can be assured to
                            find the Perfect Business
                            opportunity from any corner of
                            the world as bidsinfoglobal is
                            largest tender aggergator for
                            Consultancy grants of all types
                            where users can find
                        </p>
                        <ul>
                            <li>
                                Consultancy grants by
                                cities
                            </li>
                            <li>
                                Consultancy grants by
                                states
                            </li>
                            <li>
                                Consultancy grants by
                                coutries
                            </li>
                            <li>
                                Consultancy grants by Value
                            </li>
                            <li>
                                Consultancy grants by
                                opening & Closing Date
                            </li>
                            <li>
                                Consultancy grants by
                                Authority
                            </li>
                        </ul>
                    </div>
                    <div className='modal_dialog_box'>
                        <h3 className='ModalTitle'>
                            Discover Global Consultancy
                            Grants
                        </h3>
                        <p>
                            bidsinfoglobal has the most
                            comprehensive coverage for
                            Consultancy grants in 200+
                            countries globally. So Whether
                            you are looking for small value
                            local tender or a High Value
                            International Consultancy
                            Tender, You can be assured to
                            find the Perfect Business
                            opportunity from any corner of
                            the world as bidsinfoglobal is
                            largest tender aggergator for
                            Consultancy grants of all types
                            where users can find
                        </p>
                        <p>
                            bidsinfoglobal has the most
                            comprehensive coverage for
                            Consultancy grants in 200+
                            countries globally. So Whether
                            you are looking for small value
                            local tender or a High Value
                            International Consultancy
                            Tender, You can be assured to
                            find the Perfect Business
                            opportunity from any corner of
                            the world as bidsinfoglobal is
                            largest tender aggergator for
                            Consultancy grants of all types
                            where users can find
                        </p>
                    </div>
                    <div className='modal_dialog_box'>
                        <h3 className='ModalTitle'>
                            Discover Global Consultancy
                            Grants
                        </h3>
                        <p>
                            bidsinfoglobal has the most
                            comprehensive coverage for
                            Consultancy grants in 200+
                            countries globally. So Whether
                            you are looking for small value
                            local tender or a High Value
                            International Consultancy
                            Tender, You can be assured to
                            find the Perfect Business
                            opportunity from any corner of
                            the world as bidsinfoglobal is
                            largest tender aggergator for
                            Consultancy grants of all types
                            where users can find
                        </p>
                        <p>
                            bidsinfoglobal has the most
                            comprehensive coverage for
                            Consultancy grants in 200+
                            countries globally. So Whether
                            you are looking for small value
                            local tender or a High Value
                            International Consultancy
                            Tender, You can be assured to
                            find the Perfect Business
                            opportunity from any corner of
                            the world as bidsinfoglobal is
                            largest tender aggergator for
                            Consultancy grants of all types
                            where users can find
                        </p>
                        <p>
                            bidsinfoglobal has the most
                            comprehensive coverage for
                            Consultancy grants in 200+
                            countries globally. So Whether
                            you are looking for small value
                            local tender or a High Value
                            International Consultancy
                            Tender, You can be assured to
                            find the Perfect Business
                            opportunity from any corner of
                            the world as bidsinfoglobal is
                            largest tender aggergator for
                            Consultancy grants of all types
                            where users can find
                        </p>
                        <p>
                            bidsinfoglobal has the most
                            comprehensive coverage for
                            Consultancy grants in 200+
                            countries globally. So Whether
                            you are looking for small value
                            local tender or a High Value
                            International Consultancy
                            Tender, You can be assured to
                            find the Perfect Business
                            opportunity from any corner of
                            the world as bidsinfoglobal is
                            largest tender aggergator for
                            Consultancy grants of all types
                            where users can find
                        </p>
                    </div>
                </Dialog>
            </p>
        </div>
    )
}