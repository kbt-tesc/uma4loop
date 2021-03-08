import React, { useState, useEffect } from "react";
import umalist from "../assets/umalist.json";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { updateUmaId } from "../local-storage-service/local-storage-service.js";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "10em"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function UmaSelector({
  parentSelectedUmaId,
  setUmaId,
  formLabel,
  localUmaKey
}) {
  const classes = useStyles();

  let list = umalist.umamusume;

  const [selectUmaId, setSelectUmaId] = useState(parentSelectedUmaId);

  const handleUmaChange = event => {
    const selectId = event.target.value;
    updateUmaId(localUmaKey, selectId);
    setSelectUmaId(selectId);
  };

  useEffect(() => {
    setUmaId(selectUmaId);
  });

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="uma-select1-label">{formLabel || "ウマ娘"}</InputLabel>
        <Select
          labelId="uma-select1-label"
          id="uma-select1"
          value={selectUmaId}
          onChange={handleUmaChange}
        >
          <MenuItem key={-1} value={-1}>
            none
          </MenuItem>
          {list.map(element => (
            <MenuItem key={element.id} value={element.id}>
              {element.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
