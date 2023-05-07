import { ICheckinReponse } from '../../model/auto-attendant/ICheckinReponse';
import { Style } from '../../styles/auto-attendant/checkinResumeStyle';

interface Props {
  checkinResponse: ICheckinReponse,
  changeSetShowResume: Function
}

export default function CheckinResume(props: Props) {
  return (
    <>
      <div>
        <div className={Style.div_container}>
          <h1 className={Style.title}>Bem vindo(a),</h1>
          <p>
            <h2 className={Style.subTitle}>{props.checkinResponse.customerName}</h2>
          </p>
        </div>
        <div className={Style.div_card}>
          <dl className={Style.dl}>
            <div className={Style.dl_div}>
              <dt className={Style.dt}>Quarto</dt>
              <dd className={Style.dd}>{props.checkinResponse.roomNumber}</dd>
            </div>
            <div className={Style.dl_div}>
              <dt className={Style.dt}>Andar</dt>
              <dd className={Style.dd}>{props.checkinResponse.roomFloor}</dd>
            </div>
            <div className={Style.dl_div}>
              <dt className={Style.dt}>Café</dt>
              <dd className={Style.dd}>06:00 às 09:00</dd>
            </div>
            <div className={Style.dl_div}>
              <dt className={Style.dt}>Checkout</dt>
              <dd className={Style.dd}>Até as 12:00</dd>
            </div>
            <div className={Style.dl_div}>
              <dt className={Style.dt}>Wifi</dt>
              <dd className={Style.dd}>
                Não se preocupe que enviamos os dados da conexão no seu whats.
              </dd>
            </div>
            <button onClick={() => props.changeSetShowResume()} className={Style.btn}>
              Iniciar Checkin
            </button>
          </dl>
        </div>
      </div>
    </>
  );
};
