import { AxiosInstance } from "axios";

function safeUseAuthStore(useAuthStoreFunc?: Function) {
  try {
    if (!useAuthStoreFunc) {
      // raise error
      throw new Error();
    }
    // Called after store is initialized
    const authStore = useAuthStoreFunc();
    // const { access_token, refresh_token, setTokens, clearTokens } = authStore;
    return authStore;
  } catch (e) {
    // Called before store is initialized
    useAuthStoreFunc && console.log(e);

    // { access_token, refresh_token, setTokens, clearTokens }
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");
    function setTokens(options: { accessToken?: string; refreshToken?: string; expiresAt?: string }) {
      options.accessToken && localStorage.setItem("access_token", options.accessToken);
      options.refreshToken && localStorage.setItem("refresh_token", options.refreshToken);
      options.expiresAt && localStorage.setItem("expires_at", options.expiresAt);
    }
    function clearTokens() {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("expires_at");
    }

    return {
      access_token,
      refresh_token,
      setTokens,
      clearTokens,
    };
  }
}

export function useZimaAuth(instance: AxiosInstance) {
  // Interception before request initiation
  instance.interceptors.request.use(
    (config) => {
      const { access_token } = safeUseAuthStore();
      // Do something before request is sent
      if (access_token) {
        config.headers.Authorization = access_token;
      }
      return config;
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  // Response interception

  let isRefreshing = false;
  let requests = [] as any;

  function logout() {
    const { clearTokens } = safeUseAuthStore();
    clearTokens();

    let url = new URL(window.location.href);
    url.pathname = "/";
    url.hash = "/login";
    window.location.href = url.href;
  }

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const { refresh_token, setTokens } = safeUseAuthStore();
      const originalConfig = error?.config;
      const refreshToken = refresh_token;
      if (originalConfig.url !== "/users/register" && error?.response?.status === 401) {
        // Access Token was expired
        if (!isRefreshing) {
          isRefreshing = true;

          instance
            .post("/v1/users/refresh", {
              refresh_token: refreshToken,
            })
            .then((tokenRes) => {
              if (tokenRes.data.success == 200) {
                setTokens({
                  accessToken: tokenRes.data.data.access_token,
                  refreshToken: tokenRes.data.data.refresh_token,
                  expiresAt: tokenRes.data.data.expires_at,
                });
                originalConfig.headers.Authorization = tokenRes.data.data.access_token;
                instance.defaults.headers.Authorization = tokenRes.data.data.access_token;
                isRefreshing = false;
                return tokenRes.data.data.access_token;
              } else {
                logout();
              }
            })
            .then((token) => {
              requests.forEach((cb: any) => cb(token));
              requests = [];
            })
            .catch((error) => {
              logout();
              console.log(error);
            });
        } else if (originalConfig.url === "/v1/users/refresh" && error?.response?.status === 401) {
          logout();
        }
        return new Promise((resolve) => {
          requests.push((token: any) => {
            originalConfig.headers = {};
            originalConfig.headers.Authorization = token;
            resolve(instance(originalConfig));
          });
        });
      }
      const rawError = error.response;
      return Promise.reject(rawError || error);
    },
  );
}
