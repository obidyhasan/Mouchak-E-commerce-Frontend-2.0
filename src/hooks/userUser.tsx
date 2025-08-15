import LoadingLayout from "@/components/layouts/LoadingLayout";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";

const useUser = () => {
  const { data, isLoading } = useUserInfoQuery(undefined);

  if (isLoading) {
    return <LoadingLayout />;
  }

  return data?.data;
};

export default useUser;
