import { Dialog } from "primereact/dialog";
import { useEffect, useState } from "react";
import mastersApis from "../../store/masters/mastersApis";
import { useLocation } from "react-router-dom";
function trimParagraph(paragraph, wordLimit) {
    // Split the paragraph into words
    if (!paragraph) { return "" }

    const words = paragraph.split(" ");
    // If the paragraph has fewer or equal words than the limit, return it as-is
    if (words.length <= wordLimit) {
        return paragraph;
    }
    // Join the first 150 words and add an ellipsis
    return words.slice(0, wordLimit).join(" ") + "...";
}

function Description({ description }) {
    if (!description) { return "" }
    const formattedDescription = description.replace(/\n/g, "<br />");

    return (
        <div dangerouslySetInnerHTML={{ __html: formattedDescription }} />
    );
}

export default function TenderListInfo({ getSectorsData }) {
    const [visible, setVisible] = useState(false);
    const [isTitleShow, SetIsTitleShow] = useState(false);
    const [title, setTitle] = useState({});
    const location = useLocation();

    useEffect(() => {
        SetIsTitleShow(false)

        const stateKey = Object.keys(location?.state ? location.state : {}).filter(element => element !== "sortBy");
        const stateValue = Object.values(location?.state ? location.state : {})
        if (stateKey.length === 1) {
            if (stateValue[0]?.length === 1) {
                if (stateValue[0][0]?.title) {
                    SetIsTitleShow(true)
                    console.log(stateValue)
                    setTitle({
                        title: stateValue[0][0].title,
                        description: stateValue[0][0].description,
                        project_title: stateValue[0][0]?.project_title,
                        project_description: stateValue[0][0]?.project_description,
                    })
                }
            }
            else {

            }
        }


    }, [location.state])
    return (
        <div className='section-title sectionList ListPageSection'>
            {console.log(title)}
            {isTitleShow &&
                <>
                    <h3 >
                        {title?.project_title}
                    </h3>
                    <p >
                        <Description description={trimParagraph(title?.project_description, 100)} />
                        <span
                            className='readMoreLink'
                            onClick={() => setVisible(true)}
                            style={{ textAlign: "center" }}
                        >
                            Read more
                        </span>
                        <Dialog
                            className='ModalMaindiwo'
                            header={title?.project_title}
                            visible={visible}
                            style={{ width: "80vw", textAlign: "center" }}
                            onHide={() => setVisible(false)}
                        >
                            <p className='m-0'


                            >
                                <Description description={title?.project_description} />

                            </p>

                        </Dialog>
                    </p>
                </>}
        </div>
    )
}
