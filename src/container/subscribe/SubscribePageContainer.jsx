import React, { Fragment } from "react";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import SubscribeComponent from "../../components/SubscribeComponent";
import FullScreenLoadingGrow from "../../components/common/FullScreenLoadingGrow";

class SubscribePageContainer extends React.Component {
    componentDidMount() {
        this.props.getPlanList();
    }

    handlePlan = async (payload) => {
        this.props.subscribePlan(payload);
    }

    render() {
        const { data, status } = this.props.plan_list;
        const { submit_loading, success } = this.props;

        if (status !== "fulfilled") return <FullScreenLoadingGrow />;


        return (
            <Fragment>
                <BreadCrumbs main='Subscribe' current={"Subscribe"} />

                <main className='bodyMain'>
                    <section id='pricing' className='pricing'>
                        <div className='container' data-aos='fade-up'>
                            <div className='section-title'>
                                <h2>Pricing</h2>
                                <h3>
                                    Check our <span>Pricing</span>
                                </h3>
                                <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
                                    adipisci expedita at voluptas atque vitae autem.
                                </p>
                            </div>

                            <SubscribeComponent
                                data={data}
                                handlePlan={this.handlePlan}
                                submit_loading={submit_loading}
                                success={success}
                            />
                        </div>
                    </section>
                </main>
            </Fragment>
        );
    }
}

export default SubscribePageContainer;
