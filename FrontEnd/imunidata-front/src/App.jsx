import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:8080/vacinacao";

function App() {
  const [registros, setRegistros] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [form, setForm] = useState({
    municipio: "",
    estado: "",
    vacina: "",
    dose: "",
    quantidadeAplicada: "",
    dataRegistro: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    axios.post(API, form).then((res) => {
      setRegistros([...registros, res.data]);
      setForm({
        municipio: "",
        estado: "",
        vacina: "",
        dose: "",
        quantidadeAplicada: "",
        dataRegistro: "",
      });
    });
  };

  useEffect(() => {
    axios.get(API).then((res) => setRegistros(res.data));
  }, []);

  const registrosFiltrados = registros.filter(
    (r) =>
      r.vacina.toLowerCase().includes(filtro.toLowerCase()) ||
      r.estado.toLowerCase().includes(filtro.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">💉 ImuniData</h1>

        {/* Formulário */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Novo Registro
          </h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {[
              "municipio",
              "estado",
              "vacina",
              "dose",
              "quantidadeAplicada",
              "dataRegistro",
            ].map((campo) => (
              <input
                key={campo}
                name={campo}
                placeholder={
                  campo === "dataRegistro"
                    ? "Data (AAAA-MM-DD)"
                    : campo.charAt(0).toUpperCase() + campo.slice(1)
                }
                value={form[campo]}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition"
          >
            Cadastrar
          </button>
        </div>

        {/* Filtro */}
        <input
          placeholder="Filtrar por vacina ou estado..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Tabela */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-blue-600 text-white">
              <tr>
                {[
                  "Município",
                  "Estado",
                  "Vacina",
                  "Dose",
                  "Qtd Aplicada",
                  "Data",
                ].map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {registrosFiltrados.map((r, i) => (
                <tr
                  key={r.id}
                  className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-4 py-2">{r.municipio}</td>
                  <td className="px-4 py-2">{r.estado}</td>
                  <td className="px-4 py-2">{r.vacina}</td>
                  <td className="px-4 py-2">{r.dose}</td>
                  <td className="px-4 py-2">{r.quantidadeAplicada}</td>
                  <td className="px-4 py-2">{r.dataRegistro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
