
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const PrivateRouter = () => {
  const user =false
  return (
    user ? <Outlet />:<Navigate to="/login"/>
  )
}

export default PrivateRouter;