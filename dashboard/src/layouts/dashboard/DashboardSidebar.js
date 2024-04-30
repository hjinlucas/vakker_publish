import { useState, useEffect } from "react";
// material
import { styled } from "@mui/material/styles";
import {
  Stack,
  Drawer,
  Divider,
  IconButton,
  useTheme,
  Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// components
import { Scrollbar, NavSection, MHidden, Logo, Logo2 } from "src/components";
import sidebarConfig from "./config";

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 220;

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    transition: theme.transitions.create("width", {
      duration: theme.transitions.duration.complex,
    }),
  },
}));

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const [open, setopen] = useState(false);
  const theme = useTheme();
  useEffect(() => {
    setopen(true);
  }, []);

  const renderContent = (
    <Scrollbar
      sx={{
        height: "100%",
        "& .simplebar-content": {
          height: "100%",
          display: "flex",
          flexDirection: "column",
        },
        svg: {
          fontSize: 22,
        },
      }}>
      <Stack
        spacing={3}
        sx={{
          px: { md: 2.5, xs: 1 },
          pt: 0.7,
          pb: 0.7,
        }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            img: {
              objectFit: "contain",
              my: 0.5,
            },
          }}>
          {theme.direction === "rtl" ? (
            <Typography
              variant="h4"
              color="text.primary"
              sx={{
                lineHeight: 2.03,
                span: {
                  color: "primary.main",
                },
              }}>
              <span>نكست</span>ستور
            </Typography>
          ) : (
            <Typography
              variant="h4"
              color="text.primary"
              sx={{
                lineHeight: 2.03,
                span: {
                  color: "primary.main",
                },
              }}>
              <span>Next</span>store
            </Typography>
          )}
          <MHidden width="lgUp">
            <IconButton onClick={() => onCloseSidebar()}>
              <ChevronLeftIcon />
            </IconButton>
          </MHidden>
        </Stack>
      </Stack>
      <Divider />
      <NavSection
        navConfig={sidebarConfig}
        isShow={true}
        onClose={onCloseSidebar}
      />
    </Scrollbar>
  );

  return (
    <RootStyle
      sx={{
        width: {
          lg: DRAWER_WIDTH,
        },
      }}>
      <MHidden width="lgUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}>
          {open && renderContent}
        </Drawer>
      </MHidden>
      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: "background.default",
            },
          }}>
          {open && renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}
