import { Link, useNavigate } from "react-router-dom";

export default function SingleTendersBy({ data, type }) {

    const Navigate = useNavigate()
    // const handleActionClick = (e, payload) => {
    //     e.preventDefault();

    //     navigate("/tenders-list", { state: { [type]: payload.name } })
    // }
    const handleActionClick = (e, payload, type, url) => {
        e.preventDefault();
        Navigate(url, { state: { [type]: [payload] } });

    };

    return (
        <Link to={"/tenders-list"} onClick={(e) =>
            handleActionClick(
                e,
                data,
                "sectorVal",
                "/tenders-list"
            )
        }
            className='col-lg-2 col-md-3 col-sm-6 cat_list_style d-flex align-items-stretch mb-4 mt-2'
            data-aos='fade-up'
            data-aos-delay='100'
            style={{ color: "#003c5e" }}

        >
            {/* <div
                className='col-lg-2 col-md-3 col-sm-6 cat_list_style d-flex align-items-stretch mb-4 mt-2'
                data-aos='fade-up'
                data-aos-delay='100'
            > */}
            <div className='icon-box'>
                <div className='catListCount'> {data?.tenders_count} </div>
                {
                    data?.icon
                        ?
                        <div className='icon nobg'>
                            <img src={data?.icon} alt={data?.name} />
                        </div>
                        :
                        null
                }
                <h4>

                    {data?.name}


                </h4>
                {
                    type === "cpvCodesVal"
                        ?
                        <h4>{data.code}</h4>
                        :
                        null
                }
            </div>
            {/* </div> */}
        </Link>
    )
}
