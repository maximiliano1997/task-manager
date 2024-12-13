import { Routes as AllMyRoutes, Route } from 'react-router-dom'
// import { useState } from 'react'

// my context wrappers
import { AdminContextWrapper } from './contexts/adminContext.jsx'
import { UserContextWrapper } from './contexts/userContext.jsx'
import { ReponseContextWrapper } from './contexts/reponseStateContext.jsx'
import { TaskContextWrapper } from './contexts/taskContext.jsx'

//Layout General
import { Layout } from './components/Layout/index'
// Pages
import { Home } from './pages/home.jsx'
import { Register } from './pages/auth/Register'
import { Login } from './pages/auth/Login'
import { Tasks } from './pages/tasks/tasks'
import { CreateTask } from './pages/tasks/createTask.jsx'
import { UpdateTask } from './pages/tasks/UpdateTask.jsx'
import { About } from './pages/about'
import { Contact } from './pages/contact'
import { Privacy } from './pages/privacy.jsx'
import { Terms } from './pages/terms.jsx'
import { Profile } from './pages/user/profile'
import { ProfileUpdate } from './pages/user/profileUpdate.jsx'
import { Admin } from './pages/admin/Admin.jsx'
import { Success } from './pages/success.jsx'
import { Error } from './pages/error.jsx'


import { ProtectedRoute } from './utils/protectedRoute.jsx'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <AdminContextWrapper>

        <ReponseContextWrapper>
          <UserContextWrapper>
            <TaskContextWrapper>

              <AllMyRoutes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />


                  <Route path="/tasks" element={<ProtectedRoute> <Tasks /> </ProtectedRoute>} />
                  <Route path="/tasks/create" element={<CreateTask />} />
                  <Route path="/tasks/update/:id" element={<UpdateTask />} />

                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />

                  {/* // Footer routes */}
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />

                  {/* Auth Pages */}
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />


                  <Route path="/profile" element={<ProtectedRoute> <Profile /> </ProtectedRoute>} />
                  <Route path="/profile/edit/:id" element={<ProtectedRoute> <ProfileUpdate /> </ProtectedRoute>} />

                  <Route path="/admin" element={<ProtectedRoute> <Admin /> </ProtectedRoute>} />



                  <Route path="/success" element={<Success />} />
                  <Route path="/error" element={<Error />} />


                </Route>
              </AllMyRoutes>
            </TaskContextWrapper>
          </UserContextWrapper>
        </ReponseContextWrapper>
      </AdminContextWrapper>
    </>
  )
}

export default App
