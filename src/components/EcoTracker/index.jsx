import { useRef, useState } from "react";

import "./index.css";

const EcoTracker = () => {
  const [bikedOrWalked, setBikedOrWalked] = useState(0);
  const [recycled, setRecycled] = useState(0);
  const [electricitySaved, setElectricitySaved] = useState(0);
  const [treesPlanted, setTreesPlanted] = useState(0);
  const [calculationResult, setCalculationResult] = useState(0);

  const updateBikedOrWalked = (e) => setBikedOrWalked(e.target.value);
  const updateRecycled = (e) => setRecycled(e.target.value);
  const updateElectricitySaved = (e) => setElectricitySaved(e.target.value);
  const updateTreesPlanted = (e) => setTreesPlanted(e.target.value);

  const resultsRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setBikedOrWalked(0);
    setRecycled(0);
    setElectricitySaved(0);
    setTreesPlanted(0);
    setCalculationResult(0);

    const tempCalculationResult =
      parseInt(bikedOrWalked) +
      parseInt(recycled) +
      parseInt(electricitySaved) +
      parseInt(treesPlanted);

    if (tempCalculationResult && tempCalculationResult > 0) {
      setCalculationResult(tempCalculationResult);

      if (resultsRef.current) {
        resultsRef.current.focus();
      }
    } else {
      alert(
        "Please submit at least one natural number and do not include white spaces. (e.g., 1, 2, 3, and onward.)"
      );
    }
  };

  const getResultText = () => {
    if (calculationResult >= 50) {
      return "Excellent! You are a Nature Hero!";
    } else if (calculationResult >= 30 && calculationResult <= 49) {
      return "Good job! Keep going to save nature.";
    } else if (calculationResult < 30) {
      return "You can do more to help the planet!";
    }
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-[var(--primary-color)] px-10 py-4">
      <div className="flex items-center mb-6">
        <img
          className="w-10 pt-1 mr-2"
          src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1752331223/Eco%20Tracker/new-leaf_ukl934.png"
          alt="leaf img"
        />
        <h1 className="text-center text-[var(--tertiary-color)] text-4xl font-bold">
          Eco Tracker
        </h1>
      </div>

      <p className="mb-4 text-[var(--tertiary-color)] text-xl font-semibold">
        Track your eco-friendly actions from the past week:
      </p>

      <form className="w-[60%]" onSubmit={handleSubmit}>
        <fieldset className="flex flex-col items-center">
          <legend>
            <span className="absolute left-[-9999px]">
              The below contains a list of inputs.
            </span>
          </legend>

          <ul className="list-none p-0 space-y-3">
            <li className="flex items-center gap-6 px-3.5 py-4 rounded-md bg-[var(--secondary-color)]">
              <img
                className="w-15"
                src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1752331223/Eco%20Tracker/new-bike_r004tf.png"
                alt="bike img"
              />
              <label
                className="text-[var(--tertiary-color)] text-base font-semibold"
                htmlFor="bikedOrWalked"
              >
                Used a bicycle or walked instead of using a vehicle:
              </label>
              <input
                id="bikedOrWalked"
                className="min-w-10 w-20 px-2 pb-0.5 ml-auto border-1 border-[var(--tertiary-color)] rounded-md text-center text-[var(--tertiary-color)] font-semibold"
                type="number"
                onChange={updateBikedOrWalked}
                value={bikedOrWalked}
              />
            </li>

            <li className="flex items-center gap-6 px-3.5 py-4 rounded-md bg-[var(--secondary-color)]">
              <img
                className="w-15"
                src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1752331223/Eco%20Tracker/new-recycle_oxzaw9.png"
                alt="recycle img"
              />
              <label
                className="text-[var(--tertiary-color)] text-base font-semibold"
                htmlFor="recycled"
              >
                Used reusable bags or bottles:
              </label>
              <input
                id="recycled"
                className="min-w-10 w-20 px-2 pb-0.5 ml-auto border-1 border-[var(--tertiary-color)] rounded-md text-center text-[var(--tertiary-color)] font-semibold"
                type="number"
                onChange={updateRecycled}
                value={recycled}
              />
            </li>

            <li className="flex items-center gap-6 px-3.5 py-4 rounded-md bg-[var(--secondary-color)]">
              <img
                className="w-15"
                src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1752331223/Eco%20Tracker/new-light-bulb_lunfxa.png"
                alt="light bulb img"
              />
              <label
                className="text-[var(--tertiary-color)] text-base font-semibold"
                htmlFor="electricitySaved"
              >
                Saved electricity by turning off unnecessary lights/appliances:
              </label>
              <input
                id="electricitySaved"
                className="min-w-10 w-20 px-2 pb-0.5 ml-auto border-1 border-[var(--tertiary-color)] rounded-md text-center text-[var(--tertiary-color)] font-semibold"
                type="number"
                onChange={updateElectricitySaved}
                value={electricitySaved}
              />
            </li>

            <li className="flex items-center gap-6 px-3.5 py-4 rounded-md bg-[var(--secondary-color)]">
              <img
                className="w-15"
                src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1752331223/Eco%20Tracker/new-tree_kjxs5h.png"
                alt="tree img"
              />
              <label
                className="text-[var(--tertiary-color)] text-base font-semibold"
                htmlFor="treesPlanted"
              >
                Planted trees:
              </label>
              <input
                id="treesPlanted"
                className="min-w-10 w-20 px-2 pb-0.5 ml-auto border-1 border-[var(--tertiary-color)] rounded-md text-center text-[var(--tertiary-color)] font-semibold"
                type="number"
                onChange={updateTreesPlanted}
                value={treesPlanted}
              />
            </li>
          </ul>

          <button
            className="px-8 py-2 mt-4 mb-8 rounded-lg text-[var(--primary-color)] text-lg bg-[var(--tertiary-color)] cursor-pointer hover:scale-105 duration-250 "
            type="submit"
            aria-label="calculate eco points"
          >
            Calculate
          </button>
        </fieldset>
      </form>

      <section
        className="p-8 rounded-md bg-[var(--secondary-color)]"
        aria-labelledby="results-heading"
        ref={resultsRef}
        tabIndex="-1"
      >
        <div className="flex items-center mb-3">
          <img
            className="w-7.25 pt-1 mr-1"
            src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1752331223/Eco%20Tracker/new-leaf_ukl934.png"
            alt="leaf img"
          />
          <h2
            id="results-heading"
            className="text-center text-[var(--tertiary-color)] text-2xl font-semibold"
          >
            {calculationResult
              ? getResultText()
              : "Submit your eco-friendly actions!"}
          </h2>
        </div>

        <p className="text-center text-[var(--tertiary-color)] text-3xl">
          Total Eco Points: {calculationResult}
        </p>
      </section>
    </main>
  );
};

export default EcoTracker;
