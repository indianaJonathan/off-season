import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './app'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  Schedule,
  Scoreboard,
  Broadcast,
  Team
} from './routes';
import { Page } from './components/common/page';
import { NotFound } from './not-found';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page><App /></Page>,
    errorElement: <NotFound />,
  },
  {
    path: "/schedule",
    element: <Page><Schedule /></Page>,
    errorElement: <NotFound />,
  },
  {
    path: "/scoreboard",
    element: <Page><Scoreboard /></Page>,
    errorElement: <NotFound />,
  },
  {
    path: "/broadcast",
    element: <Page><Broadcast /></Page>,
    errorElement: <NotFound />,
  },
  {
    path: "/teams/:id",
    element: <Page><Team /></Page>,
    errorElement: <NotFound />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
