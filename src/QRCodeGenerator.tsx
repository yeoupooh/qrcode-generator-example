import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator = () => {
  const [accValue, setAccValue] = useState("your acc");
  const [secValue, setSecValue] = useState("your sec");
  const [combined, setCombined] = useState("");

  const updateCombined = () => {
    setCombined(`autorabit://settings?akey=${accValue}&skey=${secValue}`);
  };

  const handleAccValueChange = (event: any) => {
    setAccValue(event.target.value);
    updateCombined();
  };

  const handleSecValueChange = (event: any) => {
    setSecValue(event.target.value);
    updateCombined();
  };

  const handleGenerateClick = () => {
    updateCombined();
  };

  return (
    <>
      <Typography>QR code Generator</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <TextField
            fullWidth
            value={accValue}
            onChange={handleAccValueChange}
          ></TextField>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <TextField
            fullWidth
            value={secValue}
            onChange={handleSecValueChange}
          ></TextField>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Button
            fullWidth
            color="primary"
            variant="contained"
            onClick={handleGenerateClick}
          >
            Generate
          </Button>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <QRCode value={combined} />
        </Grid>
      </Grid>
    </>
  );
};

export default QRCodeGenerator;
