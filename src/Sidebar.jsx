import React, { useState, useEffect } from 'react';
import Portal from '../Portal';
import './Sidebar.scss';

export const SIDEBAR_STATES = {
    'OPENING': 'OPENING',
    'CLOSING': 'CLOSING',
    'OPENED': 'OPENED',
    'CLOSED': 'CLOSED',
}

const SidebarPortal = ({
    position,
    onOpen,
    onClose,
    rootId,
    isOpen,
    children
}) => {
    const [status, setStatus] = useState(SIDEBAR_STATES.CLOSED);

    const handleOpen = () => {
        if (status !== SIDEBAR_STATES.OPENED) {
            onOpen();
            setStatus(SIDEBAR_STATES.OPENING);
            setTimeout(() => setStatus(SIDEBAR_STATES.OPENED), 100)
        }
    }

    const handleClose = () => {
        if (status !== SIDEBAR_STATES.CLOSED) {
            onClose();
            setStatus(SIDEBAR_STATES.CLOSING);
            setTimeout(() => setStatus(SIDEBAR_STATES.CLOSED), 300)
        }
    }

    useEffect(() => { isOpen ? handleOpen() : handleClose(); }, [isOpen]);
    useEffect(() => {
        const BodyEl = document.querySelector('body');
        console.log(status, 'status !== SIDEBAR_STATES.CLOSED', status !== SIDEBAR_STATES.CLOSED ? 'hidden' : undefined)
        if (BodyEl) {
            BodyEl.style.overflow = status !== SIDEBAR_STATES.CLOSED ? 'hidden' : '';
            return () => BodyEl.style.overflow = ''
        }
    }, [status]);

    return status !== SIDEBAR_STATES.CLOSED && (
        <Portal id={rootId}>
            <div className={'Sidebar-Blanket'} onClickCapture={onClose} />
            <div className={`Sidebar-Wrapper ${status} ${position}`}>
                {/* <CloseButton onClick={onClose} /> */}
                <div className={`Sidebar-Content`}>
                    {children}
                </div>
            </div>
        </Portal>
    )
}

SidebarPortal.defaultProps = {
    position: 'right',
    isOpen: false,
    onOpen: () => { },
    onClose: () => { },
    rootId: 'root'
}

export default SidebarPortal;