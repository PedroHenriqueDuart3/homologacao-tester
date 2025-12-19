import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import './AnimationComponents.css';

export const TypewriterText = ({
    text,
    delay = 0,
    speed = 50,
    className = '',
    onComplete
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            let currentIndex = 0;
            const interval = setInterval(() => {
                if (currentIndex < text.length) {
                    setDisplayedText(text.slice(0, currentIndex + 1));
                    currentIndex++;
                } else {
                    clearInterval(interval);
                    setIsComplete(true);
                    onComplete?.();
                }
            }, speed);

            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(timeout);
    }, [text, delay, speed, onComplete]);

    return (
        <span className={className}>
            {displayedText}
            {!isComplete && <span className="typewriter-cursor" />}
        </span>
    );
};

export const ScrollProgress = ({ className = '' }) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <motion.div
            className={`scroll-progress ${className}`}
            style={{ scaleX }}
        />
    );
};

export const ParallaxContainer = ({ children, speed = 0.5, className = '' }) => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 1000 * speed]);

    return (
        <motion.div style={{ y }} className={className}>
            {children}
        </motion.div>
    );
};

export const FadeInView = ({
    children,
    delay = 0,
    direction = 'up',
    className = '',
    once = true,
    intensity = 'dramatic'
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: '-15%' });

    const distance = intensity === 'dramatic' ? 100 : 40;
    const blur = intensity === 'dramatic' ? 10 : 0;

    const directions = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance },
        none: {},
    };

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                filter: `blur(${blur}px)`,
                ...directions[direction]
            }}
            animate={isInView ? {
                opacity: 1,
                x: 0,
                y: 0,
                filter: 'blur(0px)'
            } : {}}
            transition={{
                duration: 1,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const ScaleInView = ({ children, delay = 0, className = '', intensity = 'dramatic' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-15%' });

    const startScale = intensity === 'dramatic' ? 0.5 : 0.9;
    const blur = intensity === 'dramatic' ? 20 : 0;

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                scale: startScale,
                filter: `blur(${blur}px)`,
                rotateX: intensity === 'dramatic' ? 15 : 0
            }}
            animate={isInView ? {
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)',
                rotateX: 0
            } : {}}
            transition={{
                duration: 1.2,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className={className}
            style={{ perspective: 1000 }}
        >
            {children}
        </motion.div>
    );
};

export const DramaticReveal = ({ children, delay = 0, className = '' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-20%' });

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                y: 150,
                scale: 0.8,
                filter: 'blur(20px)'
            }}
            animate={isInView ? {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: 'blur(0px)'
            } : {}}
            transition={{
                duration: 1.4,
                delay,
                ease: [0.16, 1, 0.3, 1]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerContainer = ({ children, className = '', staggerDelay = 0.15 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-10%' });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({ children, className = '' }) => {
    return (
        <motion.div
            variants={{
                hidden: {
                    opacity: 0,
                    y: 80,
                    scale: 0.9,
                    filter: 'blur(10px)'
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: 'blur(0px)',
                    transition: {
                        duration: 0.8,
                        ease: [0.25, 0.46, 0.45, 0.94]
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const TextReveal = ({ text, className = '', delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-10%' });
    const words = text.split(' ');

    return (
        <motion.span ref={ref} className={className}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                    animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                    transition={{
                        duration: 0.6,
                        delay: delay + i * 0.08,
                        ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="inline-block mr-[0.25em]"
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
};