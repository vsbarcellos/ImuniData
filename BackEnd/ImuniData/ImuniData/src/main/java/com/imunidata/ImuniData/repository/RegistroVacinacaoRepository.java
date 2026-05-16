package com.imunidata.ImuniData.repository;

import com.imunidata.ImuniData.model.RegistroVacinacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface RegistroVacinacaoRepository extends JpaRepository<RegistroVacinacao,Long> {
    List<RegistroVacinacao> findByVacina(String vacina);
    List<RegistroVacinacao> findByEstado(String estado);
}
