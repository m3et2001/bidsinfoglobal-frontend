import { Spinner } from "react-bootstrap";

export const Button = ({ className, type, id, onClick = () => { }, value, loading }) => {
    return (
        <button className={className} type={type} id={id} onClick={onClick} disabled={loading ? true : false} >
            {
                loading
                    ?
                    <Spinner animation="border" size='sm' />
                    :
                    value
            }
        </button>
    )
}