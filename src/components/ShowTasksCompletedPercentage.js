import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function ShowTasksCompletedPercentage(props) {
  let { value, showOnlyLabel } = props;
  showOnlyLabel = typeof showOnlyLabel !== "undefined" && !!showOnlyLabel;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display="flex" alignItems="center">
        {showOnlyLabel ? (
          <Box minWidth={35}>
            <Typography variant="body2" color="textSecondary">{props.value}</Typography>
          </Box>
        ) : (
          <>
            <Box width="100%" mr={1}>
              <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
              <Typography variant="body2" color="textSecondary">{`${Math.round(
                props.value
              )}%`}</Typography>
            </Box>
          </>
        )}
      </Box>
    </div>
  );
}

export default ShowTasksCompletedPercentage;
