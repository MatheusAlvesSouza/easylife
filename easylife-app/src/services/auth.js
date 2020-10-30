const TOKEN_KEY = "easylife-token";
const ACCOUNT_INFO = "easylife-account-info";

export const login = (token, accountInfo) => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(ACCOUNT_INFO, JSON.stringify(accountInfo));
};

export const logout = () => localStorage.removeItem(TOKEN_KEY);
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getTokenBearer = () => `bearer ${localStorage.getItem(TOKEN_KEY)}`;
export const getAccountInfo = () => JSON.parse(localStorage.getItem(ACCOUNT_INFO));