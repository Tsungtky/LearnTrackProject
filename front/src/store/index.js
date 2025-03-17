import { configureStore } from "@reduxjs/toolkit";
import courseListStoreReducer from "./modules/CourseListStore"

const store = configureStore({
  reducer:{
    courseList:courseListStoreReducer
  }})

export default store;
