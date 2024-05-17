import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [activeSound, setActiveSound] = useState('')
  const [activeSoundName, setActiveSoundName] = useState('')

  useEffect(()=>{
    const handleKeyDown = (event) => {
      playSound(event.key.toUpperCase())
    }
    
    document.addEventListener("keydown", handleKeyDown)

    // Clean up the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const drumPads = [
    {
      keyCode: 81,
      name: "Heater 1",
      text: "Q",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
    },
    {
      keyCode: 87,
      name: "Heater 2",
      text: "W",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
    },
    {
      keyCode: 69,
      name: "Heater 3",
      text: "E",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
    },
    {
      keyCode: 65,
      name: "Heater 4",
      text: "A",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
    },
    {
      keyCode: 83,
      name: "Clap",
      text: "S",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
    },
    {
      keyCode: 68,
      name: "Open-HH",
      text: "D",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      name: "Kick-n'-Hat",
      text: "Z",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
    },
    {
      keyCode: 88,
      name: "Kick",
      text: "X",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      name: "Closed-HH",
      text: "C",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
    }
  ];

  function findDrumPadByText(text) {
    return drumPads.find(pad => pad.text === text);
  }

  function playSound(selector){
    const audio = document.getElementById(selector)
    audio.play()
    setActiveSound(selector)
    
    const drumPad = findDrumPadByText(selector)
    if (drumPad) {
      setActiveSoundName(drumPad.name)
    }
  }

  return (
    <div className='App'>
      <div id="drum-machine">
        <h2 style={{ textAlign: 'center' }}>Drum Machine</h2>
        <div className="drum-pads">
          {drumPads.map((drumPad) => (
            <div key={drumPad.keyCode} onClick={()=>{
              playSound(drumPad.text)
            }} className='drum-pad' id={drumPad.src}>{drumPad.text}
              <audio className='clip' id={drumPad.text} src={drumPad.src}></audio>
            </div>
          ))}
        </div>
        <div className="display">{activeSoundName}</div>
      </div>
    </div>
  )
}

export default App
