import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AutoAttendIndex from "./pages/index"
import AutoAttendCheckin from "./pages/auto-attendant/checkin"

export function Router(props: any) {
    return (
        <Routes>
          <Route path="/" element={<AutoAttendIndex />} />
          <Route path="/auto-attendant/checkin" element={<AutoAttendCheckin />} />
        </Routes>
      );
}