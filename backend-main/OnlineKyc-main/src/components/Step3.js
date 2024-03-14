import React, { useRef } from "react";

function Step3({ onNextStep, onPreviousStep, onVideoDataChange }) {
  const videoRef = useRef(null);
  const utteranceRef = useRef(null); // Ref to store the current utterance

  const speakMessage = (message) => {
    // If there's an ongoing utterance, cancel it
    if (utteranceRef.current && window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterance);
    utteranceRef.current = utterance; // Store the current utterance
  };

  const handleCaptureVideo = () => {
    speakMessage("Please keep your face straight.");

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setTimeout(() => {
            speakMessage("Please keep your ID card near the camera.");
            setTimeout(() => {
              speakMessage("Thank you for using our verification system!");
            }, 10000); // Wait 10 seconds before the final message
          }, 10000); // Wait 10 seconds before the second message
        }
      })
      .catch((error) => {
        console.error("Error accessing webcam:", error);
      });
  };

  const handleStopCapture = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach((track) => {
      track.stop();
    });

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  const handleNext = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (videoRef.current) {
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        onVideoDataChange(blob);
        onNextStep();
      }, "video/mp4");
    }
  };

  const handlePrevious = () => {
    handleStopCapture();
    onPreviousStep();
  };

  return (
    <div className="step3-container">
      <h1 className="step3-title">Step 3: Video Capture</h1>
      <div className="video-container">
        <video ref={videoRef} className="video" autoPlay muted />
      </div>
      <div className="buttons-container">
        <button className="button" onClick={handleCaptureVideo}>
          Start Video
        </button>
        <button className="button" onClick={handleStopCapture}>
          Stop Video
        </button>
        <button className="button" onClick={handlePrevious}>
          Previous
        </button>
        <button className="button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Step3;
