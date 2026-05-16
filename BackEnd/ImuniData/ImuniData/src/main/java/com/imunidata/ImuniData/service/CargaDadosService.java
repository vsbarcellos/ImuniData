package com.imunidata.ImuniData.service;

import com.imunidata.ImuniData.model.RegistroVacinacao;
import com.imunidata.ImuniData.repository.RegistroVacinacaoRepository;
import com.opencsv.CSVReader;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.io.InputStreamReader;
import java.util.Objects;

@Service
public class CargaDadosService {

    @Autowired
    private RegistroVacinacaoRepository repository;

    @PostConstruct
    public void carregarDados() {
        try (CSVReader reader = new CSVReader(new InputStreamReader(
                Objects.requireNonNull(getClass().getClassLoader().getResourceAsStream("vacinacao.csv"))))) {

            reader.readNext(); // pula o cabeçalho
            String[] linha;
            while ((linha = reader.readNext()) != null) {
                RegistroVacinacao r = new RegistroVacinacao();
                r.setMunicipio(linha[0]);
                r.setEstado(linha[1]);
                r.setVacina(linha[2]);
                r.setDose(linha[3]);
                r.setQuantidadeAplicada(linha[4]);
                r.setDataRegistro(linha[5]);
                repository.save(r);
            }
        } catch (Exception e) {
            System.err.println("Erro ao carregar CSV: " + e.getMessage());
        }
    }
}