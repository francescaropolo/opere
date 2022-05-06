import React, { useState } from 'react';
import PropTypes from 'prop-types';
import catalogo from "../catalogo.json"
import * as XLSX from "xlsx";

const Catalogo = props => {
    const [file, setFile] = useState(null)
    const onFileChange = (ev) => {
        setFile(ev.target.files[0])
    }
    const onFileUpload = (ev) => {
        const reader = new FileReader();

        reader.onload = (evt) => {
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: "binary" });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
            csvJSON(data)
        };
        reader.readAsBinaryString(file);
    };
    function csvJSON(csv) {
        console.log(csv)
        const lines = csv.split("\n");

        const result = [];

        const headers = lines[0].split(",");

        for (var i = 1; i < lines.length; i++) {

            const obj = {};
            const currentline = lines[i].split(",");
            for (let x = 0; x < currentline.length; x++) {
                obj[headers[x]] = currentline[x];
            }
            // for (var j = 0; j < headers.length - 1; j++) {
            // 	obj[headers[j]] = currentline[j];
            // }

            result.push(obj);

        }
        console.log(result)
        // setLng(headers[1].split('-')[0])
        // //return result; //JavaScript object
        // // console.log(JSON.stringify(result))
        // setFiles(JSON.stringify(result));
        // return JSON.stringify(result); //JSON
    }

    return (
        <div>
            {catalogo.map((opera, index) => {
                return opera.title
            })}
            <input type="file" onChange={onFileChange} />
            <button onClick={onFileUpload}>
                Upload!
            </button> 
        </div>
    );
};

Catalogo.propTypes = {

};

export default Catalogo;