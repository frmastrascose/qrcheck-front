import { useState } from "react";
import QRCode from "react-qr-code";
import Logo from '../../component/logo';
import { Style } from "../../styles/customer/checkinQrCodeStyle";

export default function CheckinQrCode() {
    const [qrCodeValue, setQrCodeValue] = useState<string>('c9f9fa93-4beb-46ba-8291-df903541b505');

    const queryParameters = new URLSearchParams(window.location.search)
    const idCheckin = queryParameters.get("id")

    return (
        <>
            <div>
                <Logo />
                <h3 className={Style.title}>
                  Aproxime de um leitor ou apresente ao balconista
                </h3>
                <div className={Style.qrcode}>
                    <QRCode
                        size={512}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={qrCodeValue}
                        viewBox={`0 0 512 512`}
                    />
                </div>
            </div>
        </>
    );
}

