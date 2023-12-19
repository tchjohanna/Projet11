import './user_module.scss'
import Account from '../../components/Account'
import { useNavigate } from 'react-router-dom'
import EditProfile from '../../components/EditProfile'
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchAccount, userSelector, clearState } from '../../features/UserSlices';


function User() {
    let token = localStorage.getItem("token")
    const navigate = useNavigate()
    if(token === null) {
        navigate("/signIn")
    }
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchAccount());
    }, [dispatch]);
    
    const { isError, account, isFetching } = useSelector(userSelector);
    
    useEffect(() => {
        return () => {
        dispatch(clearState());
        };
    }, [dispatch]);
    
    useEffect(() => {
        if (isError) {
        dispatch(clearState());
        }
    }, [isError, dispatch]);
    return (
        <main className="main bg-dark">
          <EditProfile token={token} />
          <h2 className="sr-only">Accounts</h2>
          {account?.map((accounts) => (
            <Account
              key={accounts.id}
              title={accounts.title}
              amount={accounts.amount}
              description={accounts.description}
            />
          ))}
        </main>
      );
      

} 
export default User