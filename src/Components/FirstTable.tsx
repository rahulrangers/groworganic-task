import post from "../types/post";
import { useState, useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const FirstTable = () => {
  const [posts, setposts] = useState<post[]>([]);
  const columns: GridColDef<(typeof posts)[number]>[] = [
    {
      field: "userId",
      headerName: "User ID",
      width: 100,
      editable: true
    },
    {
      field: "id",
      headerName: "ID",
      width: 100,
      editable: true
    },
    {
      field: "title",
      headerName: "Title",
      type: "string",
      width: 160,
      editable: true
    },
    {
      field: "body",
      headerName: "Body",
      description: "This column has a value getter and is not sortable.",
      type: "string",
      sortable: false,
      width: 600
    }
  ];
  const getposts = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "Get"
      });
      const data = await response.json();
      setposts(data);
    } catch (error:any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getposts();
  }, []);
  return (
    <div>
      <div className="flex justify-center text-[30px] m-10 font-bold text-blue-500 ">POSTS OF USERS</div>
      <div className="flex justify-center m-10 mt-0">
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={posts}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10
                }
              }
            }}
            pageSizeOptions={[10]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </div>
    </div>
  );
};
export default FirstTable;
