import React, { useState, useEffect } from "react";
import UmaSelector from "../uma-selector/uma-selector.js";
import UmaTrainigGroup from "../uma-training-group/uma-training-group.js";
import "./style.css";

import {
  getSavedUmaId,
  UMA_ID_1,
  UMA_ID_2,
  UMA_ID_3,
  UMA_ID_4
} from "../local-storage-service/local-storage-service.js";

export default function App() {
  function getUmaIdByLocalStorage(key) {
    return localStorage.getItem(key);
  }

  const localUma1 = getSavedUmaId(UMA_ID_1);
  const localUma2 = getSavedUmaId(UMA_ID_2);
  const localUma3 = getSavedUmaId(UMA_ID_3);
  const localUma4 = getSavedUmaId(UMA_ID_4);

  const [umaId1, setUmaId1] = useState(localUma1 || 10);
  const [umaId2, setUmaId2] = useState(localUma2 || 11);
  const [umaId3, setUmaId3] = useState(localUma3 || 14);
  const [umaId4, setUmaId4] = useState(localUma4 || 12);

  console.log(
    "local1",
    localUma1,
    "local2",
    localUma2,
    "local3",
    localUma3,
    "local4",
    localUma4
  );

  console.log(
    "state1",
    umaId1,
    "state2",
    umaId2,
    "state3",
    umaId3,
    "state4",
    umaId4
  );

  return (
    <>
      <div className="formGroup">
        <UmaSelector
          id="umaSelector1"
          setUmaId={setUmaId1}
          parentSelectedUmaId={umaId1}
          formLabel="ウマ娘1"
          localUmaKey={UMA_ID_1}
        />
        <UmaSelector
          id="umaSelector2"
          setUmaId={setUmaId2}
          parentSelectedUmaId={umaId2}
          formLabel="ウマ娘2"
          localUmaKey={UMA_ID_2}
        />
        <UmaSelector
          id="umaSelector3"
          setUmaId={setUmaId3}
          parentSelectedUmaId={umaId3}
          formLabel="ウマ娘3"
          localUmaKey={UMA_ID_3}
        />
        <UmaSelector
          id="umaSelector4"
          setUmaId={setUmaId4}
          parentSelectedUmaId={umaId4}
          formLabel="ウマ娘4"
          localUmaKey={UMA_ID_4}
        />
      </div>

      <div className="umaTrainingContainer">
        <div className="umaTrainingFlex">
          <UmaTrainigGroup
            className="umaTrainingGroup"
            label="1回目"
            trainingUmaId1={umaId1}
            trainingUmaId2={umaId4}
            trainingUmaId3={umaId2}
          />
          <UmaTrainigGroup
            className="umaTrainingGroup"
            label="2回目"
            trainingUmaId1={umaId1}
            trainingUmaId2={umaId2}
            trainingUmaId3={umaId3}
          />
        </div>
        <div className="umaTrainingFlex">
          <UmaTrainigGroup
            className="umaTrainingGroup"
            label="3回目"
            trainingUmaId1={umaId2}
            trainingUmaId2={umaId3}
            trainingUmaId3={umaId4}
          />
          <UmaTrainigGroup
            className="umaTrainingGroup"
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
