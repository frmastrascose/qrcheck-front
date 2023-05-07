import { useState, useEffect } from "react";
import QrCodeReader, { QRCode } from 'react-qrcode-reader';
import { CheckinService } from '../../services/auto-attendant/checkinService';
import { ICheckinReponse } from '../../model/auto-attendant/ICheckinReponse';
import { Style } from '../../styles/auto-attendant/checkinStyle';
import CheckinResume from './checkinResume';
import Logo from '../../component/logo';
import AlertMessage from "../../component/alertMessage";
import { IAlertMessage } from "../../model/component/IAlertMessage";

export default function Checkin() {
  const [alertMessage, setAlertMessage] = useState<IAlertMessage>({
    alertMessage: 'Ocorreu um erro',
    show: false
  });

  const [showResume, setShowCheckinResume] = useState<boolean>(false);
  // const [checkinReponse, setCheckinReponse] = useState<ICheckinReponse>({
  //   id: '',
  //   companyId: '',
  //   equipamentId: '',
  //   customerName: '',
  //   customerDocument: '',
  //   roomFloor: '',
  //   roomNumber: '',
  //   wifiName: '',
  //   wifiLogin: '',
  //   wifiPassword: '',
  //   status: ''
  // });

  const [checkinReponse, setCheckinReponse] = useState<ICheckinReponse>({
    id: "c9f9fa93-4beb-46ba-8291-df903541b505",
    companyId: "9868fa3f-0f2e-403b-8539-00dbdb6b026a",
    equipamentId: "2772016b-5d4c-422e-8466-5c9b8e8ff353",
    customerName: "João da Silva",
    customerDocument: "654.313.325-20",
    roomNumber: "623",
    roomFloor: "6",
    wifiName: "Experience_Hotel",
    wifiLogin: "JoaoSilva",
    wifiPassword: "65431332520",
    status: "actived"
  });

  const handleRead = (code: QRCode) => {
    if (code?.data) {
      //VerifyCheckin(code.data);
      handleSetShowCheckinResume(true);
    }
  };

  const VerifyCheckin = (id: string) => {
    (async function () {
      var result = await CheckinService.Get(id);
      if (result?.data) {

        setCheckinReponse(result?.data);
        handleSetShowCheckinResume(true);

      } else {
        setAlertMessage({
          alertMessage: 'Ocorreu um erro, tente novamente!',
          show: true
        });
      }
    })();
  }

  const handleSetShowCheckinResume = (isShow: boolean) => {
    setShowCheckinResume(isShow);
  };

  const handleSetShowAlert = (isShow: boolean) => {
    setShowCheckinResume(isShow);
  };

  return (
    <>
      <div className={Style.div_container}>
        <div className={Style.div_card}>
          <Logo />

          {alertMessage.show ?
            <AlertMessage message={alertMessage} changeSetShowMessage={() => setAlertMessage({ alertMessage: '', show: false })} /> : null}

          <div className="mt-2">
            {!showResume ?
              <>
                <h2 className={Style.title}>
                  Aproxime o QrCode
                </h2>
                <div className={Style.div_qrcode}>
                  <QrCodeReader delay={100} width={500} height={500} onRead={handleRead} />
                </div>
              </>
              :
              <CheckinResume checkinResponse={checkinReponse} changeSetShowResume={() => handleSetShowCheckinResume(false)} />}
          </div>
        </div>
      </div>
    </>
  );
};
