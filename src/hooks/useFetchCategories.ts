import { useEffect, useState } from "react";
import axios from "axios";

const useFetchCategories = (url: string): [string[]] => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    axios.get(url).then((response) => setCategories(response.data));
  }, []);
  return [categories];
};
export default useFetchCategories;
