import { Link } from "react-router-dom";

export default function SingleProjectsBy({ data, navigate, type }) {
    const handleActionClick = (e, payload) => {
        e.preventDefault();

        navigate("/projects-list", { state: { [type]: [payload] } })
    }

    return (
        <div
            className='col-lg-2 col-md-3 col-sm-6 cat_list_style d-flex align-items-stretch mb-4 mt-2'
            data-aos='fade-up'
            data-aos-delay='100'
        >
            <div className='icon-box'>
                <div className='catListCount'> {data?.projects_count} </div>
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
                    <Link to={"/projects-list"} onClick={(e) => handleActionClick(e, data?.name)}> {data?.name}  </Link>
                </h4>
                {
                    type === "cpvCodesVal"
                        ?
                        <h4>{data.code}</h4>
                        :
                        null
                }
            </div>
        </div>
    )
}