import { useState, useEffect } from "react";
import Logo from '../../component/logo';
import { ICheckinRequest } from '../../model/auto-attendant/ICheckinRequest';
import { Link } from 'react-router-dom';
import { Style } from "../../styles/customer/confimationStyle";

export default function Confirmation() {
    const [showExperienceForm, setShowExperienceForm] = useState<boolean>(false);

    const [checkinRequest, setCheckinRequest] = useState<ICheckinRequest>({
        id: '',
        socialName: '',
        pronoum: '',
        observation: '',
    });

    const handleSetShowExperienceForm = () => {
        setShowExperienceForm(!showExperienceForm);
    };

    const handleSetCheckinRequest = () => {
        setCheckinRequest(checkinRequest);
    };

    const registerForm = async (e: any) => { 
        //TODO: fazer a implementação de salvar o formulário
    }

    return (
        <form>
            <Logo />
            <div className={Style.container}>
                <div className={Style.cardPrincipal}>
                    <h2 className={Style.title}>Confirmação de Checkin:</h2>
                    <div className={Style.div_1}>
                        <div className={Style.div_1}>
                            <fieldset>
                                <div className={Style.div_3}>
                                    <div className={Style.div_4}>
                                        <div className={Style.div_check}>
                                            <input
                                                id="confirmation"
                                                name="confirmation"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                onClick={() => handleSetShowExperienceForm()}
                                            />
                                        </div>
                                        <div className={Style.div_5}>
                                            <label htmlFor="confirmation" className="font-medium text-gray-900">
                                                Confirmação
                                            </label>
                                            <p className="text-gray-500">Confirmo que vou estar neste hotel em breve.</p>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>

                    {showExperienceForm ?
                        <>
                            <h2 className={Style.title_experience}>Personalize sua experiência:</h2>
                            <p className={Style.sub_title}>Nos ajude a tornar sua jornada mais incrível</p>

                            <form onSubmit={registerForm}>
                                <div className="col-span-full">
                                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                        Qual pronome deseja:
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="pronoun"
                                            name="pronoun"
                                            autoComplete="pronoun"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            onChange={(event) =>
                                                setCheckinRequest({ ...checkinRequest, pronoum: event.target.value })
                                            }
                                        >
                                            <option>Ele/Dele</option>
                                            <option>Ela/Dela</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                            Personalize seu nome Social:
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="social-name"
                                                id="social-name"
                                                autoComplete="social-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                onChange={(event) =>
                                                    setCheckinRequest({ ...checkinRequest, socialName: event.target.value })
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="observation" className="block text-sm font-medium leading-6 text-gray-900">
                                            Observações importantes:
                                        </label>
                                        <p className="mt-1 text-sm leading-6 text-gray-600">Informe preferências como restrições alimentares, alergias, hobs, ...</p>

                                        <div className="mt-2">
                                            <textarea
                                                rows={5}
                                                placeholder='Exemplo: Por favor, tenho intolerância a lactose, me ajude a ficar seguro'
                                                name="observation"
                                                id="observation"
                                                autoComplete="sobservation"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                onChange={(event) =>
                                                    setCheckinRequest({ ...checkinRequest, observation: event.target.value })
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 flex items-center justify-end gap-x-6">
                                    <div className="mt-2">
                                        <Link className={Style.btn_confirmation} to="/customer/checkinQrCode?id=c9f9fa93-4beb-46ba-8291-df903541b505customer/checkinQrCode?id=c9f9fa93-4beb-46ba-8291-df903541b505">Confirmar</Link>
                                    </div>
                                </div>
                            </form>
                        </> : null}
                </div>
            </div>
        </form>
    )
}
