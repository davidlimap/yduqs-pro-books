import { FormatoData } from "../types/FormatoData.js";
export function formatarData(data, formato = FormatoData.PADRAO) {
    if (formato === FormatoData.MES_ANO) {
        return data.toLocaleDateString("pt-br", {
            month: "2-digit",
            year: "numeric"
        });
    }
    else if (formato === FormatoData.DIA_MES) {
        return data.toLocaleDateString("pt-br", {
            day: "2-digit",
            month: "2-digit"
        });
    }
    return data.toLocaleDateString("pt-br");
}
