import { createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";

const initialState = {
  data: {},
};

export const exerciseSlice = createSlice({
  name: "exercises",
  initialState,
  reducers: {
    setCurrentExercise: (state, action) => {
      state.data = action.payload;
    },
    toggleSelectItem: (state, action) => {
      const { questionId, answerId } = action.payload;

      const question = state.data.questions.find(
        (question) => question.id === questionId
      );

      if (question.selectedAnswer === answerId) {
        question.selectedAnswer = null;
      } else {
        question.selectedAnswer = answerId;
      }
    },
    toggleQuestionForReview: (state, action) => {
      const { questionId } = action.payload;

      const question = state.data.questions.find(
        (question) => question.id === questionId
      );

      question.isMarkedForReview = !question.isMarkedForReview;
    },
  },
});

export const { toggleSelectItem, setCurrentExercise, toggleQuestionForReview } =
  exerciseSlice.actions;

export default exerciseSlice.reducer;
