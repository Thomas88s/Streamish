import React from "react";
import { Switch, Route } from "react-router-dom";
import VideoList from "./VideoList";
import VideoForm from "./VideoForm";
import VideoDetails from "./VideoDetails";
import UserVideos from "./UserVideos";

const ApplicationViews = () => {
  return (
    
    <Switch>
      <Route path="/" exact>
        <VideoList />
      </Route>

      <Route path="/videos/add">
        <VideoForm />
      </Route>

      {/* Route below is an example of a path with a route param: /videos/:id. Using the colon, we can tell the react router that this will be some id parameter. */}
      <Route path="/videos/:id">
        <VideoDetails />
      </Route>

      <Route path="/users/:id">
        <UserVideos />
      </Route>
    </Switch>
  );
};

export default ApplicationViews;