import { Container, Typography } from "@mui/material";
import AnimeData from "../../../components/Anime/AnimeData";
import AnimeForm from "../../../components/Anime/AnimeForm";

const Anime = () => {
  return (
    <div>
      <Container maxWidth="xl" sx={{ my: 3 }}>
        <Typography variant="h4">Master Anime</Typography>
        {/* Anime Form untuk CRUD */}
        <AnimeForm></AnimeForm>
        <hr />
        {/* Anime Data = List Semua Anime */}
        <AnimeData></AnimeData>
      </Container>
    </div>
  );
};

export default Anime;
