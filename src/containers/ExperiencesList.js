import React, { useEffect, useState } from "react";
import FilterBar from "./FilterBar";
import Experience from "../components/Experience";
import { experienceActions } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Pagination } from "antd";
import "antd/dist/antd.css";

const ExperiencesList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const expList = useSelector((state) => state.experience.experiences);

  let [activePage, setActivePage] = useState(1);

  const getExperiences = () => {
    dispatch(experienceActions.getExperiences(activePage));
  };

  const goToDetail = (index) => {
    history.push(`/exps/${index}`);
  };

  useEffect(() => {
    getExperiences();
  }, [activePage]);

  return (
    <>
      {console.log(expList.length)}
      <FilterBar />
      <div className="container horizontalJustify">
        {expList ? (
          expList.map((exp) => <Experience exp={exp} goToDetail={goToDetail} />)
        ) : (
          <></>
        )}
      </div>
      <div className="container horizontalCenter">
        <Pagination
          defaultCurrent={1}
          total={31}
          onChange={(page) => setActivePage(page)}
        />
      </div>
    </>
  );
};

export default ExperiencesList;
