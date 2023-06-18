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
import { deleteAnime, postAnime, updateAnime } from "../../api/animeApi";
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
          label="Id"
          variant="outlined"
          sx={{ my: 3 }}
          fullWidth
          helperText="Masukkan Id Anime "
          name="id"
        ></TextField>

        <Button
          type="submit"
          color="success"
          variant="contained"
          sx={{ my: 3 }}
          name="insert"
        >
          Insert
        </Button>
        
        <Button
          type="submit"
          color="primary"
          variant="contained"
          sx={{ my: 3, mx: 3 }}
          name="update"
        >
          Update
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
        console.log(data.get("insert"))
        console.log(data.get("update"))

        if(data.get("insert") == null){
            const id = data.get("id")
            console.log(id);
            const input = {
                name: data.get("nama"),
                desc: data.get("deskripsi"),
            };
            console.log(input);
            await updateAnime(id, input);
            return { success: true, message: "Update data" };
        }else{
            const input = {
                name: data.get("nama"),
                desc: data.get("deskripsi"),
                like: 0,
                created_at: new Date()
            };
            console.log(input);
            await postAnime(input);
            return { success: true, message: "Insert Data" };
        }

        

        break;
    case "DELETE":
      const dataHapus = await request.formData();
      await deleteAnime(dataHapus.get("id"));
      return { success: true, message: "Menghapus data" };
      break;
    // case "PUT":
    //       const dataUpdate = await request.formData()
    //     const inputUpdate = {
    //         name: dataUpdate.get("nama"),
    //         // pict: dataUpdate.get("img"),
    //         desc: dataUpdate.get("deskripsi"),
    //         // like: 0,
    //         // created_at: new Date()
    //     };
    //     const res = await updateAnime(dataUpdate.get("id"), inputUpdate)
    //     if(res.status == 200){
    //         return { success: true, message: res.data.msg };
    //     }
    //     else{
    //         return {success: false, message: res.data.msg}
    //     }
    //     // console.log(res);
        
    default:
      break;
  }
};
