import React from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Button, 
  Card, 
  CardContent,
} from "@mui/material";
import PageContainer from "../../components/container/PageContainer";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateClick = () => {
    navigate('/algelab/laboratorios/');
  };

  return (
    <PageContainer
      title="AlgeLab"
      sx={{ 
        height: "80vh", 
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start" 
      }}
    >
      <Container maxWidth="xl" sx={{ 
        height: "auto", 
        display: "flex", 
        alignItems: "flex-start", 
        pt: { xs: 1, sm: 1, md: 1, lg: 1 }, 
      }}>
        <Grid container spacing={2} alignItems="flex-start"> 
          <Grid item xs={12} md={10} lg={10}>
            <Card elevation={3} sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              borderRadius: 8,
              minHeight: { xs: 'auto', md: '100px' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              mr: { md: 4, lg: 8 },
              maxWidth: { lg: '1200px' },
            }}>
              <CardContent sx={{ p: { xs: 4, sm: 6, md: 8, lg: 9 } }}> 
                <Typography 
                  fontSize={{ xs: "22px", sm: "24px", md: "26px", lg: "28px" }}
                  sx={{ color: "primary.main", fontWeight: "bold", mb: 3, mt:-6 }}
                >
                  PLATAFORMA DE APRENDIZAJE INTERACTIVO
                </Typography>
                <Typography 
                  fontSize={{ xs: "40px", sm: "48px", md: "56px", lg: "72px" }} 
                  sx={{ 
                    mb: 3, 
                    fontWeight: 1000,
                    textShadow: '1px 0 0 currentColor',
                    lineHeight: 1.1
                  }}
                >
                  Domine el álgebra lineal con AlgeLab
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 5,
                    fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "22px" }, 
                    maxWidth: { xs: '100%', sm: '90%', md: '80%' } 
                  }}
                >
                  Revolucione su aprendizaje de álgebra lineal. Practique con laboratorios virtuales,
                  optimice su comprensión y mejore su experiencia educativa.
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleNavigateClick}
                  size="large"
                  sx={{ 
                    fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' },
                    py: { xs: 1, sm: 1.25, md: 1.5 },
                    px: { xs: 3, sm: 3.5, md: 4 }
                  }}
                >
                  Comenzar a aprender
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={2} lg={2}>
            {/* Este elemento de la cuadrícula se mantiene para fines de diseño, pero está vacío */}
          </Grid>
        </Grid>
      </Container>
    </PageContainer>
  );
};

export default Home;