import { Form, useActionData, useLoaderData } from "react-router-dom";
import {
  TextField,
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
  MenuItem,
  Select,
  InputLabel,
  FormGroup,
  Checkbox,
  List,
  ListItem,
  Alert,
  AlertTitle,
} from "@mui/material";
import { deleteAnime, postAnime } from "../../api/animeApi";

const AnimeForm = () => {
  // untuk mengambil data yang dimasukkan oleh user dari form yang kita buat
  const kembalian = useActionData();

  // untuk menggunakan data hasil kita load, biasanya dari api
  const loaderData = useLoaderData();



  return (
    <div>
      {kembalian && kembalian.success && (
        <Alert severity="success">
          <AlertTitle>Sukses</AlertTitle>
          <strong>Berhasil!</strong>
          {kembalian.message}
        </Alert>
      )}
      {/* {alertKembalian} */}
      <Form method="post" action="/admin/anime">
        <TextField
          label="Nama anime"
          variant="outlined"
          sx={{ my: 3 }}
          fullWidth
          helperText="Masukkan nama anime"
          name="nama"
        ></TextField>

        <TextField
          label="Deskripsi"
          variant="outlined"
          sx={{ my: 3 }}
          fullWidth
          helperText="Masukkan deskripsi"
          name="deskripsi"
        ></TextField>
        <TextField
          label="Image URL"
          variant="outlined"
          sx={{ my: 3 }}
          fullWidth
          helperText="Masukkan URL Image"
          name="img"
        ></TextField>

        <Button
          type="submit"
          color="success"
          variant="contained"
          sx={{ my: 3 }}
        >
          Insert
        </Button>
      </Form>
    </div>
  );
};

export default AnimeForm;

export const AnimeFormAction = async ({ request, params }) => {
  switch (request.method) {
    case "POST":
        const data = await request.formData();
        console.log(data);


        const input = {
            name: data.get("nama"),
            // pict: data.get("img"),
            desc: data.get("deskripsi"),
            like: 0,
            created_at: new Date()
        };
        console.log(input);
        await postAnime(input);
        return { success: true, message: "Memasukkan data" };

        break;
    case "DELETE":
      const dataHapus = await request.formData();
      await deleteAnime(dataHapus.get("id"));
      return { success: true, message: "Menghapus data" };
      break;
    case "PUT":
        const dataUpdate = await request.formData()
        console.log(dataUpdate.get("id"));
        await updateAnime
    default:
      break;
  }
};
