import { useLocation, useNavigate, useParams } from "react-router-dom";

const withNavigate =
    (Component, location = false) =>
    (props) => {
        const navigate = useNavigate();
        const params = useParams();
        const locationProp = location ? useLocation() : null;
        return (
            <Component
                {...props}
                navigate={navigate}
                params={params}
                location={locationProp}
            />
        );
    };

export default withNavigate;
