import axios from 'axios'
export const getEstados = async () : Promise<any> => {
  const {data} = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
  return data;
}
export const getMunicipios = async (UF: string) : Promise<any> => {
  const {data} = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`);
  return data;
}
export const getDistrito = async (municipio: string) : Promise<any> => {
  const {data} = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${municipio}/distritos.`);
  return data;
}