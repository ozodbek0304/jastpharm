import { useEffect, useState, useRef } from 'react';

const useIntersectionObserver = (setActiveId: any) => {
    const observer: any = useRef(null);

    useEffect(() => {
        const handleObserver = (entries: any) => {
            entries.forEach((entry: any) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        };

        observer.current = new IntersectionObserver(handleObserver, {
            root: null, // viewport
            rootMargin: '0px',
            threshold: 0.5, // 50% ko'rinishda bo'lishi kerak
        });

        const { current: currentObserver } = observer;

        const targets = document.querySelectorAll('.scroll-target');
        targets.forEach(target => currentObserver.observe(target));

        return () => {
            targets.forEach(target => currentObserver.unobserve(target));
        };
    }, [setActiveId]);

    return observer.current;
};

export default useIntersectionObserver