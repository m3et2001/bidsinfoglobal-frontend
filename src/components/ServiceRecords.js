import { NewLineText } from "../helpers/utils";

export default function ServiceRecords({ image, title, description }) {
    return (
        <div className='col-md-6 col-sm-12 d-flex align-items-stretch mb-5 text-center'>
            <div
                className='icon-box'
                data-aos='fade-up'
                data-aos-delay='100'
            >
                <div className='icon'>
                    <img
                        src={image}
                        className='img-fluid'
                        alt=''
                    />
                </div>
                <h4 className='title'>
                    {title}
                </h4>
                <NewLineText text={description} className='description' />
                {/* <p className='description'>
                    <pre>{description}</pre>
                </p> */}
            </div>
        </div>
    )
}