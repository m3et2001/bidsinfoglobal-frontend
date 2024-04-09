import { Link } from "react-router-dom";

export default function BreadCrumbs({ main, prev, current }) {
    return (
        <section className="breadcrumbs">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h2>{main}</h2>
                    <ol>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {
                            prev && prev.map(function (val, ind) {
                                return (
                                    <li key={ind}>
                                        <Link to={val.to}>{val.title}</Link>
                                    </li>
                                )
                            })
                        }
                        <li>{current}</li>
                    </ol>
                </div>
            </div>
        </section>
    )
}