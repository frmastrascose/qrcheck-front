import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// import Login from "./pages/login"
// import NewRegister from "./pages/login/new-register"
// import Customer from "./pages/customer"
// import Dashboard from "./pages/dashboard"
import AutoAttendIndex from "./pages/auto-attendant/index"
import AutoAttendCheckin from "./pages/auto-attendant/checkin"

export function Router(props: any) {
    return (
        <Routes>
          <Route path="/" element={<AutoAttendIndex />} />
          <Route path="/auto-attendant/checkin" element={<AutoAttendCheckin />} />

          {/* <Route path="/" element={<Login />} />
          <Route path="/login/new-register" element={<NewRegister />} />
          <Route path="/customer/index" element={<Customer />} />
          <Route path="/dashboard/index" element={<Dashboard />} />
          <Route path="/auto-attendant/index" element={<AutoAttend />} /> */}
        </Routes>
      );
}