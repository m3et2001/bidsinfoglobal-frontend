import { Link } from "react-router-dom";

export default function ExprocurementRecords({ label, icon }) {
    return (
        <div
            className='col-lg-4 col-md-6 d-flex align-items-stretch'
            data-aos='zoom-in'
            data-aos-delay='100'
        >
            <div className='icon-box'>
                <div className='icon'>
                    <i className={`bx ${icon}`}></i>
                </div>
                <h4>
                    <Link to="/">{label}</Link>
                </h4>
            </div>
        </div>
    )
}