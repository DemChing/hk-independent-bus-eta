import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { Box, SxProps, Theme, Typography } from "@mui/material";
import RouteNo from "./RouteNo";
import { RouteListEntry } from 'hk-bus-eta';

interface RouteNoCompanyProps {
  route: [string, RouteListEntry];
}

const RouteNoCompany = ({ route }: RouteNoCompanyProps) => {
  const { t } = useTranslation();
  const [routeNo, serviceType] = route[0].split("-").slice(0, 2);

  return (
    <Box>
      <div>
        <RouteNo
          entry={route[1]}
          routeNo={i18n.language === "zh" ? t(routeNo) : routeNo}
          fontSize={route[1].co[0] === "mtr" ? "1.2rem" : null}
        />
        {parseInt(serviceType, 10) >= 2 && (
          <Typography variant="caption" sx={specialTripSx}>
            {t("特別班")}
          </Typography>
        )}
      </div>
      <Typography component="h4" variant="caption" sx={companySx}>
        {route[1].co.map((co) => t(co)).join("+")}
      </Typography>
    </Box>
  );
};

export default RouteNoCompany;

const companySx: SxProps<Theme> = {
  color: (theme) => theme.palette.text.secondary,
};

const specialTripSx: SxProps<Theme> = {
  fontSize: "0.6rem",
  marginLeft: "8px",
};
