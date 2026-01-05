import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const mouseMove = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const mouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.parentElement?.tagName === 'A') {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseover', mouseOver);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('mouseover', mouseOver);
        };
    }, []);

    return (
        <>
            {/* Main Cursor containing the "blinking" star effect */}
            <motion.div
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '32px',
                    height: '32px',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'difference'
                }}
            >
                <motion.div
                    animate={{
                        scale: isHovering ? 1.5 : [1, 0.8, 1],
                        opacity: isHovering ? 0.8 : 1
                    }}
                    transition={{
                        scale: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
                    }}
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        border: '2px solid var(--primary-color)',
                        backgroundColor: isHovering ? 'var(--accent-color)' : 'transparent',
                    }}
                />
            </motion.div>

            {/* Trailing "Star" Dot */}
            <motion.div
                style={{
                    translateX: cursorX, // No spring for immediate follow with slight lag perception due to frame updates
                    translateY: cursorY,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    marginTop: '12px', // Center in the 32px box
                    marginLeft: '12px',
                    mixBlendMode: 'difference'
                }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
            />
        </>
    );
};

export default CustomCursor;
