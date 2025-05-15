import axios from 'axios';

export const VerifyUser = async (name, password) => {
    const res = await axios.post("http://localhost:8081/verifyuser", { name, password })
    const data = res.data;

    if (data.success) {
        localStorage.setItem("name", data.user.name);
        localStorage.setItem("points", data.user.points);

        return true;
    }
    return false;
};