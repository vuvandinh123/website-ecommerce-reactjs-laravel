import { useState, useEffect } from 'react';

export function useOffcanvas(is, activeRef, iconRef) {
    const [isOpen, setIsOpen] = useState(is);

    useEffect(() => {
        const body = document.body;
        isOpen ? body.classList.add('overflow-hidden') : body.classList.remove('overflow-hidden');
        const handleClickOutside = (e) => {
            if (activeRef.current && !activeRef.current.contains(e.target) && !iconRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen, activeRef, iconRef]);

    return {
        isOpen,
        setIsOpen,
    };
}
