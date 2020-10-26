import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../containers/LoginPage";
import RegisterPage from "../containers/RegisterPage";
import ExperiencesList from "../containers/ExperiencesList";
import ExperienceDetail from "../containers/ExperienceDetail";
import EditExperience from "../containers/EditExperience";
import CreateExperience from "../containers/CreateExperience";
import UserPage from "../containers/UserPage";
import PrivateRoute from "../routes/PrivateRoutes";
import NavBar from "../containers/NavBar";
import Footer from "../components/Footer";
import NotFoundPage from "../components/NotFoundPage";

const PublicRoutes = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/" component={ExperiencesList} />
        <Route exact path="/exps/:id" component={ExperienceDetail} />
        <PrivateRoute exact path="/exp/edit/:id" component={EditExperience} />
        <PrivateRoute exact path="/exp/create" component={CreateExperience} />
        <PrivateRoute exact path="/me" component={UserPage} />{" "}
        {/* <Route exact path="/exp/edit/:id" component={EditExperience} />
        <Route exact path="/exp/create" component={CreateExperience} />
        <Route exact path="/me" component={UserPage} /> */}
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </>
  );
};

export default PublicRoutes;
