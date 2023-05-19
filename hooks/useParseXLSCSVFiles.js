import React, { useState } from "react";
import { read, utils } from "xlsx";
import Papa from "papaparse";
import { toast } from "react-hot-toast";

const useParseXLSCSVFiles = (fieldNames = []) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log("file is", file);

    if (file.name.endsWith(".csv")) {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          console.log("file is", results);
          const filteredData = results.data.map((item) => {
            let data = {};
            Object.keys(results.data[0]).forEach((el) => {
              data[el] = item[el];
            });

            return data;
          });
          setData(filteredData);
          console.log("file is", filteredData);
        },
      });
    } else if (file?.name?.endsWith(".xls")) {
      const reader = new FileReader();
      console.log("in .xls", reader);

      reader.onload = (event) => {
        console.log("in onload");
        const workbook = read(event.target.result, { type: "binary" });
        console.log("after read", workbook);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const rows = utils.sheet_to_json(worksheet, { header: 1 });

        const headerRow = rows[0];
        // console.log("heder row", headerRow);
        const nameIndex = headerRow.indexOf("Name");
        const emailIndex = headerRow.indexOf("Email");

        // const filteredData = rows.slice(1).map((row) => ({ name: row[nameIndex], email: row[emailIndex] }));
        const filteredData = rows.slice(1).map((row) => {
          let data = {};
          headerRow.forEach((el) => {
            data[el] = row[headerRow.indexOf(el)];
          });

          return data;
        });
        console.log("filetered data", filteredData);

        setData(filteredData);
      };

      reader.readAsBinaryString(file);
    } else {
      console.error("Invalid file format");
      toast.error("Invalid file format!");
    }
  };

  return { handleFileUpload, data, error };
};

export default useParseXLSCSVFiles;
