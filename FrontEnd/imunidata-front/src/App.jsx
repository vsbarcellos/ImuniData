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
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>ImuniData</h1>
      <div
        style={{
          marginBottom: "1.5rem",
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
        }}
      >
        <input
          name="municipio"
          placeholder="Município"
          value={form.municipio}
          onChange={handleChange}
        />
        <input
          name="estado"
          placeholder="Estado (ex: SP)"
          value={form.estado}
          onChange={handleChange}
        />
        <input
          name="vacina"
          placeholder="Vacina"
          value={form.vacina}
          onChange={handleChange}
        />
        <input
          name="dose"
          placeholder="Dose"
          value={form.dose}
          onChange={handleChange}
        />
        <input
          name="quantidadeAplicada"
          placeholder="Quantidade"
          value={form.quantidadeAplicada}
          onChange={handleChange}
        />
        <input
          name="dataRegistro"
          placeholder="Data (AAAA-MM-DD)"
          value={form.dataRegistro}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Cadastrar</button>
      </div>
      <input
        placeholder="Filtrar por vacina ou estado..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem", width: "300px" }}
      />

      <table
        border="1"
        cellPadding="8"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            <th>Município</th>
            <th>Estado</th>
            <th>Vacina</th>
            <th>Dose</th>
            <th>Qtd Aplicada</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {registrosFiltrados.map((r) => (
            <tr key={r.id}>
              <td>{r.municipio}</td>
              <td>{r.estado}</td>
              <td>{r.vacina}</td>
              <td>{r.dose}</td>
              <td>{r.quantidadeAplicada}</td>
              <td>{r.dataRegistro}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
