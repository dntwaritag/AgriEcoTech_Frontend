import { createContext, useContext, useState, useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import axiosclient from '../axiosClient'

const stateContext = createContext({
  token: null,
  setToken: () => {},
  user: null,
  setUser: () => {},
});
export const ContextProvider = ({ children }) => {
  const [token, _setToken] = useState(localStorage.getItem("Token"));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [loading, setLoading] = useState(false);
  const [errors_login, setErrors_login] = useState();

  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("Token", token);
    } else {
      localStorage.removeItem("Token");
    }
  };

  const setUserState = (user) => {
    setUser(user);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  };

 
//  Get all employers
  // const { data: Employers } = useQuery({
  //   queryKey: 'Employers',
  //   queryFn: async () => {
  //      const res = await axiosclient.get('/employers');
      
  //     return res.data;
  //   },
  //   onSuccess: () => setLoading(true),
  // });
  // Signup mutation
  const SignupMutation = useMutation({
    mutationFn: async (data) => {
      const res = await axiosclient.post("/register", data);
      console.log('Signup response:', res.data);
      return res.data;
    },
    onError: (err) => {
      // alert(err);
      console.log(err)
    },
    onSuccess: (data) => {
      console.log('Signup success:', data);
      setUserState(data.user);
      setToken(data.token);
      setToken(data.token);
      if (data.user.is_admin === 1) {
        window.location.href = '/admin';
      }
      else {
        window.location.href = "/student"
      }
    },
  });

  // Login Mutation
  const LoginMutation = useMutation({
    mutationFn: async (data) => {
      const res = await axiosclient.post('/login', data);
      console.log('Login response:', res.data);
      return res.data;
    },
    onError: (err) => {
      const response = err.response;
      if (response && response.status === 422) {
        if (response.data.errors_login) {
          setErrors_login(response.data.errors_login);
          setLoading(true);
        } else {
          setErrors_login({
            email: [response.data.message],
          });
          setLoading(false);
        }
      }
    },
    onSuccess: (data) => {
      console.log('Login success:', data);
      setUserState(data.user);
      setToken(data.token);
      if (data.user.is_admin === 1) {
        window.location.href = '/admin';
      }
      else {
        window.location.href = "/student"
      }
      
    },
  });

  // useEffect(() => {
  //   console.log('Token:', token);
  //   console.log('User:', user);
  // }, [token, user]);

  return (
    <stateContext.Provider
      value={{
        token,
        setToken,
        user,
        setUser: setUserState,
        loading,
        setLoading,
        SignupMutation,
        LoginMutation,
        errors_login,
        
        //  Employers,
        
        setErrors_login
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const usestateContext = () => useContext(stateContext);
