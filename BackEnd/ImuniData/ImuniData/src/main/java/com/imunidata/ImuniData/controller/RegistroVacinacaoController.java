package com.imunidata.ImuniData.controller;

import com.imunidata.ImuniData.model.RegistroVacinacao;
import com.imunidata.ImuniData.service.RegistroVacinacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/vacinacao")
@CrossOrigin(origins = "*")
public class RegistroVacinacaoController {

    @Autowired
    private RegistroVacinacaoService service;

    @GetMapping
    public List<RegistroVacinacao> listarTodos() {
        return service.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<RegistroVacinacao> buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());

    }

    @GetMapping("/filtro/vacina")
    public List<RegistroVacinacao> porVacina(@RequestParam String nome) {
        return service.buscarPorVacina(nome);
    }

    @GetMapping("/filtro/estado")
    public List<RegistroVacinacao> porEstado(@RequestParam String uf) {
        return service.buscarPorEstado(uf);
    }

    @PostMapping
    public ResponseEntity<RegistroVacinacao> criar(@RequestBody RegistroVacinacao registro) {
        return ResponseEntity.status(201).body(service.salvar(registro));
    }

    @PutMapping("/{id}")
    public ResponseEntity<RegistroVacinacao> atualizar(@PathVariable Long id, @RequestBody RegistroVacinacao registro) {
        return service.buscarPorId(id)
                .map(existente -> {
                    registro.setId(id);
                    return ResponseEntity.ok(service.salvar(registro));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
public ResponseEntity<Void> deletar(@PathVariable Long id) {
    if (!service.existe(id)) {
        return ResponseEntity.notFound().build();
    }
    service.deletar(id);
    return ResponseEntity.noContent().build();
}
}
