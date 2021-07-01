// CONTABILIDADE
function calcular() {
  let salario = parseFloat(document.getElementById('salario').value)
  let fgts = calcular_fgts(salario);
  let ferias = calcular_ferias(salario);
  let auxrefeicao = parseFloat(document.getElementById('auxrefeicao').value);
  let auxalimentacao = parseFloat(document.getElementById('auxalimentacao').value);
  let planosaude = parseFloat(document.getElementById('planosaude').value);
  let outros = parseFloat(document.getElementById('outros').value);
  let umtercoferias = calcular_umtercoferias(salario);
  let decimoterceirosalario = calcular_decimoterceirosalario(salario);
  let fgtsferias = calcular_fgtsferias(salario);
  let fgtsumtercoferias = calcular_fgtsumtercoferias(salario);
  let fgtsdecimoterceirosalario = calcular_fgtsdecimoterceirosalario(salario);
  let avisoprevio = calcular_avisoprevio(salario);
  let fgtsavisoprevio = calcular_fgtsavisoprevio(salario);
  let multaavisoprevio = calcular_multaavisoprevio(salario);

  // VALIDA SE AS ENTRADAS SÃO NÚMERICAS E POSITIVAS:
    dict_validacao = {"Salario": salario,
    "Auxilio Refeição": auxrefeicao,
    "Auxilio Alimentação": auxalimentacao,
    "Plano de Saúde": planosaude,
    "Outros": outros,
  };


  // VALIDACAO DE ENTRADAS
  valida = validaEntradas(dict_validacao);
  
  if (valida !== 'Sucesso'){
    //alert(valida);
    document.getElementById("resultado").innerHTML = valida;
    return false;
  };      
   
  document.getElementById('fgts').value = 'FGTS Salário: ' + formata_moeda(fgts);
  document.getElementById('ferias').value = 'Férias 1/12: ' + formata_moeda(ferias);
  document.getElementById('umtercoferias').value = '1/3 Ferias 1/12: ' + formata_moeda(umtercoferias);
  document.getElementById('decimoterceirosalario').value = '13º Salário 1/12: ' + formata_moeda(decimoterceirosalario);
  document.getElementById('fgtsferias').value = 'FGTS Férias 1/12: ' + formata_moeda(fgtsferias);
  document.getElementById('fgtsumtercoferias').value = 'FGTS 1/3 Ferias 1/12: ' + formata_moeda(fgtsumtercoferias);
  document.getElementById('fgtsdecimoterceirosalario').value = 'FGTS 13º Sálario 1/12: ' + formata_moeda(fgtsdecimoterceirosalario);
  document.getElementById('avisoprevio').value = 'Aviso Prévio 1/12 (provisão): ' + formata_moeda(avisoprevio);
  document.getElementById('fgtsavisoprevio').value = 'FGTS Aviso Prévio 1/12 (provisão): ' + formata_moeda(fgtsavisoprevio);
  document.getElementById('multaavisoprevio').value = 'Multa Aviso Prévio 1/12 (provisão): ' + formata_moeda(multaavisoprevio);
  document.getElementById('resultado').innerHTML = `Custo adicional: ${formata_moeda(fgts + ferias + auxrefeicao + auxalimentacao + planosaude + outros + umtercoferias + decimoterceirosalario + fgtsferias + fgtsumtercoferias + fgtsdecimoterceirosalario + avisoprevio + fgtsavisoprevio + multaavisoprevio)}`;
  document.getElementById('custototal').innerHTML = `Custo Total: ${formata_moeda(salario + fgts + ferias + auxrefeicao + auxalimentacao + planosaude + outros + umtercoferias + decimoterceirosalario + fgtsferias + fgtsumtercoferias + fgtsdecimoterceirosalario + avisoprevio + fgtsavisoprevio + multaavisoprevio)}`;
  
}

function calcular_fgts(salario) {
  return salario * 0.08;
}
function calcular_ferias(salario) {
  return salario / 12.0;
}
function calcular_umtercoferias(salario) {
  return salario / 12.0 / 3.0;
}
function calcular_decimoterceirosalario(salario) {
  return salario / 12.0;
}
function calcular_fgtsferias(salario) {
  return salario * 0.08 / 12.0;
}
function calcular_fgtsumtercoferias(salario) {
  return salario * 0.08 / 12.0 / 3.0;
}
function calcular_fgtsdecimoterceirosalario(salario) {
  return salario * 0.08 / 12.0;
}
function calcular_avisoprevio(salario) {
  return salario / 12.0;
}
function calcular_fgtsavisoprevio(salario) {
  return salario * 0.08 / 12.0;
}
function calcular_multaavisoprevio(salario) {
  return salario * 0.05
}

