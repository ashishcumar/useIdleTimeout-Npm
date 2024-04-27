import {useEffect} from "react";

const useIdleTimeout = (timeoutDuration: number, actionCallback: () => void) => {
  useEffect(() => {
    let idleTimer: NodeJS.Timeout;

    const resetIdleTimer = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(actionCallback, timeoutDuration);
    };

    const handleUserActivity = () => {
      resetIdleTimer();
    };

    // Initialize idle timer and event listeners
    resetIdleTimer();
    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("keydown", handleUserActivity);

    // Cleanup
    return () => {
      clearTimeout(idleTimer);
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("keydown", handleUserActivity);
    };
  }, [timeoutDuration, actionCallback]);
};

export {useIdleTimeout};
