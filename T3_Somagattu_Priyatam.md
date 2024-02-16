# Assignment 1

- _Date Created_: 15 FEB 2024
- _Last Modification Date_: 15 FEB 2024
- _Deployed URL_: https://app.netlify.com/sites/priyatam-b00972715-tutorial3/overview
- _Git URL_: https://git.cs.dal.ca/somagattu/csci-5709-tutorials

## Authors

- [Priyatam Reddy Somagattu](pr889078@dal.ca)

## Deployment

I imported an existing front-end project from GitHub to Netlify, where I had a repository prepared. Then, I configured the build settings to deploy the application. Eventually, the app was successfully deployed and is now live at the provided link.

## Built With

- [React](https://legacy.reactjs.org/docs/getting-started.html/) - The web framework used
- [Bootstrap](https://getbootstrap.com/) - CSS Library
- [npm](https://docs.npmjs.com//) - Dependency Management

## Sources Used

### signup.jsx

_Line 41-43_

```
    const currValidFn = /^[A-Za-z]+$/.test(fn);
    const currValidLn = /^[A-Za-z]+$/.test(ln);
    const currValidEmail = /^[A-Za-z0-9-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/.test(e);
```

The code was created by adapting regular expression test on a string [JS check for letters and numbers in string](https://plainenglish.io/blog/javascript-check-if-string-contains-only-letters-and-numbers-5dce23ddfecf)

```
function onlyLettersAndNumbers(str) {
	return /^[A-Za-z0-9]*$/.test(str);
}
```

- After understanding how regex.test() works I applied it for form validation of different fields.
- I applied different standard regular expressions for names and email to check input strings.
- This is important to validate the input fields and only allow correct values.

## App.js

_Line 16-39_

```
    const router = createBrowserRouter([
    {
      path:"/",
      element: <Navigate to="/signup" />,
      errorElement: <NotFound />
    },
    {
      path:"/signup",
      element:<Signup firstName={firstName}
                setFirstName={setFirstName}

                lastName={lastName}
                setLastName={setLastName}

                email={email}
                setEmail={setEmail}
                
                setSignedUp={setSignedUp} />
    },
    {
      path:"/profile",
      element: signedUp? <Profile firstName={firstName} lastName={lastName} email={email}/>: <Navigate to="/signup" />
    }
  ]);
```

I created the above code by adapting react router from [Official React Router Documentation](https://reactrouter.com/en/main/start/tutorial#jsx-routes).

```
    const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
    ]);

    ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
    );
```

- I updated the above code to redirect pages to only signup and profile pages.
- Based on the url path, the above router code shows the respective page i.e. "/signup" to signup page and "/profile" to profile page.
- It is important to be able to navigate between different pages without reloading pages as we use react router.

## Images used

- [Signup_background_image] (https://unsplash.com/photos/brown-wooden-dining-table-near-white-and-brown-mini-bar-jUOaONoXJQk)
- [profile_picture] (https://www.freepik.com/free-vector/hand-drawn-side-profile-cartoon-illustration_45185264.htm#query=cartoon%20profile&position=0&from_view=keyword&track=ais&uuid=0a406836-c3b6-46e4-9f0f-ea672eb6d6e4)

## Acknowledgments

- I acknowledge the images used for this assignment where the signup background image was used from unsplash and profile picture from freepik.
- The code provided valuable insights and served as a foundation for understanding and learning it's functionality and logic. I am grateful for their work and dedication.
- It provided valuable insights and influenced my approach in understanding and learning the approaches and specific techniques. Their contribution is highly appreciated.