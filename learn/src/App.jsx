import React from 'react'

const Progress = () => {
  const [percent, setPercent] = React.useState(0);
  const [intervalId, setIntervalId] = React.useState(null);
  const [isCompleted, setIsCompleted] = React.useState(false);

  React.useEffect(() => {
    startProgress();
    return () => stopProgress(); // Cleanup on unmount
  }, []); // Empty dependency array means run once on mount

  const startProgress = () => {
    if (intervalId) return; // Prevent multiple intervals
    const id = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(id);
          setIsCompleted(true);
          return 100;
        }
        return prev + 1;
      });
    }, 100);
    setIntervalId(id);
  };

  return (
    <div>
      <h1 className='text-center text-4xl pb-2'>Progress bar</h1>
      <div className="progress-bar">
        <div 
          className="progress bg-green-400 text-3xl text-center" 
          style={{ width: `${percent}%` }}
        >
          <span>{percent}%</span>
        </div>
      </div>
      {isCompleted && <p className="text-center text-2xl mt-4">Completed!</p>}
    </div>
  );
};

const App = () => {
  return (
    <>
      <Progress />
    </>
  )
}

export default App