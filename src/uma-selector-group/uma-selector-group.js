import React, { useState, useEffect } from "react";
import UmaSelector from "../uma-selector/uma-selector.js";
import UmaTrainigGroup from "../uma-training-group/uma-training-group.js";
import "./style.css";

export default function App() {
  const [umaId1, setUmaId1] = useState(0);
  const [umaId2, setUmaId2] = useState(0);
  const [umaId3, setUmaId3] = useState(0);
  const [umaId4, setUmaId4] = useState(0);

  useEffect(() => {
    console.info("change:", umaId1, umaId2, umaId3, umaId4);
  });

  return (
    <>
      <div class="formGroup">
        <UmaSelector
          id="umaSelector1"
          setUmaId={setUmaId1}
          parentSelectedUmaId={10}
          formLabel="ウマ娘1"
        />
        <UmaSelector
          id="umaSelector2"
          setUmaId={setUmaId2}
          parentSelectedUmaId={11}
          formLabel="ウマ娘2"
        />
        <UmaSelector
          id="umaSelector3"
          setUmaId={setUmaId3}
          parentSelectedUmaId={14}
          formLabel="ウマ娘3"
        />
        <UmaSelector
          id="umaSelector4"
          setUmaId={setUmaId4}
          parentSelectedUmaId={12}
          formLabel="ウマ娘4"
        />
      </div>

      <div class="umaTrainingGroup">
        <div class="umaTainingContainer">
          <UmaTrainigGroup
            label="1回目"
            trainingUmaId1={umaId1}
            trainingUmaId2={umaId4}
            trainingUmaId3={umaId2}
          />
          <UmaTrainigGroup
            label="2回目"
            trainingUmaId1={umaId1}
            trainingUmaId2={umaId2}
            trainingUmaId3={umaId3}
          />
        </div>
        <div class="umaTainingContainer">
          <UmaTrainigGroup
            label="3回目"
            trainingUmaId1={umaId2}
            trainingUmaId2={umaId3}
            trainingUmaId3={umaId4}
          />
          <UmaTrainigGroup
            label="4回目"
            trainingUmaId1={umaId3}
            trainingUmaId2={umaId4}
            trainingUmaId3={umaId1}
          />
        </div>
      </div>
    </>
  );
}
