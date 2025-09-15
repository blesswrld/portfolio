"use client";

import { useRef } from "react";
import {
    Dialog,
    DialogPanel,
    Transition,
    TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { PrivacyPolicy } from "./PrivacyPolicy";

export const PrivacyModal = ({ isOpen, onClose }) => {
    const closeButtonRef = useRef(null);

    return (
        <Transition appear show={isOpen}>
            <Dialog
                as="div"
                className="relative z-50"
                onClose={onClose}
                initialFocus={closeButtonRef} // Указываем начальный фокус
            >
                <TransitionChild
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
                </TransitionChild>

                <div className="fixed inset-0 w-screen overflow-y-auto p-4 md:p-8">
                    <div className="flex min-h-full items-center justify-center">
                        <TransitionChild
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <DialogPanel className="relative w-full max-w-2xl rounded-xl bg-slate-900/80 border border-white/10 p-8 backdrop-blur-xl">
                                <button
                                    ref={closeButtonRef} // Привязываем ref к кнопке
                                    onClick={onClose}
                                    className="absolute top-4 right-4 z-10 p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10"
                                    aria-label="Закрыть"
                                >
                                    <XMarkIcon className="w-6 h-6" />
                                </button>

                                <div className="max-h-[80vh] overflow-y-auto pr-4">
                                    <PrivacyPolicy />
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};
