import { useEffect, useState } from "react";
import AxiosInstance from "../utils/instance/axiosinstance";

const useFetchCategories = (url: string): [string[]] => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    AxiosInstance.get(url).then((response) => setCategories(response.data));
  }, []);
  return [categories];
};
export default useFetchCategories;
