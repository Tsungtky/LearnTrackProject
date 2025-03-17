import { createSlice } from "@reduxjs/toolkit";

const courseListStore = createSlice({
  name: 'courseListStore',
  initialState:{
    cookingCourseList:[]
  },
  reducers:{
    setCookingCourseList(state, action){
      state.cookingCourseList = action.payload
    }
  }
})

const { setCookingCourseList } = courseListStore.actions;


/*
get data
*/

const getCookingCourseList = () => {
  return async (dispatch) => {
    try {
      // 使用用戶輸入的 query
      const url = "http://localhost:5000/getCookingCourses"; // 傳遞 query 作為參數

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch courses");
      }

      const data = await response.json();
      console.log("Fetched courses:", data);

      dispatch(setCookingCourseList(data));
    } catch (error) {
      console.log("Error fetching course list", error.message);
    }
  };
};


/*
save data
BSC(2) 01:05:00
*/


const saveToDatabase = async (values) => {
  try {
    const response = await fetch("http://127.0.0.1:5000/saveCourse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error("Failed to save book");
    }

    const result = await response.json();
    console.log("Book saved:", result);
    alert("Book saved successfully!");
  } catch (error) {
    console.error("Error saving book:", error);
    alert("Error saving book. Please try again.");
  }
};

export {setCookingCourseList, getCookingCourseList, saveToDatabase}

const courseListStoreReducer = courseListStore.reducer;
export default courseListStoreReducer;
