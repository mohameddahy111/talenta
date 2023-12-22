import axios from "axios";
import { useSnackbar } from "notistack";
import {createContext, useContext, useEffect, useState} from "react";

const DataStore = createContext();
export const DataStoreProvider = ({ children }) => {
  const {enqueueSnackbar}=useSnackbar()
  const [token, setToken] = useState(
    localStorage.token ? JSON.parse(localStorage.token) : null
  );
  const [adminIfo, setAdminIfo] = useState(
    localStorage.admin_info ? JSON.parse(localStorage.admin_info) : null
  );
  const axiosToken=token? { headers: { Authorization: `Bearer ${token}` } }:''

  const getAdminInfo = async () => {
    await axios
      .get(`/admins/admin_info`, axiosToken)
      
      .then((res) => {
        setAdminIfo(res.data);
        localStorage.setItem("admin_info", JSON.stringify(res.data));
      })
      .catch((err) => {
        enqueueSnackbar(`${err.response.data}`, {variant: "error"});
      });
  };
  useEffect(() => {
    if (token && !adminIfo) {
      getAdminInfo();
    }
  }, [token]);
  return (
    <DataStore.Provider
      value={{ token, setToken, adminIfo, setAdminIfo ,axiosToken }}
    >
      {children}
    </DataStore.Provider>
  );
};
export const Store = () => {
  return useContext(DataStore);
};
