import React, { FunctionComponent } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import Login from "./components/pages/loginPage/loginPage";
import Register from "./components/pages/registerPage/registerPage";
import Main from "./components/pages/mainPage/mainPage";
import NotFoundPage from "./components/pages/notfoundPage/notfoundPage";
import MyCoursesPage from "./components/pages/myCoursesPage/myCoursesPage";
import UnauthorizedPage from "./components/pages/unauthorizedPage/unauthorizedPage";
import TeachPage from "./components/pages/teachPage/teachPage";
import ForgotPasswordPage from "./components/pages/forgotPasswordPage/forgotPasswordPage";

const Router: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/forgotpassword" component={ForgotPasswordPage} />
        <Route exact path="/mycourses" component={MyCoursesPage} />
        <Route exact path="/teach" component={TeachPage} />
        <Route exact path="/unauthorized" component={UnauthorizedPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
