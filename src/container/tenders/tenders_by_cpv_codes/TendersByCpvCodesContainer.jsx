import React, { Fragment } from "react";
import FullScreenLoadingGrow from "../../../components/common/FullScreenLoadingGrow";
import BreadCrumbs from "../../../components/common/BreadCrumbs";
import TendersByInfo from "../../../components/Tenders/TendersBySectorInfo";
import SingleTendersBy from "../../../components/Tenders/SingleTendersBy";
import { Button } from "../../../components/common/Button";

class TendersByCpvCodesContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            cpv_codes_loading: true,
            cpv_codes_data: [],
            limit: "18",
            pageNo: "0",
            loading_more: false,
            count: 0,
        };
    }

    initialFunction = async () => {
        let cpvCodesRes = await this.props.getCpvCodesData({
            pageNo: this.state.pageNo,
            limit: this.state.limit,
            sortBy: "1",
            sortField: "name",
            by_tenders_count: "true",
        });
        if (cpvCodesRes.isSuccess) {
            this.setState({
                cpv_codes_loading: false,
                cpv_codes_data: [
                    ...this.state.cpv_codes_data,
                    ...cpvCodesRes.data?.result,
                ],
                loading_more: false,
                count: cpvCodesRes.data.count,
            });
        }
    };

    componentDidMount() {
        this.initialFunction();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.pageNo !== prevState.pageNo) {
            this.setState({ loading_more: true });
            this.initialFunction();
        }
    }

    render() {
        const { navigate } = this.props;
        if (this.state.regions_loading) return <FullScreenLoadingGrow />;
        return (
            <Fragment>
                <BreadCrumbs
                    main='Tenders By Sector'
                    current={"Tenders By Sector"}
                />

                <main className='bodyMain'>
                    <section id='faq' className='faq'>
                        <div className='container' data-aos='fade-up'>
                            <TendersByInfo />
                        </div>
                    </section>
                    <section className='CategoryLst services section-bg pd10'>
                        <div className='container'>
                            <div className='row'>
                                {this.state.cpv_codes_data.length > 0 &&
                                    this.state.cpv_codes_data.map(function (
                                        val,
                                        key
                                    ) {
                                        return (
                                            <SingleTendersBy
                                                data={val}
                                                key={key}
                                                navigate={navigate}
                                                type={"cpvCodesVal"}
                                            />
                                        );
                                    })}
                            </div>

                            {this.state.count !==
                            this.state.cpv_codes_data.length ? (
                                <div className='row justify-content-md-center'>
                                    <div className='col-md-auto'>
                                        <Button
                                            type='button'
                                            className={"commonBtn"}
                                            value='Load more'
                                            loading={this.state.loading_more}
                                            onClick={() =>
                                                this.setState({
                                                    pageNo: (
                                                        Number(
                                                            this.state.pageNo
                                                        ) + 1
                                                    ).toString(),
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </section>
                </main>
            </Fragment>
        );
    }
}

export default TendersByCpvCodesContainer;
