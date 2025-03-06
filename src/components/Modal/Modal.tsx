"use client";
import React, { useCallback, useEffect } from "react";

import { Portal } from "../Portal";
import { Button } from "../Button";
import { Close } from "../Icons";

import "./Modal.scss";

type ModalProps = {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  hasCloseButton?: boolean;
  actions?: { title: string; onClick: () => void }[];
};

const ModalDialog: React.FC<ModalProps> = ({
  title,
  onClose,
  children,
  actions,
  hasCloseButton = true,
}) => {
  const listener = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.body.addEventListener("keyup", listener);

    return () => {
      document.body.removeEventListener("keyup", listener);
    };
  }, [listener]);

  return (
    <Portal>
      <div className="overlay" onClick={onClose} />
      <div className="modal__wrapper">
        <div className={"modal__container"}>
          <div className="">
            <div className="modal__header">
              <h3 className="modal__title">{title}</h3>
              {hasCloseButton && (
                <Button
                  isFlat
                  onClick={onClose}
                  className="modal__close"
                  data-modal-hide="default-modal"
                >
                  <Close size={20} />
                </Button>
              )}
            </div>
            <div className="modal__content">{children}</div>
            {actions && (
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                {actions.map(({ title, ...rest }) => (
                  <Button key={title} {...rest}>
                    {title}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default ModalDialog;
