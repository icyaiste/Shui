import { createBrowserRouter } from "react-router-dom";
import Flow from '../pages/Homepage/Flow.tsx';
import WriteMsg from '../pages/Write/WriteMsg.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Flow/>
    },
    {
        path: "/write",
        element: <WriteMsg/>
    }
])

export default router;