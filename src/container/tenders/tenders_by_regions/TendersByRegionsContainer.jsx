import React, { Fragment } from "react";
import FullScreenLoadingGrow from "../../../components/common/FullScreenLoadingGrow";
import BreadCrumbs from "../../../components/common/BreadCrumbs";
import TendersByInfo from "../../../components/Tenders/TendersByInfo";
import SingleTendersBy from "../../../components/Tenders/SingleTendersBy";
import { Button } from "../../../components/common/Button";

class TendersByRegionsContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            regions_loading: true,
            regions_data: [],
            limit: "18",
            pageNo: "0",
            loading_more: false,
            count: 0,
        };
    }

    initialFunction = async () => {
        let regionsRes = await this.props.getRegionsData({
            pageNo: this.state.pageNo,
            limit: this.state.limit,
            sortBy: "1",
            sortField: "name",
            by_tenders_count: "true",
        });
        if (regionsRes.isSuccess) {
            this.setState({
                regions_loading: false,
                regions_data: [
                    ...this.state.regions_data,
                    ...regionsRes.data?.result,
                ],
                loading_more: false,
                count: regionsRes.data.count,
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
                                {this.state.regions_data.length > 0 &&
                                    this.state.regions_data.map(function (
                                        val,
                                        key
                                    ) {
                                        return (
                                            <SingleTendersBy
                                                data={val}
                                                key={key}
                                                navigate={navigate}
                                                type={"regionsVal"}
                                            />
                                        );
                                    })}
                            </div>

                            {this.state.count !==
                            this.state.regions_data.length ? (
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

export default TendersByRegionsContainer;
