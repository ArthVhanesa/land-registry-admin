import { lazy } from "react";

// project imports
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";
import Home from "../views/pages/LandingPage/LandingPage";
import NotVerified from "../views/pages/NotVerfiedPage/Verify";
import BuyLand from "../views/pages/BuyLand/BuyLand";
import Accordian from "../views/dashboard/Default/accordian";
import Register from "../views/pages/RegisterPage/Register";

// dashboard routing
const DashboardDefault = Loadable(
	lazy(() => import("views/dashboard/Default/index.js"))
);

// utilities routing
const UtilsTypography = Loadable(
	lazy(() => import("views/utilities/Typography"))
);
const UtilsColor = Loadable(lazy(() => import("views/utilities/Color")));
const UtilsShadow = Loadable(lazy(() => import("views/utilities/Shadow")));
const UtilsMaterialIcons = Loadable(
	lazy(() => import("views/utilities/MaterialIcons"))
);
const UtilsTablerIcons = Loadable(
	lazy(() => import("views/utilities/TablerIcons"))
);

// sample page routing
const SamplePage = Loadable(lazy(() => import("views/sample-page")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
	path: "/dashboard",
	element: <MainLayout />,
	children: [
		{
			path: "/dashboard",
			element: <DashboardDefault />,
		},
		{
			path: "notification",
		},
		// {
		//     path: 'home',
		//     element: <Home />
		// },
		// {
		//     path: 'dashboard',
		//     children: [
		//         {
		//             path: 'default',
		//             element: <DashboardDefault />
		//         }
		//     ]
		// },

		// {
		//     path: 'utils',
		//     children: [
		//         {
		//             path: 'util-typography',
		//             element: <UtilsTypography />
		//         }
		//     ]
		// },
		// {
		//     path: 'utils',
		//     children: [
		//         {
		//             path: 'util-color',
		//             element: <UtilsColor />
		//         }
		//     ]
		// },
		// {
		//     path: 'utils',
		//     children: [
		//         {
		//             path: 'util-shadow',
		//             element: <UtilsShadow />
		//         }
		//     ]
		// },

		{
			path: "buy-sell",
			children: [
				{
					path: "buy",
					element: <BuyLand />,
				},
			],
		},
		{
			path: "buy-sell",
			children: [
				{
					path: "sell",
					element: <Accordian />,
				},
			],
		},
		{
			path: "icons",
			children: [
				{
					path: "tabler-icons",
					element: <UtilsTablerIcons />,
				},
			],
		},
		{
			path: "icons",
			children: [
				{
					path: "material-icons",
					element: <UtilsMaterialIcons />,
				},
			],
		},
		{
			path: "sample-page",
			element: <SamplePage />,
		},
	],
};

export const LandingRoutes = {
	path: "/",
	element: <Home />,
};

export const Not_VerifiedRoutes = {
	path: "/not_verified",
	element: <NotVerified />,
};

export const RegisterRoute = {
	path: "/register",
	element: <Register />,
};

export default MainRoutes;
