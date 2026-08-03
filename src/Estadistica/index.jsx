import { useState } from "react";

export function Estadisticas({ total, adoptadas, disponibles }) {


    return (
        <div className="d-flex flex-row">
            <button className="btn btn-light m-2" style={{ width: 300, height: 200 }}>Total mascotas registradas <br /> (segun los filtros) <br /> {total}</button>
            <button className="btn btn-light m-2" style={{ width: 300, height: 200 }}>Total mascotas disponibles <br /> (segun los filtros) <br /> {disponibles}</button>
            <button className="btn btn-light m-2" style={{ width: 300, height: 200 }}>Total mascotas adoptadas <br /> (segun los filtros) <br /> {adoptadas}</button>
        </div>
    )


}