import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { RootState } from '../store/store';
import UnauthorizedContent from '../components/UnauthorizedContent';

const ProtectedRoute: React.FC = () => {
	const { token } = useSelector((state: RootState) => state.auth);

	if (!token) {
		return <UnauthorizedContent />;
	}

	return <Outlet />;
};

export default ProtectedRoute;
