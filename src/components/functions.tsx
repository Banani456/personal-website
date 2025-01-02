export const playAudio = (audioId: string): void => {
  const audio = document.getElementById(audioId) as HTMLAudioElement | null;
  if (audio) {
    audio.play().catch((err) => console.error("Audio play failed:", err));
  } else {
    console.error(`Audio element with id '${audioId}' not found.`);
  }
};

export const navigateWithDelay = (url: string, delay: number = 300): void => {
  setTimeout(() => {
    window.location.href = url;
  }, delay);
};

export const addClickEvent = (callback: (event: MouseEvent) => void): void => {
  document.body.addEventListener("click", callback);
};
