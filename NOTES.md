# NOTES

## Table of Contents

- Installation
- [Configuration routes ](https://reactrouter.com/en/main/start/overview#client-side-routing) <br/>
  a. install package `react-router-dom` <br/>
  b. buat folder router/index.js berisi object yang mendefinisikan router kita. (jangan lupa di export) <br/>
  c. pasang `RouterProvider` di app.js / index.js, berikan props router yang berisi router yang ada di point b. <br/>
  d. pasang komponen yang sesuai dengan path nya <br/>
- Navigation <br/>
  a. user click

  1. [Link](https://reactrouter.com/en/main/components/link)
  2. [NavLink](https://reactrouter.com/en/main/components/nav-link) <br/>

  b. programmatic navigation

  1.  [useNavigate()](https://reactrouter.com/en/main/hooks/use-navigate) <br/>
      <br/>

- Reading URL Params <br/>
  a. [useParams()](https://reactrouter.com/en/main/hooks/use-params)

- [Nested routes](https://reactrouter.com/en/main/start/tutorial#nested-routes) <br/>
  a. children di configuration routesnya <br/>
  b. Outlet di element parentnya

- [Protected routes](https://reactrouter.com/en/main/start/overview#redirects) <br/>
  a. loader <br/>
  b. redirect

## References

- [React-router](https://reactrouter.com/en/main)
- [Challenge](https://docs.google.com/document/d/19SnCKf_IcE_QaXiJUk73U4ygagWfwckN/edit?usp=share_link&ouid=102406369761491173976&rtpof=true&sd=true)
