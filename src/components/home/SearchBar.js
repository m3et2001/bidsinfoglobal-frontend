import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import RegionSelect from "../../components/common/RegionSelect";
import SectorSelect from "../../components/common/SectorSelect";
import CountrySelect from "../common/CountrySelect";

const SearchBar = ({
  getRegionsData,
  getSectorsData,
  getCountryData,
  navigate,
}) => {
  const [region, setRegions] = useState([]);
  const [sector, setSector] = useState([]);
  const [country, setCountry] = useState([]);
  const [keywords, setKeywords] = useState([]);

  const handleSubmit = () => {
    navigate("/tenders-list", {
      state: {
        sectorVal: sector,
        regionsVal: region,
        country: country,
        keywords: keywords,
      },
    });
  };

  return (
    <div className="searcHhome">
      <div className="mainSearchflex " style={{ gap: "20px" }}>
        <form className="flexSearch" onSubmit={() => handleSubmit()}>
          <div className="selectInput">
            <input
              onChange={(e) => setKeywords(e.target.value)}
              type="text"
              size="30"
              name="search_text"
              className="form-control customInput customInputIcon"
              id="input1"
              placeholder="Free text search..."
            />
            <div id="livesearch"></div>
          </div>
          <div className="selectSearch">
            <RegionSelect
              className={"form-control customInput customInputIcon"}
              getRegionsData={getRegionsData}
              name="regions"
              multiple={true}
              onChange={(e) => setRegions(e.target.value)}
              value={region || []}
              placeholder={`Type regions here`}
            />
          </div>
          <div className="selectSearch">
            <SectorSelect
              className={"form-control customInput customInputIcon"}
              getSectorsData={getSectorsData}
              name="sector"
              multiple={true}
              onChange={(e) => setSector(e.target.value)}
              value={sector || []}
              placeholder={`Type sector here`}
            />
          </div>
          <div className="selectSearch">
            <CountrySelect
              className={"form-control customInput customInputIcon"}
              getCountryData={getCountryData}
              name="country"
              multiple={true}
              onChange={(e) => setCountry(e.target.value)}
              value={country || []}
              placeholder={`Type country here`}
            />
          </div>

          <div className="selectButton">
            <button
              onClick={() => handleSubmit()}
              className="awe-btn awe-btn-13 custombutton"
              id="btn-search1"
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
        </form>
        <Link to={"/advance-search"} className="advancBtn">
          <i className="bi bi-funnel-fill"></i>Advanced Search
        </Link>
      </div>
    </div>
  );
};
export default SearchBar;
