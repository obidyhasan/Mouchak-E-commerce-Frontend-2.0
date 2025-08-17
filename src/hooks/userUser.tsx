import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { setLoading } from "@/redux/features/loadingSlice";
import { useDispatch } from "react-redux";

const useUser = () => {
  const { data, isLoading } = useUserInfoQuery(undefined);
  const dispatch = useDispatch();
  if (isLoading) {
    dispatch(setLoading(true));
  } else {
    dispatch(setLoading(false));
  }

  return data?.data;
};

export default useUser;
