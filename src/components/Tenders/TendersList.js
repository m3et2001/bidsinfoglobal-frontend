import React, { Fragment, useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import TenderSidebarFilter from "../common/TendersSidebarFilter";
import FullScreenLoadingGrow from "../common/FullScreenLoadingGrow";
import { Paginator } from "primereact/paginator";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { format, parseISO } from "date-fns";
import { handleDateDefault } from "../../helpers/utils";

export default function TendersList({
  getRegionsData,
  getSectorsData,
  getCpvCodesData,
  getCountryData,
  getFundingAgencyData,
  data,
  loading,
  fetchTenders,
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const [first, setFirst] = useState(0);
  const [sidebarFilter, setSidebarFilter] = useState({});

  useEffect(() => {
    let payload = {};
    if (location.state?.sectorVal && location.state.sectorVal.length > 0)
      payload.sectors = location.state.sectorVal
        .map((val) => {
          return val.name;
        })
        .join(",");

    if (location.state?.regionsVal && location.state.regionsVal.length > 0)
      payload.regions = location.state.regionsVal
        .map((val) => {
          return val.name;
        })
        .join(",");
    if (location.state?.cpvCodesVal && location.state.cpvCodesVal.length > 0)
      payload.cpv_codes = location.state.cpvCodesVal
        .map((val) => {
          return val.name;
        })
        .join(",");

    if (location.state?.country && location.state.country.length > 0)
      payload.country = location.state.country
        .map((val) => {
          return val.name;
        })
        .join(",");

    if (Object.keys(payload).length) {
      handleFilter(payload);
    }
  }, [location.state]);
  const [isFilterChange, setIsFilterChanged] = useState(false)
  const setFilter = (e) => {
    setIsFilterChanged(true)
    // navigate(location.pathname, { state: {...location.state}, replace: true });
    setSidebarFilter(e);
  };

  useEffect(() => {
    if (sidebarFilter && Object.keys(sidebarFilter).length > 0) { handleFilter(); }

  }, [sidebarFilter]);

  const handleFilter = (payload) => {
    window.scrollTo(0, 0);
    const dataPage = data.pageNo ? data.pageNo : 0;
    setFirst(payload?.first !== undefined ? payload.first : dataPage);
    fetchTenders({
      pageNo: payload?.page ? payload.page : data.pageNo,
      limit: payload?.rows ? payload.rows : data.limit,
      sortBy: payload?.sortOrder || data.sortBy,
      sortField: payload?.sortField || data.sortField,
      ...sidebarFilter,
    }, isFilterChange, setIsFilterChanged);
  };

  const TitleRow = (rowData) => {
    return (
      <Link
        target="_blank"
        className="limit-description"
        to={`/tenders/${rowData?.big_ref_no}`}
      >
        {rowData?.title}
      </Link>
    );
  };

  const publishedDateRow = (rowData) => {
    return handleDateDefault(rowData?.published_date);
  };

  const closingDateRow = (rowData) => {
    return handleDateDefault(rowData?.closing_date);
  };

  // console.log(data, "data");

  return (
    <div className="row">
      {!location?.state?.advance_search ? (
        <div className="col-md-3">
          <div className="FLiterListDiv">
            <div className="filterTitle">
              <h2>Filter Your Data</h2>
            </div>
            <TenderSidebarFilter
              getRegionsData={getRegionsData}
              getSectorsData={getSectorsData}
              getCpvCodesData={getCpvCodesData}
              getCountryData={getCountryData}
              getFundingAgencyData={getFundingAgencyData}
              onSubmit={(d) => setFilter(d)}
              noticeType={"Tender"}
              {...location.state}
            />
          </div>
        </div>
      ) : null}
      <div className={`col-md-${location?.state?.advance_search ? "12" : "9"}`}>
        <div className="ListDetailsDiv">
          {loading ? (
            <FullScreenLoadingGrow />
          ) : (
            <Fragment>
              <div>
                <h3 className="result_page">
                  {data?.count || 0} - Document matches your
                  {location?.state?.advance_search
                    ? " advance search"
                    : ""}{" "}
                  request
                </h3>
              </div>
              <DataTable
                value={data.result}
                sortField={data.sortField}
                sortOrder={Number(data.sortBy)}
                className="TableMainData"
                showGridlines
                tableStyle={{ minWidth: "50rem" }}
                onPage={(val) => handleFilter(val)}
                onSort={(val) => handleFilter(val)}
              >
                <Column
                  className="TableHeader"
                  field="country"
                  sortable
                  header="Country"
                ></Column>
                <Column
                  className="TableHeader"
                  field="big_ref_no"
                  sortable
                  header="Big Ref. No"
                ></Column>
                <Column
                  className="TableHeader"
                  body={TitleRow}
                  field="title"
                  sortable
                  header="Title"
                ></Column>
                <Column
                  className="TableHeader"
                  body={publishedDateRow}
                  sortable
                  field="published_date"
                  header="Publish Date"
                ></Column>
                <Column
                  className="TableHeader"
                  body={closingDateRow}
                  sortable
                  field="closing_date"
                  header="Closing Date"
                ></Column>
              </DataTable>
              {console.log(first)}
              <Paginator
                first={first}
                rows={Number(data?.limit)}
                totalRecords={Number(data.count)}
                rowsPerPageOptions={[15, 25, 50]}
                onPageChange={(val) => handleFilter(val)}
              />
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
}
