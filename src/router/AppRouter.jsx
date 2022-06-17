import { Routes, Route } from "react-router-dom";
import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRouter";



export const AppRouter = () => {
    return (
        <>
            <Routes>

                <Route path="login/*" element={<PublicRoute >
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

                }
                />

                {/* <Route path="/*" element={<HeroesRoutes />} /> */}
                {/* <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} /> */}
                {/* <Route path="/" element={<Navigate to="/marvel" />} /> */}
            </Routes>

        </>
    )
}
