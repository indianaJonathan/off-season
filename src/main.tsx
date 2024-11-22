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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page><App /></Page>,
  },
  {
    path: "/schedule",
    element: <Page><Schedule /></Page>,
  },
  {
    path: "/scoreboard",
    element: <Page><Scoreboard /></Page>,
  },
  {
    path: "/broadcast",
    element: <Page><Broadcast /></Page>,
  },
  {
    path: "/teams/:id",
    element: <Page><Team /></Page>,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
