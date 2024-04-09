import React, { Fragment, useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import TenderSidebarFilter from "../common/TendersSidebarFilter";
import FullScreenLoadingGrow from "../common/FullScreenLoadingGrow";
import { Paginator } from "primereact/paginator";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { handleDateDefault } from "../../helpers/utils";

export default function GrantsList({ getRegionsData, getSectorsData, getCpvCodesData, getCountryData, getFundingAgencyData, data, loading, fetchGrants }) {
    const location = useLocation();
    const [first, setFirst] = useState(0);
    const [sidebarFilter, setSidebarFilter] = useState({});

    const setFilter = (e) => {
        setSidebarFilter(e);
    }

    useEffect(() => {
        if (sidebarFilter && Object.keys(sidebarFilter).length > 0)
            handleFilter();
    }, [sidebarFilter])

    const handleFilter = (payload, extra = {}) => {
        setFirst(payload?.first !== undefined ? payload.first : data.pageNo);
        fetchGrants({
            pageNo: payload?.page !== undefined ? payload.page : data.pageNo,
            limit: payload?.rows !== undefined ? payload.rows : data.limit,
            sortBy: payload?.sortOrder || data.sortBy,
            sortField: payload?.sortField || data.sortField,
            ...sidebarFilter
        })
    }

    const DescriptionRow = (rowData) => {
        return <Link target="_blank" to={`/grants/${rowData?.big_ref_no}`}>{rowData.title}</Link>;
    };

    const postDateRow = (rowData) => {
        return handleDateDefault(rowData.post_date);
    };

    return (
        <div className='row'>
            {
                !location?.state?.advance_search
                    ?
                    <div className='col-md-3'>
                        <div className='FLiterListDiv'>
                            <div className='filterTitle'>
                                <h2>Filter Your Data</h2>
                            </div>

                            <TenderSidebarFilter
                                getRegionsData={getRegionsData}
                                getSectorsData={getSectorsData}
                                getCpvCodesData={getCpvCodesData}
                                getCountryData={getCountryData}
                                getFundingAgencyData={getFundingAgencyData}
                                onSubmit={(d) => setFilter(d)}
                                noticeType="Grants"
                                {...location.state}
                            />
                        </div>
                    </div>
                    :
                    null
            }
            <div className={`col-md-${location?.state?.advance_search ? "12" : "9"}`}>
                <div className='ListDetailsDiv'>
                    {
                        loading
                            ?
                            <FullScreenLoadingGrow />
                            :
                            <Fragment>
                                <div>
                                    <h3 className='result_page'>
                                        {data?.count || 0} - Document matches your
                                        request
                                    </h3>
                                </div>
                                <DataTable
                                    value={data.result}
                                    sortField={data.sortField}
                                    sortOrder={Number(data.sortBy)}
                                    className='TableMainData'
                                    showGridlines
                                    tableStyle={{ minWidth: "50rem" }}
                                    onPage={(val) => handleFilter(val)}
                                    onSort={(val) => handleFilter(val)}
                                >
                                    <Column
                                        className='TableHeader'
                                        field='location'
                                        sortable
                                        header='Country'
                                    ></Column>
                                    <Column
                                        className='TableHeader'
                                        field='sectors'
                                        sortable
                                        header='Grant Sector'
                                    ></Column>
                                    <Column
                                        className='TableHeader'
                                        body={DescriptionRow}
                                        sortable
                                        header='Grant Title'
                                    ></Column>
                                    <Column
                                        className='TableHeader'
                                        body={postDateRow}
                                        sortable
                                        header='Grant Date'
                                    ></Column>
                                    <Column
                                        className='TableHeader'
                                        field={'deadline'}
                                        sortable
                                        header='Grant Deadline'
                                    ></Column>
                                </DataTable>
                                <Paginator first={first} rows={Number(data?.limit)} totalRecords={data.count} rowsPerPageOptions={[15, 25, 50]} onPageChange={(val) => handleFilter(val)} />
                            </Fragment>
                    }
                </div>
            </div>
        </div>
    )
}