function getValue(field) {
  let value = document.getElementById(field).value
  
  if (value === '') return 0.0;
  
  return parseFloat(value)
}

// CÁLCULOS TRABALHISTAS
function Calcula_Liquido() {
  let salario = parseFloat(document.getElementById('salario').value)
  let nro_dependentes = parseInt(document.getElementById('nro_dependentes').value)
  let vlr_conducao = parseFloat(document.getElementById('vlr_conducao').value)
  let qtd_conducao = parseInt(document.getElementById('qtd_conducao').value)
  let escala = parseInt(document.getElementById('escala').value)
  let valida = ''

  // VALIDA SE AS ENTRADAS SÃO NÚMERICAS E POSITIVAS:
  dict_validacao = {"Salario": salario,
                    "Dependentes": nro_dependentes,
                    "Valor da Conducao": vlr_conducao,
                    "Quantidade": qtd_conducao,
                    "Escala": escala,
                  };

  valida = validaEntradas(dict_validacao);
  if (valida !== 'Sucesso'){
    //alert(valida);
    document.getElementById("trata-erro").innerHTML = valida;
    return false;
  };                  

  let liquido = 0;
  let liquido_IRRF = 0;
  let desconto_vt = 0;

  desconto_vt = calculaVT(salario, vlr_conducao, qtd_conducao, escala);
  lista_inss = calculaInss(salario);
  lista_irrf = calculaIrrf(lista_inss[0], nro_dependentes);
  salario_liquido = salario - lista_inss[1] - lista_irrf[1] - desconto_vt; 
  // ** STRING DE RETORNO DA FUNÇÃO**
  var retorno = {
    "Bruto": formata_moeda(salario.toFixed(2)),
    "INSS": formata_moeda(lista_inss[1].toFixed(2)),
    "IRRF": formata_moeda(lista_irrf[1].toFixed(2)),
    "Vale Transporte": formata_moeda(desconto_vt.toFixed(2)),
    "Líquido": formata_moeda(salario_liquido.toFixed(2)),
  };
  ExibeResultado(retorno);
};

function calculaVT(salario, vlr_conducao, qtd_conducao, escala) {
  let desc_vale_transp = 0;
  // Calculo do VT
  if (escala == 0 || escala == undefined){
    console.log("Entrei no if");
    desc_vale_transp = 0;
  }
  else if (escala == 5) {
    console.log("Entrei no else 1");
    total_vt = (vlr_conducao * qtd_conducao) * 22;
    dsc_percentual = salario * 0.06;
    desc_vale_transp = dsc_percentual > total_vt? total_vt : dsc_percentual;
  }
  else if (escala == 6) {
    console.log("Entrei no else 2");
    total_vt = (vlr_conducao * qtd_conducao) * 26;
    dsc_percentual = salario * 0.06;
    desc_vale_transp = dsc_percentual > total_vt? total_vt : dsc_percentual;
  }
  else {
    console.log(`Entrei no else ${salario}, ${vlr_conducao}, ${qtd_conducao}, ${escala}`);
    total_vt = (vlr_conducao * qtd_conducao) * 15;
    dsc_percentual = salario * 0.06;
    desc_vale_transp = dsc_percentual > total_vt? total_vt : dsc_percentual;
  }
  return desc_vale_transp;
};

// Funções que são interdependentes.
// Calcula INSS
function calculaInss(salario) {
  // adicionar comentário com a memória de calculo do inss.
  let faixa_inicial = [0, 1100.01, 2203.49, 3305.23],
      faixa_final = [1100.00, 2203.48, 3305.22, 6433.57],
      aliquota = [0.075, 0.09, 0.12, 0.14];
  const TETO = 1286.71
  acumula_diferenca = 0, desconto_final = 0, percentual = 0;
  liquido = 0;
  for (let i = 0; i < 4; i++) {
    if (salario >= faixa_final[faixa_final.length - 1] && i === (faixa_final.length - 1)) {
        faixa_final[i] = salario;
    }
    else if (salario >= faixa_inicial[i] && salario <= faixa_final[i]) {
      faixa_final[i] = salario;
      acumula_diferenca += (faixa_final[i] - faixa_inicial[i]) * aliquota[i];
      percentual = aliquota[i] * 100;
      break;
    }
    acumula_diferenca += (faixa_final[i] - faixa_inicial[i]) * aliquota[i];
    percentual = aliquota[i] * 100;
  }
  desconto_final = acumula_diferenca;
  if (desconto_final >= TETO) {
    desconto_final = TETO;
  }
  liquido = salario - desconto_final;
  return [liquido, desconto_final, percentual];
};

