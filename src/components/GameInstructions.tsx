type GameInstructionsProps = {
  shootingControls?: string[];
};

const movementControls = [
  "W — Move Forward",
  "S — Move Backward",
  "A — Move Left",
  "D — Move Right",
  "Space — Jump",
  "Mouse — Control Camera / Look Around",
  "ESC — Exit the Game",
];

const GameInstructions = ({ shootingControls }: GameInstructionsProps) => {
  return (
    <div className="space-y-6">
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">How to Play</h2>

        <div className="bg-muted p-6 rounded-xl">
          <p className="mb-4">Follow the steps below to start the game:</p>

          <ol className="list-decimal ml-6 space-y-2 text-muted-foreground">
            <li>Download the game ZIP file.</li>
            <li>Extract (unzip) the folder to your computer.</li>
            <li>Open the extracted folder.</li>
            <li>Double-click the executable (.exe) file to start the game.</li>
          </ol>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-3">Movement Controls</h3>
        <ul className="space-y-2 text-muted-foreground">
          {movementControls.map((control) => (
            <li key={control}>{control}</li>
          ))}
        </ul>
      </div>

      {shootingControls && shootingControls.length > 0 ? (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Shooting Controls</h3>
          <ul className="space-y-2 text-muted-foreground">
            {shootingControls.map((control) => (
              <li key={control}>{control}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-3">Exit the Game</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li>Press ESC to exit the game.</li>
          <li>Or close the game window using the taskbar.</li>
        </ul>
      </div>
    </div>
  );
};

export default GameInstructions;
