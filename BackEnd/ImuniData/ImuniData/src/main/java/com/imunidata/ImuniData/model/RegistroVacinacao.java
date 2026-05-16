package com.imunidata.ImuniData.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class RegistroVacinacao { 
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) 
    private Long id;

    private String municipio;
    private String estado;
    private String vacina;
    private String dose;
    private String quantidadeAplicada;
    private String dataRegistro;



}
