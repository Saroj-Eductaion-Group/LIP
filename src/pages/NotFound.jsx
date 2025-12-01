import React, { useState, useEffect, useCallback } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';


function App() {
    // State to store mouse coordinates
    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);

    // useCallback for memoized event handler to prevent unnecessary re-renders
    const handleMouseMove = useCallback((event) => {
        setCursorX(event.clientX);
        setCursorY(event.clientY);
    }, []);

    // useEffect hook to add and remove mouse event listener
    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [handleMouseMove]); // Dependency array ensures effect runs only if handleMouseMove changes

    return (
        <Layout >
        <div className="relative min-h-screen flex flex-col justify-center items-center text-center p-6 bg-[#0d0d1a] text-blue-100 overflow-hidden">
            {/* Pure CSS animated background */}
            <div className="background-animation fixed top-0 left-0 w-full h-full z-0"></div>

            {/* Interactive element: a glowing orb that follows the cursor */}
            <div
                className="cursor-orb fixed z-20 pointer-events-none"
                style={{ left: cursorX, top: cursorY }}
            ></div>

            {/* Main content container */}
            <div className="relative z-10 flex flex-col justify-center items-center text-center p-6 text-white">
                <h1 className="text-8xl font-bold leading-none text-purple-400 text-shadow-neon animate-flicker">404</h1>
                <p className="text-2xl mt-4 text-purple-300 animate-fade-in-delay-05">Page Not Found</p>
                <p className="text-lg mt-2 max-w-xl text-purple-200 animate-fade-in-delay-1">
                    It seems this page has evaporated from our digital archives, or perhaps it's a formula still in development!
                    Don't worry, our research continues.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-10 animate-slide-up-delay-15">
                    <Link to="/" className="action-button">Return to Home Page</Link> 
                    <Link to="/contact" className="action-button">Contact Us</Link>
                    <Link to="/about" className="action-button">About Us</Link>
                    <Link to="https://siu.in8.nopaperforms.com/" className="action-button">Admission</Link>
                </div>
            </div>

            {/* Branding element at the bottom */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-purple-300 text-sm opacity-70 animate-fade-in-delay-2">
                Saroj College of Pharmacy
            </div>

            {/* Custom CSS for animations and button styles */}
            <style>{`
                /* Background animation */
                .background-animation {
                    background: radial-gradient(circle at center, rgba(139, 92, 246, 0.2) 0%, rgba(13, 13, 26, 0.8) 70%);
                    animation: backgroundPulse 10s infinite alternate;
                }

                .background-animation::before,
                .background-animation::after {
                    content: '';
                    position: absolute;
                    background-color: rgba(0, 255, 255, 0.1); /* Cyan glow */
                    border-radius: 50%;
                    filter: blur(50px);
                    animation: floatShapes 15s infinite ease-in-out alternate;
                }

                .background-animation::before {
                    width: 300px;
                    height: 300px;
                    top: 10%;
                    left: 15%;
                    animation-delay: 0s;
                }

                .background-animation::after {
                    width: 200px;
                    height: 200px;
                    bottom: 20%;
                    right: 10%;
                    animation-delay: 7s;
                }

                @keyframes backgroundPulse {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    50% {
                        transform: scale(1.05);
                        opacity: 0.9;
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }

                @keyframes floatShapes {
                    0% {
                        transform: translate(0, 0) scale(1);
                    }
                    25% {
                        transform: translate(20px, -30px) scale(1.05);
                    }
                    50% {
                        transform: translate(-20px, 40px) scale(0.95);
                    }
                    75% {
                        transform: translate(30px, -10px) scale(1.1);
                    }
                    100% {
                        transform: translate(0, 0) scale(1);
                    }
                }

                /* Cursor Orb styles and animation */
                .cursor-orb {
                    width: 20px;
                    height: 20px;
                    background-color: rgba(139, 92, 246, 0.7); /* Purple glow */
                    border-radius: 50%;
                    transform: translate(-50%, -50%); /* Center the orb on the cursor */
                    filter: blur(8px); /* Soft glow effect */
                    transition: transform 0.1s ease-out; /* Smooth follow effect */
                    animation: orbPulse 2s infinite ease-in-out alternate;
                }

                @keyframes orbPulse {
                    0% {
                        transform: translate(-50%, -50%) scale(1);
                        opacity: 0.7;
                    }
                    50% {
                        transform: translate(-50%, -50%) scale(1.2);
                        opacity: 0.9;
                    }
                    100% {
                        transform: translate(-50%, -50%) scale(1);
                        opacity: 0.7;
                    }
                }


                /* Existing animations and styles */
                @keyframes flicker {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }

                @keyframes fadeIn {
                    to { opacity: 1; }
                }

                @keyframes slideUp {
                    to { opacity: 1; transform: translateY(0); }
                }

                .animate-flicker {
                    animation: flicker 1.5s infinite alternate;
                }
                .animate-fade-in-delay-05 {
                    animation: fadeIn 2s ease-out forwards;
                    opacity: 0;
                    animation-delay: 0.5s;
                }
                .animate-fade-in-delay-1 {
                    animation: fadeIn 2s ease-out forwards;
                    opacity: 0;
                    animation-delay: 1s;
                }
                .animate-slide-up-delay-15 {
                    animation: slideUp 1.5s ease-out forwards;
                    opacity: 0;
                    transform: translateY(20px);
                    animation-delay: 1.5s;
                }
                .animate-fade-in-delay-2 {
                    animation: fadeIn 2s ease-out forwards;
                    opacity: 0;
                    animation-delay: 2s;
                }

                .text-shadow-neon {
                    text-shadow: 0 0 10px #a78bfa, 0 0 20px #a78bfa, 0 0 30px #a78bfa;
                }

                .action-button {
                    background-color: #8b5cf6; /* Tailwind bg-purple-600 */
                    color: white;
                    padding: 0.75rem 1.5rem; /* Tailwind py-3 px-6 */
                    border-radius: 9999px; /* Tailwind rounded-full */
                    font-weight: 600; /* Tailwind font-semibold */
                    transition: all 0.3s ease; /* Tailwind transition-all duration-300 ease-in-out */
                    box-shadow: 0 0 15px rgba(139, 92, 246, 0.5); /* Custom shadow */
                }

                .action-button:hover {
                    background-color: #7c3aed; /* Tailwind bg-purple-700 */
                    transform: translateY(-3px) scale(1.02); /* Tailwind -translate-y-1 scale-105 */
                    box-shadow: 0 0 25px rgba(139, 92, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.4); /* Enhanced shadow */
                }

                /* Responsive adjustments */
                @media (max-width: 768px) {
                    .text-8xl {
                        font-size: 6rem;
                    }
                    .text-2xl {
                        font-size: 1.5rem;
                    }
                    .text-lg {
                        font-size: 1rem;
                    }
                }

                @media (max-width: 480px) {
                    .text-8xl {
                        font-size: 4rem;
                    }
                    .text-2xl {
                        font-size: 1.25rem;
                    }
                    .text-lg {
                        font-size: 0.875rem;
                    }
                    .action-button {
                        width: 90%;
                    }
                }
            `}</style>
        </div>
        </Layout>
    );
}

export default App;
