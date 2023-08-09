import { useEffect } from 'react';
import useSpeechRecognition from './SpeechRecognition';
import useSpeechSynthesis from '../Messages/SpeechSynthesis';

const useKeyboardShortcuts = (ask) => {
  const { toggleListening } = useSpeechRecognition(ask);
  const { toggleSpeechSynthesis } = useSpeechSynthesis();

  useEffect(() => {
    const handleGlobalKeyDown = (event) => {
      if (event.shiftKey && event.altKey) {
        if (event.key === 'L') {
          // Logic related to speech recognition
          toggleListening();
        }
        if (event.key === 'P') {
          // Logic related to speech synthesis
          toggleSpeechSynthesis();
        }
        if (event.key === 'O') {
          // Other logic as needed
          //toggleAutoListen();
        }
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);

    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown);
    };
  }, [toggleListening, toggleSpeechSynthesis, ask]);
};

export default useKeyboardShortcuts;
