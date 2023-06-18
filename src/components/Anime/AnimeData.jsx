import { DataGrid } from "@mui/x-data-grid";
import { Form, useLoaderData } from "react-router-dom";
import { getAllAnime } from "../../api/animeApi";
import { Button } from "@mui/material";
import { Delete, Update } from "@mui/icons-material";

const AnimeData = () => {
  const loaderData = useLoaderData();
  return (
    <div style={{ height: 631, width: "100%" }}>
      <DataGrid
        rows={loaderData.rows}
        columns={loaderData.columns}
        pageSize={10}
        rowsPerPageOptions={[10, 25, 50, 100]}
        initialState={{
          sorting: {
            sortModel: [{ field: "id", sort: "desc" }],
          },
        }}
      />
    </div>
  );
};

export default AnimeData;

export const AnimeLoader = async () => {
  const query = await getAllAnime();

  let result = {};

  result.columns = [
    { field: "id", headerName: "ID", type: "number" },
    {
      field: "img",
      headerName: "Foto Anime",
      flex: 1,
      renderCell: (params) => {
        return (
          <img
            src={params.row.pict}
            alt={params.row.nama}
            style={{ height: "100px", objectFit: "contain" }}
          />
        );
      },
    },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "desc", headerName: "Description", flex: 1 },
    { field: "like", headerName: "Like", flex: 1 },
    { field: "created_at", headerName: "Created At", flex: 1 },
    // {
    //   field: "kategori",
    //   headerName: "Kategori Anime",
    //   flex: 1,
    //   valueGetter: (params) => {
    //     return params.row?.kategori?.nama;
    //   },
    // },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => {
        return (
          <>
          <Form method="delete" action="/admin/Anime">
            <input type="hidden" name="id" value={params.id} />
            <Button
              type="submit"
              variant="contained"
              color="error"
              startIcon={<Delete />}
            >
              Hapus
            </Button>
          </Form>

          {/* <Form method="put" action="/admin/Anime/">
          <input type="hidden" name="id" value={params.id} />
          <Button
            type="submit"
            variant="contained"
            color="success"
            startIcon={<Update />}
          >
            Update
          </Button>
        </Form> */}
        {/* <a href='/admin/anime/{params.id}'>
            <Button
                type="submit"
                variant="contained"
                color="success"
                startIcon={<Update />}
            >
                Update
          </Button>
        </a> */}
          </>
        );
      },
    },
  ];
  result.rows = query;
  return result;
};
