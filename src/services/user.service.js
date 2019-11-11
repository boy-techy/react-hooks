import { GET } from "./webApi";
import { userList } from "../constants/apiUrls";

const getUsersList = async () => {
    const res = await GET(userList);
    return res.data;
};

export {
    getUsersList
}
