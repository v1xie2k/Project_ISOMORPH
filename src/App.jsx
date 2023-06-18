import { login, register } from "./actions/auth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' >
      <Route element={<Root/>}>
        <Route index element={<Home/>} loader={loader}/>
      </Route>
      <Route element = {<BackendRoot/>}>
        <Route path='home' element ={<UserHome/>} loader={loader}/>
        <Route path='profile' element ={<Profile/>} />
        <Route path='history' element ={<History/>} />
        <Route path='cart' element ={<Cart/>} />
        <Route path='notification' element ={<Notification/>} />
      </Route>
      <Route element={<BackendRoot />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="admin">
          <Route
            path="anime"
            element={<Anime />}
            loader={AnimeLoader}
            action={AnimeFormAction}
          />
        </Route>
      </Route>
    </Route>
      
  )
)
				<Route path="login" element={<Login />} action={login} />
				<Route path="register" element={<Register />} action={register} />

function App() {
	return <RouterProvider router={router} />;
}

export default App;
