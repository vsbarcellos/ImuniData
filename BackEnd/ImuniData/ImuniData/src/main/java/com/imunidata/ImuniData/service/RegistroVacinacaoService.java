package com.imunidata.ImuniData.service;

import com.imunidata.ImuniData.model.RegistroVacinacao;
import com.imunidata.ImuniData.repository.RegistroVacinacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class RegistroVacinacaoService {

    @Autowired
    private RegistroVacinacaoRepository repository;

    public List<RegistroVacinacao> listarTodos() {
        return repository.findAll();
    }

    public Optional<RegistroVacinacao> buscarPorId(Long id) {
        return repository.findById(id);
    }

    public List<RegistroVacinacao> buscarPorVacina(String vacina) {
        return repository.findByVacina(vacina);
    }

    public List<RegistroVacinacao> buscarPorEstado(String estado) {
        return repository.findByEstado(estado);
    }

    public RegistroVacinacao salvar(RegistroVacinacao registro) {
        return repository.save(registro);
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }

    public boolean existe(Long id) {
        return repository.existsById(id);
    }
}
