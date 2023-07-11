import { Route, Routes } from 'react-router-dom';


import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';




export const AppRouter = () => {
    return (
      <>
  
          <Routes>
              
              <Route path="login/*" element={
                  <PublicRoute>
                    {/* <LoginPage /> */}
                    <Routes>
                      <Route path="/*" element={<LoginPage />} />
                    </Routes>
                  </PublicRoute>
                }
              />
              
              
              <Route path="/*" element={
                <PrivateRoute>
                  <HeroesRoutes />
                </PrivateRoute>
              } />
  
              {/* <Route path="login" element={<LoginPage />} /> */}
              {/* <Route path="/*" element={ <HeroesRoutes />} /> */}
              
              
  
          </Routes>
      
      </>
    )
  }