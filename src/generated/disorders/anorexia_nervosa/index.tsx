import { DisorderRenderer } from "../_shared/DisorderRenderer";
import { data } from "./data";

export function AnorexiaNervosa() {
  return <DisorderRenderer data={data} />;
}

export { data };
export default AnorexiaNervosa;
export const meta = {
  id: data.meta.id,
  nome: data.meta.nome_completo ?? data.meta.nome,
  sigla: data.meta.sigla ?? undefined,
  capituloId: data.meta.capitulo_id,
};
