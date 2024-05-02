
import { twMerge } from "tailwind-merge"
import { clsx } from "clsx"
import { APP_KEY } from "src/config"

const useUtil = () => {
  const getUser = () => {
    const user = JSON.parse(localStorage.getItem(APP_KEY));
    if (!user) return null;
    else return user;
  };


    const cn = (...inputs) => {
        return twMerge(clsx(inputs))
    }

    return {
        getUser,
        cn
    }
}

export default useUtil;
export { useUtil };
