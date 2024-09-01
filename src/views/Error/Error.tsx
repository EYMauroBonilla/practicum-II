import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PageContainer from "../../components/container/PageContainer";
import CustomButton from "../../components/buttons/CustomButton";
import styles from "./Error.module.css";

const Error: React.FC = () => {
  return (
    <PageContainer title="Error" description="This is the error page">
      <Box className={styles.box}>
        <Container maxWidth="md">
          <Typography
            align="center"
            variant="h1"
            className={styles.typographyH1}
          >
            404
          </Typography>
          <Typography
            align="center"
            variant="h4"
            className={styles.typographyH4}
          >
            No se ha podido encontrar la página
          </Typography>
          <Box
            component="section"
            sx={{
              p: 2,
              width: 300,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <CustomButton
              color="primary"
              size="small"
              fontSizeScale={0.1}
              widthScale={0.8}
              heightScale={1.1}
              component={Link}
              to="/"
              href="/"
            >
              Regresar a página principal
            </CustomButton>
          </Box>
        </Container>
      </Box>
    </PageContainer>
  );
};

export default Error;