import { ICheckinReponse } from '../../model/auto-attendant/ICheckinReponse';

export default function CheckinResume(props: ICheckinReponse) {
  return (
    <>
      <div className="flex min-h-[840px] flex-col bg-white">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />

          <div className="mt-2">
            <p>{props.customerName}</p>
          </div>
        </div>
      </div>
    </>
  );
};
