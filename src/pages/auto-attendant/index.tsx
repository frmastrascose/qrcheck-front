import { Link } from 'react-router-dom';

export default function Index() {
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
            Auto Atendimento
          </h2>
          <div className="mt-2">
            <Link className="btn-auto flex h-full w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" to="/auto-attendant/checkin">Iniciar Checkin</Link>
          </div>
        </div>
      </div>
    </>
  );
};
