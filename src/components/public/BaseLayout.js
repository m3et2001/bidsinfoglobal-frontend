import Header from "../layouts/header";
import Topbar from "../layouts/topbar";
import Footer from "../layouts/footer";

const BaseLayout = (props) => {

    const { ChildComponent, social_links, contactDetails,
        sectors_data, sectors_data_loading,
        regions_data, regions_data_loading,
        cpv_codes_data, cpv_codes_data_loading,
    } = props;

    return (
        <div className='wrapper'>
            <Topbar email={contactDetails?.email} phone={contactDetails?.phone} />
            <Header
                sectors_data={sectors_data} sectors_data_loading={sectors_data_loading}
                regions_data={regions_data} regions_data_loading={regions_data_loading}
                cpv_codes_data={cpv_codes_data} cpv_codes_data_loading={cpv_codes_data_loading}
                navigate={props.navigate}
            />

            <ChildComponent />

            <Footer links={social_links} contactDetails={contactDetails} />
        </div>
    )

}

export default BaseLayout;