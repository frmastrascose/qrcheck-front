import { Route, Routes } from "react-router-dom";
import AutoAttendIndex from "./pages/index"
import AutoAttendCheckin from "./pages/auto-attendant/checkin"
import CheckinQrCode from "./pages/customer/checkinQrCode"
import Confirmation from "./pages/customer/confirmation"

export function Router(props: any) {
    return (
        <Routes>
          <Route path="/" element={<AutoAttendIndex />} />
          <Route path="/auto-attendant/checkin" element={<AutoAttendCheckin />} />
          <Route path="/customer/checkinQrCode" element={<CheckinQrCode />} />
          <Route path="/customer/confirmation" element={<Confirmation />} />
        </Routes>
      );
}