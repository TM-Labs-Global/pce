'use client';

import { useState, useEffect, useCallback } from 'react';

export const useCapabilityDrawer = () => {
    const [activeId, setActiveId] = useState<string | null>(null);
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);

    const openCapability = useCallback((id: string) => {
        setActiveId(id);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setIsDrawerVisible(true);
            });
        });
    }, []);

    const closeCapability = useCallback(() => {
        setIsDrawerVisible(false);
        setTimeout(() => {
            setActiveId(null);
        }, 400);
    }, []);

    // Handle ESC key & scroll locking
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeCapability();
            }
        };

        if (activeId) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [activeId, closeCapability]);

    return {
        activeId,
        isDrawerVisible,
        openCapability,
        closeCapability
    };
};
