import { configureStore } from '@reduxjs/toolkit';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Login from './pages/Login';
import { clearToken, setToken } from './store/auth/authSlice';
import App from './App';
import authReducer from '../src/store/auth/authSlice';

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

jest.mock('./services/api', () => ({
  signIn: jest.fn(),
}));

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

describe('Authentication Tests', () => {
  const { getByText, findByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  test('User can sign in successfully', async () => {
    const email = 'test@example.com';
    const password = 'password123';

    const mockFn = jest.fn();
    const { getByLabelText } = render(<Login handleSubmit={mockFn} />);
    const emailInputNode = getByLabelText("Email");
    const passwordInputNode = getByLabelText("Password");

    expect(emailInputNode.value).toMatch("eve.holt@reqres.in");
    expect(passwordInputNode.value).toMatch("pistol");

    const buttonNode = getByLabelText("Sign in");
    fireEvent.submit(buttonNode);
    expect(mockFn).toHaveBeenCalledTimes(1);

    expect(store.getState().auth.token).toBe('tesstToken');
  });

  test('User can sign out successfully', async () => {
    store.dispatch(clearToken());

    expect(store.getState().auth.token).toBeDefined();
  });

  test('User can access Dashboard after signing in', async () => {
    store.dispatch(setToken('testToken'));

    const { getByText, findByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await findByText('Dashboard');

    expect(getByText('Dashboard')).toBeInTheDocument();
  });

  test('User is redirected to Login page when trying to access Dashboard without signing in', async () => {
    // Clear token in Redux store to simulate logged-out user
    store.dispatch(clearToken());

    const { getByText, findByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Wait for Login page to load
    await findByText('Sign in to your account');

    // Check if redirected to Login page
    expect(getByText('Sign in to your account')).toBeInTheDocument();
  });
});
