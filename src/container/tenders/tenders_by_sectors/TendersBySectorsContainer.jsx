import React, { Fragment } from "react";
import FullScreenLoadingGrow from "../../../components/common/FullScreenLoadingGrow";
import BreadCrumbs from "../../../components/common/BreadCrumbs";
import TendersByInfo from "../../../components/Tenders/TendersByInfo";
import SingleTendersBy from "../../../components/Tenders/SingleTendersBy";
import { Button } from "../../../components/common/Button";

class TenderBySectorContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            sectors_loading: true,
            sectors_data: [],
            limit: "18",
            pageNo: "0",
            loading_more: false,
            count: 0,
        };
    }

    initialFunction = async () => {
        let sectorsRes = await this.props.getSectorsData({
            pageNo: this.state.pageNo,
            limit: this.state.limit,
            sortBy: "1",
            sortField: "name",
            by_tenders_count: "true",
        });
        if (sectorsRes.isSuccess) {
            this.setState({
                sectors_loading: false,
                sectors_data: [
                    ...this.state.sectors_data,
                    ...sectorsRes.data?.result,
                ],
                loading_more: false,
                count: sectorsRes.data.count,
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
        if (this.state.sectors_loading) return <FullScreenLoadingGrow />;
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
                                {this.state.sectors_data.length > 0 &&
                                    this.state.sectors_data.map(function (
                                        val,
                                        key
                                    ) {
                                        return (
                                            <SingleTendersBy
                                                data={val}
                                                key={key}
                                                navigate={navigate}
                                                type={"sectorVal"}
                                            />
                                        );
                                    })}
                            </div>

                            {this.state.count !==
                            this.state.sectors_data.length ? (
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

export default TenderBySectorContainer;
