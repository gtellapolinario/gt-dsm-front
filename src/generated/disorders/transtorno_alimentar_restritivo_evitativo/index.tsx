import { DisorderRenderer } from "../_shared/DisorderRenderer";
import { data } from "./data";

export function TranstornoAlimentarRestritivoEvitativo() {
  return <DisorderRenderer data={data} />;
}

export { data };
export default TranstornoAlimentarRestritivoEvitativo;
export const meta = {
  id: data.meta.id,
  nome: data.meta.nome_completo ?? data.meta.nome,
  sigla: data.meta.sigla ?? undefined,
  capituloId: data.meta.capitulo_id,
};
