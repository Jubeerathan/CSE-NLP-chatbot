import {Outlet} from "react-router";

const useAuth = ()=>{
    const user = {loggedIn:false};
    return user && user.loggedIn;
}
const ProtectedRoutes =()=>{
    const isAuth = useAuth();
    return (
        isAuth? <Outlet/>:;
    )
}

export default ProtectedRoutes;