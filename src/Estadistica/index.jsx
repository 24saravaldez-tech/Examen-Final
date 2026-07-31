import { useState } from "react";

export function Estadisticas({total, adoptadas, disponibles}) {


    return (
        <div className="d-flex flex-row">
            <button className="btn btn-light m-2" style={{ width: 300, height: 200 }}>Total mascotas registradas: {total}</button>
            <button className="btn btn-light m2" style={{ width: 300, height: 200 }}>Total mascotas disponibles: {disponibles}</button>
            <button className="btn btn-light m-2" style={{ width: 300, height: 200 }}>Total mascotas adoptadas: {adoptadas}</button>
        </div>
   ) 


}