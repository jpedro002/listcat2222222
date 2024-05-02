import { useSelector, useDispatch } from "react-redux";

export const useExerciseData = () => {
  const exerciseData = useSelector((state) => state.exercise);
  const dispatch = useDispatch();

  return { exerciseData, dispatch };
};
