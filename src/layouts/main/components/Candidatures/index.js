/* eslint-disable import/no-extraneous-dependencies */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// redux
import { useStore } from "react-redux";

// @mui material components

import Icon from "@mui/material/Icon";

// Material  2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";
import MDButton from "components/MDButton";
// Material  2 React example components
function CardCandidature() {
  const store = useStore();
  return (
    <Grid item xs={12} md={6}>
      <MDBox
        color="white"
        bgColor="Light"
        variant="gradient"
        borderRadius="lg"
        shadow="lg"
        opacity={1}
        p={4}
      >
        <Grid container>
          {store.getState().candidate.map((item) => (
            <>
              <Grid sx={{ mr: "20px" }}>
                <MDButton
                  variant="gradient"
                  color="light"
                  iconOnly
                  style={{
                    borderRadius: "50px",
                  }}
                >
                  <Icon
                    fontSize="large"
                    sx={{
                      color: "#62A5FF",
                    }}
                  >
                    groupe
                  </Icon>
                </MDButton>
              </Grid>
              <Grid>
                <MDTypography color="dark" fontWeight="bold" variant="h3">
                  {item.value}
                </MDTypography>
                <MDTypography color="dark" fontWeight="light" sx={{ fontSize: 16, mb: "30px" }}>
                  {item.label}
                </MDTypography>

                <MDButton variant="gradient" color="info" size="small">
                  Voir les Condidatures
                </MDButton>
              </Grid>
            </>
          ))}
        </Grid>
      </MDBox>
    </Grid>
  );
}

export default CardCandidature;
