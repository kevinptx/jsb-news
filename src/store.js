import { configureStore } from "@reduxjs/toolkit";
import hackerNewsReducer from "./reducers/hackerNewsReducer";
import mediumReducer from "./reducers/mediumReducer";
import redditReducer from "./reducers/redditReducer";

export default configureStore({
  reducer: {
    hackerNews: hackerNewsReducer,
    medium: mediumReducer,
    reddit: redditReducer,
  },
});