function calculaIrrf(liquido, qtd_dependente) {
  const VALOR_POR_DEPENDENTE = 189.59;
  let valorADeduzir = qtd_dependente * VALOR_POR_DEPENDENTE ;
  let descontoIRRF = 0;
  let liquidoAposIRRF = 0;
  let aliquota = 0;
  let deducao = 0;
  let novo_liquido = 0;
  let desconto = 0;
  i = 0;
  tabela_irrf = [{
    "faixa": [1903.98, 2826.65, 3751.05, 4664.67, 4664.68],
    "aliquota": [0.00, 0.075, 0.15, 0.225, 0.275],
    "deducao": [0, 142.80, 354.80, 636.13, 869.36],
  }
];
  while (i < tabela_irrf[0].faixa.length) {
    if (liquido <= tabela_irrf[0].faixa[i]) {
      descontoIRRF = [tabela_irrf[0].aliquota[i], tabela_irrf[0].deducao[i]];
      break;
    }
    if (i == (tabela_irrf[0].faixa.length) - 1) {
      descontoIRRF = [tabela_irrf[0].aliquota[i], tabela_irrf[0].deducao[i]];
    };
    i++;
  }
    aliquota = descontoIRRF[0];
    deducao = descontoIRRF[1];
    desconto = (liquido * aliquota) - deducao - valorADeduzir;
    novo_liquido = liquido - desconto;
    return [novo_liquido, desconto, aliquota];
  };
  

// INVESTIMENTOS
function valorFuturo() {
  // vp = valor presente, i = taxa, n = periodo
  // calcula o valor futuro de uma aplicação única, postecipado.
  // Exemplo: Investimento de 5 mil reais com taxa de 0,85% ao mês
  let taxa_original = parseFloat(document.getElementById("taxa").value) 
  let valorpresente = parseFloat(document.getElementById("vp").value)
  let taxa = parseFloat(document.getElementById("taxa").value) / 100
  let periodo = parseFloat(document.getElementById("periodo").value)  // VF Postecipado

  // CÁLCULOS
  let vf = Math.floor(valorpresente * (Math.pow((1 + taxa), periodo)))
  
  // VALIDA SE AS ENTRADAS SÃO NÚMERICAS E POSITIVAS:
  dict_validacao = {
        "Valor Presente": valorpresente,
        "Taxa de Juros": taxa,
        "Período": periodo,
  };

  valida = validaEntradas(dict_validacao);
  // TESTE DE ENTRADA DE DADOS
  valida = validaEntradas(dict_validacao);
  if (valida !== 'Sucesso'){
    //alert(valida);
    document.getElementById("trata-erro").innerHTML = valida;
    return false;
  };                  

  // ** STRING DE RETORNO DA FUNÇÃO**
  var retorno = {
    "Valor Presente": formata_moeda(valorpresente.toFixed(2)),
    "Taxa de Juros": taxa_original.toFixed(2) + '%',
    "Período": periodo,
    "Valor Futuro": formata_moeda(vf.toFixed(2)),
  };
  ExibeResultado(retorno);
};

// UTILS
// Função da Amanda formata para moeda
function formata_moeda(valor) {
  return valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
};

// Cria HTML para exibir o resultado dos cálculos:
function ExibeResultado(dicionario) {
  var textoHTML = '';
  textoHTML = '<ul>';
  for (k in dicionario) {
    let v = dicionario[k];
    textoHTML += `<li>${k}: ${v}</li>`;
  };
  textoHTML += '</ul>';
  document.getElementById("titulo-calculo").innerHTML ='Resultado do Cálculo';
  document.getElementById("exibir-calc").innerHTML = textoHTML;
};

function validaEntradas(dicionario_entradas) {
  // Essa função recebe uma lista contendo todas as entradas para
  // validar se foram digitadas corretamente.
  var validacao = ``;
  for (k in dicionario_entradas) {
    let v = dicionario_entradas[k];
    var retorno = ``;
    if (isNaN(v)) {
      validacao = `Valor inválido para o Campo ${k} -> '${v}'`;
      txtRetornoHTML = `<div class="alert alert-danger alert-dismissible" role="alert" id="box-msg-erro" style="font-family:'Courier New', Courier, monospace">\n
                          <button type="button" class="close" data-dismiss="alert"><span>&times;</span></button>\n
                            ${validacao}\n
                        </div>`
      return txtRetornoHTML;
    }
    else if (v < 0) {
      validacao = `Erro valor inválido para o Campo ${k} -> '${v}'\nDigite um número maior que zero.`;
      txtRetornoHTML = `<div class="alert alert-danger alert-dismissible" role="alert" id="box-msg-erro">\n
                            <button type="button" class="close" data-dismiss="alert"><span>&times;</span></button>\n
                            ${validacao}\n
                        </div>`
      return txtRetornoHTML;
    }
  }
  validacao = `Sucesso`;
  return validacao;
};

