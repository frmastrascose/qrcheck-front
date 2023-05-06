import { useEffect, useState } from "react";
import QrCodeReader, { QRCode } from 'react-qrcode-reader';
import { CheckinService } from '../../services/auto-attendant/checkinService'
import { ICheckinReponse } from '../../model/auto-attendant/ICheckinReponse';

export default function Checkin() {
  const [val, setVal] = useState<string>('');
  const [checkinReponse, setCheckinReponse] = useState<ICheckinReponse>();

  const handleRead = (code: QRCode) => {
    console.log('code data ', code.data);
    setVal(code.data);

    VerifyCheckin('c9f9fa93-4beb-46ba-8291-df903541b505');
  };

  const VerifyCheckin = (id: string) => {
    (async function () {
      var result = await CheckinService.Get(id);

      if (result?.data) {
        setCheckinReponse(result?.data);
      }
    })();
  }

  return (
    <>
      <div className="flex min-h-[840px] flex-col bg-white">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Aproxime o QrCode
          </h2>
          <div className="mt-2">
            <QrCodeReader delay={100} width={500} height={500} onRead={handleRead} />
          </div>

          <div className="mt-2">
            <p>{val}</p>
          </div>
        </div>
      </div>
    </>
  );
};
