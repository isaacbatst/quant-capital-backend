
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.9.0
 * Query Engine version: ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5
 */
Prisma.prismaVersion = {
  client: "4.9.0",
  engine: "ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.Api_integracaoScalarFieldEnum = makeEnum({
  id: 'id',
  unit_id: 'unit_id',
  gatway: 'gatway',
  sandbox: 'sandbox',
  producao: 'producao',
  chave: 'chave',
  credencial: 'credencial',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.BancoScalarFieldEnum = makeEnum({
  id: 'id',
  num_banco: 'num_banco',
  nome_banco: 'nome_banco',
  unit_id: 'unit_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.BoletoScalarFieldEnum = makeEnum({
  id: 'id',
  dataVencimento: 'dataVencimento',
  valor: 'valor',
  multa: 'multa',
  juros: 'juros',
  numero: 'numero',
  numeroDocumento: 'numeroDocumento',
  carteira: 'carteira',
  conta_bancaria_id: 'conta_bancaria_id',
  agencia: 'agencia',
  convenio: 'convenio',
  conta: 'conta',
  instrucao1: 'instrucao1',
  instrucao2: 'instrucao2',
  instrucao3: 'instrucao3',
  instrucao4: 'instrucao4',
  cliente_id: 'cliente_id',
  conta_receber_id: 'conta_receber_id',
  cliente_conrato_id: 'cliente_conrato_id',
  unit_id: 'unit_id',
  num_parcela: 'num_parcela',
  remessa: 'remessa',
  cod_banco: 'cod_banco',
  aceite: 'aceite',
  especieDoc: 'especieDoc',
  codigoCliente: 'codigoCliente',
  codigo_cooperativa: 'codigo_cooperativa',
  variacaocarteira: 'variacaocarteira',
  cip: 'cip',
  campo_range: 'campo_range',
  contaDv: 'contaDv',
  posto: 'posto',
  byte: 'byte',
  dataDesconto: 'dataDesconto',
  dataDocumento: 'dataDocumento',
  dataProcessamento: 'dataProcessamento',
  desconto: 'desconto',
  jurosApos: 'jurosApos',
  diasProtesto: 'diasProtesto',
  ativo: 'ativo',
  ben_documento: 'ben_documento',
  ben_nome: 'ben_nome',
  ben_cep: 'ben_cep',
  ben_endereco: 'ben_endereco',
  ben_bairro: 'ben_bairro',
  ben_uf: 'ben_uf',
  ben_cidade: 'ben_cidade',
  pag_documento: 'pag_documento',
  pag_nome: 'pag_nome',
  pag_cep: 'pag_cep',
  pag_endereco: 'pag_endereco',
  pag_bairro: 'pag_bairro',
  pag_uf: 'pag_uf',
  pag_cidade: 'pag_cidade',
  path_pdf: 'path_pdf',
  cliente_contrato_id: 'cliente_contrato_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Boleto_apiScalarFieldEnum = makeEnum({
  id: 'id',
  unit_id: 'unit_id',
  user_id: 'user_id',
  vencimento: 'vencimento',
  valor: 'valor',
  valor_pago: 'valor_pago',
  valor_tarifa: 'valor_tarifa',
  valor_liquido: 'valor_liquido',
  data_pagamento: 'data_pagamento',
  data_credito: 'data_credito',
  juros: 'juros',
  multa: 'multa',
  desconto: 'desconto',
  cliente_id: 'cliente_id',
  nome_cliente: 'nome_cliente',
  cpf_cliente: 'cpf_cliente',
  endereco_cliente: 'endereco_cliente',
  numero_cliente: 'numero_cliente',
  complemento_cliente: 'complemento_cliente',
  bairro_cliente: 'bairro_cliente',
  cidade_cliente: 'cidade_cliente',
  estado_cliente: 'estado_cliente',
  cep_cliente: 'cep_cliente',
  email_cliente: 'email_cliente',
  telefone_cliente: 'telefone_cliente',
  texto: 'texto',
  grupo: 'grupo',
  pedido_numero: 'pedido_numero',
  juros_fixo: 'juros_fixo',
  multa_fixo: 'multa_fixo',
  diasdesconto1: 'diasdesconto1',
  desconto2: 'desconto2',
  diasdesconto2: 'diasdesconto2',
  desconto3: 'desconto3',
  diasdesconto3: 'diasdesconto3',
  nunca_atualizar_boleto: 'nunca_atualizar_boleto',
  instrucao_adicional: 'instrucao_adicional',
  especie_documento: 'especie_documento',
  status: 'status',
  msg: 'msg',
  nossonumero: 'nossonumero',
  id_unico: 'id_unico',
  banco_numero: 'banco_numero',
  token_facilitador: 'token_facilitador',
  credencial: 'credencial',
  linkBoleto: 'linkBoleto',
  linkGrupo: 'linkGrupo',
  linhaDigitavel: 'linhaDigitavel',
  registro_sistema_bancario: 'registro_sistema_bancario',
  registro_rejeicao_motivo: 'registro_rejeicao_motivo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Boleto_regraScalarFieldEnum = makeEnum({
  id: 'id',
  valor_juros: 'valor_juros',
  valor_multa: 'valor_multa',
  conta_bancaria_id: 'conta_bancaria_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Boleto_retornoScalarFieldEnum = makeEnum({
  id: 'id',
  banco_nome: 'banco_nome',
  carteira: 'carteira',
  nossoNumero: 'nossoNumero',
  numeroDocumento: 'numeroDocumento',
  numeroControle: 'numeroControle',
  ocorrencia: 'ocorrencia',
  ocorrenciaTipo: 'ocorrenciaTipo',
  ocorrenciaDescricao: 'ocorrenciaDescricao',
  dataOcorrencia: 'dataOcorrencia',
  dataVencimento: 'dataVencimento',
  dataCredito: 'dataCredito',
  valor: 'valor',
  valorTarifa: 'valorTarifa',
  valorIOF: 'valorIOF',
  valorAbatimento: 'valorAbatimento',
  valorDesconto: 'valorDesconto',
  valorRecebido: 'valorRecebido',
  valorMora: 'valorMora',
  valorMulta: 'valorMulta',
  error: 'error',
  trash: 'trash',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.CfopScalarFieldEnum = makeEnum({
  codigo: 'codigo',
  descricao: 'descricao'
});

exports.Prisma.ClienteScalarFieldEnum = makeEnum({
  id: 'id',
  tipo: 'tipo',
  cliente_grupo_id: 'cliente_grupo_id',
  razao_social: 'razao_social',
  nome_fantasia: 'nome_fantasia',
  cpf_cnpj: 'cpf_cnpj',
  rg_ie: 'rg_ie',
  im: 'im',
  nascimento: 'nascimento',
  sexo: 'sexo',
  indicador_ie: 'indicador_ie',
  cep: 'cep',
  logradouro: 'logradouro',
  numero: 'numero',
  bairro: 'bairro',
  complemento: 'complemento',
  cidade: 'cidade',
  uf: 'uf',
  codMuni: 'codMuni',
  site: 'site',
  fornecedor_id: 'fornecedor_id',
  comissao_parceiro: 'comissao_parceiro',
  vendedor_user_id: 'vendedor_user_id',
  comissao_vendedor: 'comissao_vendedor',
  vendedor_externo_user_id: 'vendedor_externo_user_id',
  comissao_vendedor_externo: 'comissao_vendedor_externo',
  unit_id: 'unit_id',
  user_id: 'user_id',
  tabela_precos_id: 'tabela_precos_id',
  relatorio_customizado_id: 'relatorio_customizado_id',
  representante_nome: 'representante_nome',
  representante_nacionalidade: 'representante_nacionalidade',
  representante_naturalidade: 'representante_naturalidade',
  representante_profissao: 'representante_profissao',
  representante_estado_civil: 'representante_estado_civil',
  representante_rg: 'representante_rg',
  representante_cpf: 'representante_cpf',
  representante_cep: 'representante_cep',
  representante_logradouro: 'representante_logradouro',
  representante_bairro: 'representante_bairro',
  representante_numero: 'representante_numero',
  representante_complemento: 'representante_complemento',
  representante_cidade: 'representante_cidade',
  representante_uf: 'representante_uf',
  lat: 'lat',
  lon: 'lon',
  prazo_atendimento: 'prazo_atendimento',
  data_cobranca: 'data_cobranca',
  juridico: 'juridico',
  ativo: 'ativo',
  gera_nfse: 'gera_nfse',
  enquadramento_tributario: 'enquadramento_tributario',
  cliente_origem_id: 'cliente_origem_id',
  estado_civil: 'estado_civil',
  orgao_emissor: 'orgao_emissor',
  beneficiario_mutuante: 'beneficiario_mutuante',
  cpf_beneficiario_mutuante: 'cpf_beneficiario_mutuante',
  codigo_parceiro: 'codigo_parceiro',
  telefone_principal: 'telefone_principal',
  email_principal: 'email_principal',
  profissao_id: 'profissao_id',
  filhos: 'filhos',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Cliente_contratoScalarFieldEnum = makeEnum({
  id: 'id',
  data_contrato: 'data_contrato',
  nome: 'nome',
  cliente_id: 'cliente_id',
  tipo_endereco_id: 'tipo_endereco_id',
  relatorio_customizado_id: 'relatorio_customizado_id',
  tipo_forma_pgto_id: 'tipo_forma_pgto_id',
  tipo_pgto_id: 'tipo_pgto_id',
  plano_id: 'plano_id',
  conta_bancaria_id: 'conta_bancaria_id',
  conta_bancaria_entrada_id: 'conta_bancaria_entrada_id',
  unit_id: 'unit_id',
  user_id: 'user_id',
  inicio_vigencia: 'inicio_vigencia',
  fim_vigencia: 'fim_vigencia',
  data_vencimento_unico: 'data_vencimento_unico',
  entrada: 'entrada',
  desconto: 'desconto',
  total: 'total',
  parcela: 'parcela',
  qtd_parcelas: 'qtd_parcelas',
  valor_parcelado: 'valor_parcelado',
  vencimento_primeira_parcela: 'vencimento_primeira_parcela',
  valor: 'valor',
  status: 'status',
  carne_path_pdf: 'carne_path_pdf',
  data_base: 'data_base',
  prazo: 'prazo',
  percentual_de_juros: 'percentual_de_juros',
  taxa_do_contrato: 'taxa_do_contrato',
  mutuario_id: 'mutuario_id',
  tipo: 'tipo',
  arquivo: 'arquivo',
  cliente_contrato_status_id: 'cliente_contrato_status_id',
  status_relatorio_customizado_id: 'status_relatorio_customizado_id',
  data_procedimento_status: 'data_procedimento_status',
  fornecedor_id: 'fornecedor_id',
  observacao: 'observacao',
  situacao_id: 'situacao_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Cliente_contrato_aditivoScalarFieldEnum = makeEnum({
  id: 'id',
  mutuario_id: 'mutuario_id',
  cliente_contrato_id: 'cliente_contrato_id',
  relatorio_customizado_id: 'relatorio_customizado_id',
  nome: 'nome',
  aditivo: 'aditivo',
  valor_anterior: 'valor_anterior',
  valor_reajustado: 'valor_reajustado',
  valor_saldo: 'valor_saldo',
  data_reajuste: 'data_reajuste',
  data_vencimento_unico: 'data_vencimento_unico',
  inicio_vigencia: 'inicio_vigencia',
  fim_vigencia_anterior: 'fim_vigencia_anterior',
  fim_vigencia: 'fim_vigencia',
  taxa_do_contrato: 'taxa_do_contrato',
  percentual_de_juros: 'percentual_de_juros',
  arquivo: 'arquivo',
  prazo: 'prazo',
  data_base: 'data_base',
  observacao: 'observacao',
  updated_at: 'updated_at',
  created_at: 'created_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Cliente_contrato_aprovacao_financeiroScalarFieldEnum = makeEnum({
  id: 'id',
  data_vencimento: 'data_vencimento',
  aprovado: 'aprovado',
  data_aprovado: 'data_aprovado',
  cliente_contrato_id: 'cliente_contrato_id',
  cliente_contrato_aditivo_id: 'cliente_contrato_aditivo_id',
  status: 'status',
  valor: 'valor',
  relatorio_customizado_id: 'relatorio_customizado_id',
  fornecedor_id: 'fornecedor_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Cliente_contrato_historicoScalarFieldEnum = makeEnum({
  id: 'id',
  cliente_contrato_id: 'cliente_contrato_id',
  data_contrato: 'data_contrato',
  nome: 'nome',
  cliente_id: 'cliente_id',
  tipo_endereco_id: 'tipo_endereco_id',
  relatorio_customizado_id: 'relatorio_customizado_id',
  tipo_forma_pgto_id: 'tipo_forma_pgto_id',
  tipo_pgto_id: 'tipo_pgto_id',
  plano_id: 'plano_id',
  conta_bancaria_id: 'conta_bancaria_id',
  conta_bancaria_entrada_id: 'conta_bancaria_entrada_id',
  unit_id: 'unit_id',
  user_id: 'user_id',
  inicio_vigencia: 'inicio_vigencia',
  fim_vigencia: 'fim_vigencia',
  entrada: 'entrada',
  desconto: 'desconto',
  total: 'total',
  parcela: 'parcela',
  qtd_parcelas: 'qtd_parcelas',
  valor_parcelado: 'valor_parcelado',
  vencimento_primeira_parcela: 'vencimento_primeira_parcela',
  valor: 'valor',
  status: 'status',
  carne_path_pdf: 'carne_path_pdf',
  data_base: 'data_base',
  prazo: 'prazo',
  percentual_de_juros: 'percentual_de_juros',
  taxa_do_contrato: 'taxa_do_contrato',
  mutuario_id: 'mutuario_id',
  tipo: 'tipo',
  arquivo: 'arquivo',
  cliente_contrato_status_id: 'cliente_contrato_status_id',
  status_relatorio_customizado_id: 'status_relatorio_customizado_id',
  data_procedimento_status: 'data_procedimento_status',
  fornecedor_id: 'fornecedor_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Cliente_contrato_statusScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Cliente_enderecoScalarFieldEnum = makeEnum({
  id: 'id',
  cliente_id: 'cliente_id',
  tipo_endereco_id: 'tipo_endereco_id',
  cep: 'cep',
  logradouro: 'logradouro',
  numero: 'numero',
  complemento: 'complemento',
  bairro: 'bairro',
  cidade: 'cidade',
  uf: 'uf',
  codMuni: 'codMuni',
  lat: 'lat',
  lon: 'lon',
  horario_permitido: 'horario_permitido',
  regiao: 'regiao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  ponto_referencia: 'ponto_referencia'
});

exports.Prisma.Cliente_equipamentoScalarFieldEnum = makeEnum({
  id: 'id',
  cliente_id: 'cliente_id',
  cliente_endereco_id: 'cliente_endereco_id',
  pmoc_tipo_atividade_id: 'pmoc_tipo_atividade_id',
  ocupantes_fixos: 'ocupantes_fixos',
  ocupantes_flutuantes: 'ocupantes_flutuantes',
  pmoc_ambiente_id: 'pmoc_ambiente_id',
  area_climatizada: 'area_climatizada',
  carga_termica: 'carga_termica',
  identificacao_tag: 'identificacao_tag',
  pmoc_tipo_equipamento_id: 'pmoc_tipo_equipamento_id',
  produto_fabricante_id: 'produto_fabricante_id',
  capacidade: 'capacidade',
  modelo_evaporador: 'modelo_evaporador',
  n_serie_evaporador: 'n_serie_evaporador',
  modelo_condensador: 'modelo_condensador',
  n_serie_condensador: 'n_serie_condensador',
  pmoc_tensao_id: 'pmoc_tensao_id',
  andar: 'andar',
  n_contrato: 'n_contrato',
  patrimonio: 'patrimonio',
  fluido_refrigerante_id: 'fluido_refrigerante_id',
  aquisicao: 'aquisicao',
  valor_aquisicao: 'valor_aquisicao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  tombo_evaporador: 'tombo_evaporador',
  tombo_condensador: 'tombo_condensador'
});

exports.Prisma.Cliente_grupoScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Codigo_servicoScalarFieldEnum = makeEnum({
  codigo: 'codigo',
  descricao: 'descricao'
});

exports.Prisma.Comissao_fornecedorScalarFieldEnum = makeEnum({
  id: 'id',
  data_faturamento: 'data_faturamento',
  valor_faturamento: 'valor_faturamento',
  taxa_comissao: 'taxa_comissao',
  valor_comissao: 'valor_comissao',
  descricao: 'descricao',
  pago: 'pago',
  tipo: 'tipo',
  unit_id: 'unit_id',
  fornecedor_id: 'fornecedor_id',
  cliente_id: 'cliente_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Comissao_tabelaScalarFieldEnum = makeEnum({
  id: 'id',
  descricao: 'descricao',
  forma_comissao: 'forma_comissao',
  valor_comissao: 'valor_comissao',
  observacao: 'observacao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Comissao_userScalarFieldEnum = makeEnum({
  id: 'id',
  data_faturamento: 'data_faturamento',
  valor_faturamento: 'valor_faturamento',
  taxa_comissao: 'taxa_comissao',
  valor_comissao: 'valor_comissao',
  descricao: 'descricao',
  pago: 'pago',
  tipo: 'tipo',
  cliente_id: 'cliente_id',
  unit_id: 'unit_id',
  user_id: 'user_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Compras_cotacaoScalarFieldEnum = makeEnum({
  id: 'id',
  fornecedor_id: 'fornecedor_id',
  compras_solicitacao_id: 'compras_solicitacao_id',
  email: 'email',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Compras_demandaScalarFieldEnum = makeEnum({
  id: 'id',
  compras_solicitacao_id: 'compras_solicitacao_id',
  compras_projeto_id: 'compras_projeto_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Compras_projetoScalarFieldEnum = makeEnum({
  id: 'id',
  nome_projeto: 'nome_projeto',
  contrato: 'contrato',
  data_inicio: 'data_inicio',
  data_fim: 'data_fim',
  cliente_id: 'cliente_id',
  cidade: 'cidade',
  uf: 'uf',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Compras_solicitacaoScalarFieldEnum = makeEnum({
  id: 'id',
  unit_id: 'unit_id',
  nivel_prioridade: 'nivel_prioridade',
  data_necessidade: 'data_necessidade',
  data_solicitacao: 'data_solicitacao',
  data_validade: 'data_validade',
  user_id: 'user_id',
  tipo_forma_pgto_id: 'tipo_forma_pgto_id',
  tipo_pgto_id: 'tipo_pgto_id',
  fornecedor_id: 'fornecedor_id',
  observacao: 'observacao',
  observacao_requisicao: 'observacao_requisicao',
  total_itens: 'total_itens',
  total_desconto: 'total_desconto',
  total_pedido: 'total_pedido',
  compras_aprovador_id: 'compras_aprovador_id',
  status_pedido: 'status_pedido',
  data_aprovacao: 'data_aprovacao',
  data_aprovacao_requisicao: 'data_aprovacao_requisicao',
  aprovador_requisicao: 'aprovador_requisicao',
  status_requisicao: 'status_requisicao',
  compras_projeto_id: 'compras_projeto_id',
  almoxarife: 'almoxarife',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Compras_solicitacao_itenScalarFieldEnum = makeEnum({
  id: 'id',
  compras_solicitacao_id: 'compras_solicitacao_id',
  sequencia: 'sequencia',
  produto_id: 'produto_id',
  preco: 'preco',
  und: 'und',
  quantidade_solicitado: 'quantidade_solicitado',
  quantidade: 'quantidade',
  desconto: 'desconto',
  total_item: 'total_item',
  total: 'total',
  observacao: 'observacao',
  fornecedor_id: 'fornecedor_id',
  atende: 'atende',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Compras_statusScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Conta_bancariaScalarFieldEnum = makeEnum({
  id: 'id',
  cod_banco: 'cod_banco',
  agencia: 'agencia',
  agencia_dv: 'agencia_dv',
  conta: 'conta',
  conta_dv: 'conta_dv',
  tipo: 'tipo',
  cep: 'cep',
  logradouro: 'logradouro',
  numero: 'numero',
  bairro: 'bairro',
  complemento: 'complemento',
  cidade: 'cidade',
  uf: 'uf',
  codMuni: 'codMuni',
  tel_gerente: 'tel_gerente',
  tel_banco: 'tel_banco',
  gerente: 'gerente',
  data_abaertura: 'data_abaertura',
  banco_id: 'banco_id',
  aceite: 'aceite',
  especieDoc: 'especieDoc',
  carteira: 'carteira',
  convenio: 'convenio',
  codigoCliente: 'codigoCliente',
  instrucoes1: 'instrucoes1',
  instrucoes2: 'instrucoes2',
  instrucoes3: 'instrucoes3',
  instrucoes4: 'instrucoes4',
  unit_id: 'unit_id',
  codigo_cooperativa: 'codigo_cooperativa',
  tipo_remessa: 'tipo_remessa',
  variacaoCarteira: 'variacaoCarteira',
  cip: 'cip',
  campo_range: 'campo_range',
  contaDv: 'contaDv',
  posto: 'posto',
  byte: 'byte',
  beneficiario: 'beneficiario',
  ultimo_nossonumero: 'ultimo_nossonumero',
  ultima_remessa: 'ultima_remessa',
  representante: 'representante',
  conta_moeda_id: 'conta_moeda_id',
  pix: 'pix',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Conta_moedaScalarFieldEnum = makeEnum({
  id: 'id',
  moeda: 'moeda',
  simbolo: 'simbolo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Conta_pagarScalarFieldEnum = makeEnum({
  id: 'id',
  data_conta: 'data_conta',
  descricao: 'descricao',
  documento: 'documento',
  previsao: 'previsao',
  data_vencimento: 'data_vencimento',
  multa: 'multa',
  juros: 'juros',
  taxas: 'taxas',
  valor: 'valor',
  desconto: 'desconto',
  portador: 'portador',
  observacao: 'observacao',
  baixa: 'baixa',
  data_baixa: 'data_baixa',
  valor_pago: 'valor_pago',
  valor_parcial: 'valor_parcial',
  valor_real: 'valor_real',
  replica: 'replica',
  parcelas: 'parcelas',
  nparcelas: 'nparcelas',
  intervalo: 'intervalo',
  responsavel: 'responsavel',
  unit_id: 'unit_id',
  user_id: 'user_id',
  tipo_pgto_id: 'tipo_pgto_id',
  tipo_forma_pgto_id: 'tipo_forma_pgto_id',
  fornecedor_id: 'fornecedor_id',
  pc_despesa_id: 'pc_despesa_id',
  pc_despesa_nome: 'pc_despesa_nome',
  departamento_id: 'departamento_id',
  conta_bancaria_id: 'conta_bancaria_id',
  split: 'split',
  relatorio_customizado_id: 'relatorio_customizado_id',
  compras_projeto_id: 'compras_projeto_id',
  solicitacao_financeiro_id: 'solicitacao_financeiro_id',
  arquivo: 'arquivo',
  cliente_contrato_id: 'cliente_contrato_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Conta_pagar_arquivoScalarFieldEnum = makeEnum({
  id: 'id',
  conta_pagar_id: 'conta_pagar_id',
  arquivo: 'arquivo'
});

exports.Prisma.Conta_receberScalarFieldEnum = makeEnum({
  id: 'id',
  data_conta: 'data_conta',
  descricao: 'descricao',
  documento: 'documento',
  data_vencimento: 'data_vencimento',
  data_pagamento: 'data_pagamento',
  previsao: 'previsao',
  multa: 'multa',
  juros: 'juros',
  taxas: 'taxas',
  valor: 'valor',
  desconto: 'desconto',
  portador: 'portador',
  observacao: 'observacao',
  baixa: 'baixa',
  data_baixa: 'data_baixa',
  valor_pago: 'valor_pago',
  valor_parcial: 'valor_parcial',
  valor_real: 'valor_real',
  tipo_forma_pgto_id: 'tipo_forma_pgto_id',
  replica: 'replica',
  parcelas: 'parcelas',
  nparcelas: 'nparcelas',
  intervalo: 'intervalo',
  responsavel: 'responsavel',
  boleto_status: 'boleto_status',
  boleto_emitido: 'boleto_emitido',
  unit_id: 'unit_id',
  user_id: 'user_id',
  boleto_id: 'boleto_id',
  cliente_id: 'cliente_id',
  cliente_contrato_id: 'cliente_contrato_id',
  tipo_pgto_id: 'tipo_pgto_id',
  pc_receita_id: 'pc_receita_id',
  pc_receita_nome: 'pc_receita_nome',
  conta_bancaria_id: 'conta_bancaria_id',
  split: 'split',
  boleto_account_id: 'boleto_account_id',
  gerar_boleto: 'gerar_boleto',
  nfse: 'nfse',
  gera_nfse: 'gera_nfse',
  relatorio_customizado_id: 'relatorio_customizado_id',
  recibo: 'recibo',
  juridico: 'juridico',
  pedido_numero: 'pedido_numero',
  compras_projeto_id: 'compras_projeto_id',
  fornecedor_id: 'fornecedor_id',
  arquivo: 'arquivo',
  departamento_id: 'departamento_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Conta_receber_arquivoScalarFieldEnum = makeEnum({
  id: 'id',
  conta_receber_id: 'conta_receber_id',
  arquivo: 'arquivo'
});

exports.Prisma.DepartamentoScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  unit_id: 'unit_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.EmailScalarFieldEnum = makeEnum({
  id: 'id',
  assunto: 'assunto',
  corpo: 'corpo',
  destinatario: 'destinatario',
  email_ja_enviado: 'email_ja_enviado',
  data_para_envio: 'data_para_envio',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Email_aenviarScalarFieldEnum = makeEnum({
  id: 'id',
  email_id: 'email_id',
  email_enviar: 'email_enviar'
});

exports.Prisma.Emails_clienteScalarFieldEnum = makeEnum({
  id: 'id',
  responsavel: 'responsavel',
  email: 'email',
  cliente_id: 'cliente_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Emails_fornecedorScalarFieldEnum = makeEnum({
  id: 'id',
  responsavel: 'responsavel',
  email: 'email',
  fornecedor_id: 'fornecedor_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Emails_unidadeScalarFieldEnum = makeEnum({
  id: 'id',
  responsavel: 'responsavel',
  email: 'email',
  unidades_id: 'unidades_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.EstoqueScalarFieldEnum = makeEnum({
  id: 'id',
  unit_id: 'unit_id',
  produto_id: 'produto_id',
  local: 'local',
  saldo: 'saldo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Estoque_consumoScalarFieldEnum = makeEnum({
  id: 'id',
  unit_id: 'unit_id',
  produto_id: 'produto_id',
  local: 'local',
  saldo: 'saldo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Estoque_control_imobilizadoScalarFieldEnum = makeEnum({
  id: 'id',
  unit_id: 'unit_id',
  produto_id: 'produto_id',
  local: 'local',
  saldo: 'saldo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Estoque_controlmov_imobilizadoScalarFieldEnum = makeEnum({
  id: 'id',
  unit_id: 'unit_id',
  produto_id: 'produto_id',
  local: 'local',
  alocado: 'alocado',
  user_id: 'user_id',
  estado: 'estado',
  validade_mes: 'validade_mes',
  data_avaliacao: 'data_avaliacao',
  valor_justo: 'valor_justo',
  emplacamento: 'emplacamento',
  tipo: 'tipo',
  quantidade: 'quantidade',
  saldo: 'saldo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Estoque_devolucaoScalarFieldEnum = makeEnum({
  id: 'id',
  data_devolucao: 'data_devolucao',
  hora_devolucao: 'hora_devolucao',
  responsavel_id: 'responsavel_id',
  user_id: 'user_id',
  unit_id: 'unit_id',
  observacao: 'observacao',
  baixa: 'baixa',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Estoque_devolucao_itensScalarFieldEnum = makeEnum({
  id: 'id',
  estoque_devolucao_id: 'estoque_devolucao_id',
  produto_id: 'produto_id',
  produto_tipo: 'produto_tipo',
  quantidade: 'quantidade',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Estoque_imobilizadoScalarFieldEnum = makeEnum({
  id: 'id',
  unit_id: 'unit_id',
  produto_id: 'produto_id',
  local: 'local',
  saldo: 'saldo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Estoque_insumosScalarFieldEnum = makeEnum({
  id: 'id',
  data_lancamento: 'data_lancamento',
  hora: 'hora',
  responsavel: 'responsavel',
  emitente: 'emitente',
  almoxerifado: 'almoxerifado',
  transportador: 'transportador',
  user_id: 'user_id',
  unit_id: 'unit_id',
  observacao: 'observacao',
  baixa: 'baixa',
  cliente_id: 'cliente_id',
  compras_projeto_id: 'compras_projeto_id',
  total: 'total',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Estoque_insumos_itensScalarFieldEnum = makeEnum({
  id: 'id',
  estoque_insumos_id: 'estoque_insumos_id',
  produto_id: 'produto_id',
  estoque: 'estoque',
  nfe_entrada_id: 'nfe_entrada_id',
  und: 'und',
  quantidade: 'quantidade',
  preco: 'preco',
  total_item: 'total_item',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Estoque_loteScalarFieldEnum = makeEnum({
  id: 'id',
  unit_id: 'unit_id',
  produto_id: 'produto_id',
  fornecedor_id: 'fornecedor_id',
  local: 'local',
  quantidade: 'quantidade',
  saldo: 'saldo',
  lote: 'lote',
  vencimento: 'vencimento',
  tipo: 'tipo',
  valor: 'valor',
  numero_nfe: 'numero_nfe',
  data_nfe: 'data_nfe',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Estoque_movelScalarFieldEnum = makeEnum({
  id: 'id',
  unit_id: 'unit_id',
  produto_id: 'produto_id',
  local: 'local',
  saldo: 'saldo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Estoque_requisicaoScalarFieldEnum = makeEnum({
  id: 'id',
  data_requisicao: 'data_requisicao',
  hora_requisicao: 'hora_requisicao',
  responsavel_id: 'responsavel_id',
  user_id: 'user_id',
  unit_id: 'unit_id',
  observacao: 'observacao',
  baixa: 'baixa',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Estoque_requisicao_itensScalarFieldEnum = makeEnum({
  id: 'id',
  estoque_requisicao_id: 'estoque_requisicao_id',
  produto_id: 'produto_id',
  produto_tipo: 'produto_tipo',
  quantidade: 'quantidade',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Estoque_tipoScalarFieldEnum = makeEnum({
  id: 'id',
  tipo: 'tipo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Estoque_transferencia_imobilizadoScalarFieldEnum = makeEnum({
  id: 'id',
  unit_id: 'unit_id',
  local_origem: 'local_origem',
  local_destino: 'local_destino',
  user_id: 'user_id',
  baixa: 'baixa',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Estoque_transferencia_imobilizado_itemScalarFieldEnum = makeEnum({
  id: 'id',
  estoque_transferencia_imobilizado_id: 'estoque_transferencia_imobilizado_id',
  produto_id: 'produto_id',
  estado: 'estado',
  data_avaliacao: 'data_avaliacao',
  valor_justo: 'valor_justo',
  emplacamento: 'emplacamento',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.EstoquemovScalarFieldEnum = makeEnum({
  id: 'id',
  unit_id: 'unit_id',
  produto_id: 'produto_id',
  local: 'local',
  tipo: 'tipo',
  quantidade: 'quantidade',
  saldo: 'saldo',
  valor: 'valor',
  referencia: 'referencia',
  controla_lote: 'controla_lote',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Estoquemov_consumoScalarFieldEnum = makeEnum({
  id: 'id',
  unit_id: 'unit_id',
  produto_id: 'produto_id',
  local: 'local',
  tipo: 'tipo',
  quantidade: 'quantidade',
  saldo: 'saldo',
  valor: 'valor',
  referencia: 'referencia',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Estoquemov_imobilizadoScalarFieldEnum = makeEnum({
  id: 'id',
  unit_id: 'unit_id',
  produto_id: 'produto_id',
  local: 'local',
  tipo: 'tipo',
  quantidade: 'quantidade',
  saldo: 'saldo',
  valor: 'valor',
  referencia: 'referencia',
  controla_lote: 'controla_lote',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Estoquemov_loteScalarFieldEnum = makeEnum({
  id: 'id',
  unit_id: 'unit_id',
  produto_id: 'produto_id',
  estoquemov_id: 'estoquemov_id',
  local: 'local',
  lote: 'lote',
  quantidade: 'quantidade',
  saldo: 'saldo',
  vencimento: 'vencimento',
  tipo: 'tipo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Estoquemov_movelScalarFieldEnum = makeEnum({
  id: 'id',
  unit_id: 'unit_id',
  produto_id: 'produto_id',
  local: 'local',
  tipo: 'tipo',
  quantidade: 'quantidade',
  saldo: 'saldo',
  valor: 'valor',
  referencia: 'referencia',
  controla_lote: 'controla_lote',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.FornecedorScalarFieldEnum = makeEnum({
  id: 'id',
  nome_fantasia: 'nome_fantasia',
  razao_social: 'razao_social',
  insc_estadual: 'insc_estadual',
  tipo: 'tipo',
  cpf_cnpj: 'cpf_cnpj',
  cep: 'cep',
  logradouro: 'logradouro',
  numero: 'numero',
  bairro: 'bairro',
  complemento: 'complemento',
  cidade: 'cidade',
  uf: 'uf',
  codMuni: 'codMuni',
  site: 'site',
  parceria: 'parceria',
  unit_id: 'unit_id',
  user_id: 'user_id',
  comissao_tabela_id: 'comissao_tabela_id',
  banco_nome: 'banco_nome',
  banco_representante: 'banco_representante',
  banco_agencia: 'banco_agencia',
  banco_conta: 'banco_conta',
  banco_pix: 'banco_pix',
  rg: 'rg',
  estado_civil: 'estado_civil',
  codigo_parceiro: 'codigo_parceiro',
  telefone_principal: 'telefone_principal',
  email_principal: 'email_principal',
  orgao_emissor: 'orgao_emissor',
  beneficiario_mutuante: 'beneficiario_mutuante',
  cpf_beneficiario_mutuante: 'cpf_beneficiario_mutuante',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Historico_os_servicoScalarFieldEnum = makeEnum({
  id: 'id',
  system_user_id: 'system_user_id',
  os_id: 'os_id',
  os_servico_id: 'os_servico_id',
  tecnico_id: 'tecnico_id',
  situacao_id: 'situacao_id',
  observacao: 'observacao',
  data_inicio: 'data_inicio',
  data_fim: 'data_fim',
  created_at: 'created_at',
  diagnostico_atribuido: 'diagnostico_atribuido'
});

exports.Prisma.Lancamento_bancarioScalarFieldEnum = makeEnum({
  id: 'id',
  conta_bancaria_id: 'conta_bancaria_id',
  data_lancamento: 'data_lancamento',
  tipo: 'tipo',
  historico: 'historico',
  status: 'status',
  valor: 'valor',
  pc_receita_id: 'pc_receita_id',
  pc_despesa_id: 'pc_despesa_id',
  unit_id: 'unit_id',
  user_id: 'user_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Movimentacao_bancariaScalarFieldEnum = makeEnum({
  id: 'id',
  valor_movimentacao: 'valor_movimentacao',
  data_lancamento: 'data_lancamento',
  data_vencimento: 'data_vencimento',
  data_baixa: 'data_baixa',
  status: 'status',
  historico: 'historico',
  baixa: 'baixa',
  tipo: 'tipo',
  documento: 'documento',
  unit_id: 'unit_id',
  cliente_id: 'cliente_id',
  fornecedor_id: 'fornecedor_id',
  pc_receita_id: 'pc_receita_id',
  pc_receita_nome: 'pc_receita_nome',
  pc_despesa_id: 'pc_despesa_id',
  pc_despesa_nome: 'pc_despesa_nome',
  conta_pagar_id: 'conta_pagar_id',
  conta_receber_id: 'conta_receber_id',
  conta_bancaria_id: 'conta_bancaria_id',
  lancamento_bancario_id: 'lancamento_bancario_id',
  transferencia_bancaria_id: 'transferencia_bancaria_id',
  departamento_id: 'departamento_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.MutuarioScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  cpf: 'cpf',
  rg: 'rg',
  orgao_emissor: 'orgao_emissor',
  cep: 'cep',
  logradouro: 'logradouro',
  numero: 'numero',
  complemento: 'complemento',
  bairro: 'bairro',
  cidade: 'cidade',
  uf: 'uf',
  codMuni: 'codMuni',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nf_direcionadorScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  consumidor: 'consumidor',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nf_direcionador_cfopScalarFieldEnum = makeEnum({
  id: 'id',
  tributo_id: 'tributo_id',
  direcionador_id: 'direcionador_id',
  cfop_interno: 'cfop_interno',
  cfop_externo: 'cfop_externo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nf_tributacaoScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nf_tributacao_faixaScalarFieldEnum = makeEnum({
  id: 'id',
  nfe_operacoes_id: 'nfe_operacoes_id',
  tributacao_id: 'tributacao_id',
  tributo_id: 'tributo_id',
  origem: 'origem',
  destino: 'destino',
  tipo_movimento: 'tipo_movimento',
  tipo_cliente: 'tipo_cliente',
  enquadramento_tributario_cliente: 'enquadramento_tributario_cliente',
  cst: 'cst',
  cod_enq: 'cod_enq',
  percentual_base_calculo: 'percentual_base_calculo',
  percentual_aliquota: 'percentual_aliquota',
  percentual_mva: 'percentual_mva',
  percentual_base_calculo_st: 'percentual_base_calculo_st',
  percentual_aliquota_st: 'percentual_aliquota_st',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nf_tributacao_impostoScalarFieldEnum = makeEnum({
  id: 'id',
  nfe_id: 'nfe_id',
  nfe_itens_id: 'nfe_itens_id',
  tributo_id: 'tributo_id',
  cfop: 'cfop',
  cst: 'cst',
  cod_enq: 'cod_enq',
  valor_base_calculo: 'valor_base_calculo',
  percentual_aliquota: 'percentual_aliquota',
  valor_imposto: 'valor_imposto',
  percentual_reducao_base_calculo: 'percentual_reducao_base_calculo',
  percentual_mva: 'percentual_mva',
  valor_base_calculo_st: 'valor_base_calculo_st',
  percentual_aliquota_st: 'percentual_aliquota_st',
  valor_imposto_st: 'valor_imposto_st',
  valor_imposto_operacao: 'valor_imposto_operacao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nf_tributoScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.NfeScalarFieldEnum = makeEnum({
  id: 'id',
  unit_id: 'unit_id',
  chave: 'chave',
  idDest: 'idDest',
  indPres: 'indPres',
  indFinal: 'indFinal',
  ide_tpNF: 'ide_tpNF',
  ide_cuf: 'ide_cuf',
  ide_cNF: 'ide_cNF',
  direcionador_id: 'direcionador_id',
  nfe_regra_id: 'nfe_regra_id',
  nfe_operacoes_id: 'nfe_operacoes_id',
  ide_natOp: 'ide_natOp',
  ide_indPag: 'ide_indPag',
  ide_mod: 'ide_mod',
  ide_serie: 'ide_serie',
  ide_nNF: 'ide_nNF',
  ide_dEmi: 'ide_dEmi',
  ide_SaiEnt: 'ide_SaiEnt',
  ide_cMunFG: 'ide_cMunFG',
  ide_tp_Imp: 'ide_tp_Imp',
  ide_tpEmis: 'ide_tpEmis',
  ide_cDV: 'ide_cDV',
  ide_tpAmb: 'ide_tpAmb',
  ide_finNFe: 'ide_finNFe',
  ide_procEmi: 'ide_procEmi',
  ide_verProc: 'ide_verProc',
  emit_cnpj_cpf: 'emit_cnpj_cpf',
  emit_xNome: 'emit_xNome',
  emit_xFant: 'emit_xFant',
  emit_xLgr: 'emit_xLgr',
  emit_nro: 'emit_nro',
  emit_xCpl: 'emit_xCpl',
  emit_xBairro: 'emit_xBairro',
  emit_cMun: 'emit_cMun',
  emit_xMun: 'emit_xMun',
  emit_UF: 'emit_UF',
  emit_CEP: 'emit_CEP',
  emit_cPais: 'emit_cPais',
  emit_xPais: 'emit_xPais',
  emit_fone: 'emit_fone',
  emit_IE: 'emit_IE',
  emit_IEST: 'emit_IEST',
  emit_IM: 'emit_IM',
  emit_CNAE: 'emit_CNAE',
  emit_CRT: 'emit_CRT',
  indIEDest: 'indIEDest',
  dest_cnpj_cpf: 'dest_cnpj_cpf',
  dest_xNome: 'dest_xNome',
  dest_xLgr: 'dest_xLgr',
  dest_nro: 'dest_nro',
  dest_xCpl: 'dest_xCpl',
  dest_xBairro: 'dest_xBairro',
  dest_cMun: 'dest_cMun',
  dest_xMun: 'dest_xMun',
  dest_UF: 'dest_UF',
  dest_CEP: 'dest_CEP',
  dest_cPais: 'dest_cPais',
  dest_xPais: 'dest_xPais',
  dest_fone: 'dest_fone',
  dest_IE: 'dest_IE',
  dest_email: 'dest_email',
  vBC: 'vBC',
  vICMS: 'vICMS',
  vBCST: 'vBCST',
  vST: 'vST',
  vProd: 'vProd',
  vFrete: 'vFrete',
  vSeg: 'vSeg',
  vDesc: 'vDesc',
  vII: 'vII',
  vIPI: 'vIPI',
  vPIS: 'vPIS',
  vCOFINS: 'vCOFINS',
  vOutro: 'vOutro',
  vNF: 'vNF',
  vFCPUFDest_ttlnfe: 'vFCPUFDest_ttlnfe',
  vICMSUFDest_ttlnfe: 'vICMSUFDest_ttlnfe',
  vICMSUFRemet_ttlnfe: 'vICMSUFRemet_ttlnfe',
  vICMSDeson: 'vICMSDeson',
  vTotTrib: 'vTotTrib',
  modFrete: 'modFrete',
  transp_cnpj_cpf: 'transp_cnpj_cpf',
  transp_xNome: 'transp_xNome',
  transp_IE: 'transp_IE',
  transp_xEnder: 'transp_xEnder',
  transp_xMun: 'transp_xMun',
  transp_UF: 'transp_UF',
  veic_placa: 'veic_placa',
  veic_UF: 'veic_UF',
  veic_RNTC: 'veic_RNTC',
  vol_qVol: 'vol_qVol',
  vol_esp: 'vol_esp',
  vol_marca: 'vol_marca',
  vol_nVol: 'vol_nVol',
  vol_pesoL: 'vol_pesoL',
  vol_pesoB: 'vol_pesoB',
  infAdFisco: 'infAdFisco',
  infCpl: 'infCpl',
  exporta_UFEmarq: 'exporta_UFEmarq',
  exporta_xLocEmarq: 'exporta_xLocEmarq',
  cd_status: 'cd_status',
  protocolo_autorizacao: 'protocolo_autorizacao',
  dt_autorizacao: 'dt_autorizacao',
  motivo_cancelamento: 'motivo_cancelamento',
  protocolo_cancelamento: 'protocolo_cancelamento',
  dt_cancelamento: 'dt_cancelamento',
  status_cancelamento: 'status_cancelamento',
  pedido_id: 'pedido_id',
  cliente_id: 'cliente_id',
  ide_hSaiEnt: 'ide_hSaiEnt',
  recibo_envio: 'recibo_envio',
  cd_condicao: 'cd_condicao',
  codigousuario: 'codigousuario',
  gerar_pdf: 'gerar_pdf',
  SitDescricao: 'SitDescricao',
  arquivo_xml: 'arquivo_xml',
  refNFe: 'refNFe',
  CCe: 'CCe',
  valorPedido: 'valorPedido',
  nDI: 'nDI',
  dDi: 'dDi',
  xLocDesemb: 'xLocDesemb',
  UFDesemb: 'UFDesemb',
  cExportador: 'cExportador',
  dDesemb: 'dDesemb',
  tpViaTransp: 'tpViaTransp',
  vAFRMM: 'vAFRMM',
  tpIntermedio: 'tpIntermedio',
  CNPJ_adq: 'CNPJ_adq',
  UFTerceiro: 'UFTerceiro',
  xml: 'xml',
  pdf: 'pdf',
  xml_carta_correcao: 'xml_carta_correcao',
  pdf_carta_correcao: 'pdf_carta_correcao',
  numero_carta_correcao: 'numero_carta_correcao',
  motivo_cce: 'motivo_cce',
  dt_autorizacao_cce: 'dt_autorizacao_cce',
  protocolo_autorizacao_cce: 'protocolo_autorizacao_cce',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfe_cfopScalarFieldEnum = makeEnum({
  id: 'id',
  codigo: 'codigo',
  descricao: 'descricao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfe_cofinsScalarFieldEnum = makeEnum({
  id: 'id',
  codigo: 'codigo',
  descricao: 'descricao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfe_csosnScalarFieldEnum = makeEnum({
  id: 'id',
  codigo: 'codigo',
  nome: 'nome',
  descricao: 'descricao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfe_entradaScalarFieldEnum = makeEnum({
  id: 'id',
  unit_id: 'unit_id',
  fornecedor_id: 'fornecedor_id',
  cUF: 'cUF',
  cNF: 'cNF',
  natOp: 'natOp',
  modelo: 'modelo',
  serie: 'serie',
  nNF: 'nNF',
  dhEmi: 'dhEmi',
  dhSaiEnt: 'dhSaiEnt',
  tpNF: 'tpNF',
  idDest: 'idDest',
  cMunFG: 'cMunFG',
  tpImp: 'tpImp',
  tpEmis: 'tpEmis',
  cDV: 'cDV',
  tpAmb: 'tpAmb',
  finNFe: 'finNFe',
  indFinal: 'indFinal',
  indPres: 'indPres',
  procEmi: 'procEmi',
  verProc: 'verProc',
  emit_CNPJ: 'emit_CNPJ',
  emit_xNome: 'emit_xNome',
  emit_xFant: 'emit_xFant',
  emit_xLgr: 'emit_xLgr',
  emit_nro: 'emit_nro',
  emit_xCpl: 'emit_xCpl',
  emit_xBairro: 'emit_xBairro',
  emit_cMun: 'emit_cMun',
  emit_xMun: 'emit_xMun',
  emit_UF: 'emit_UF',
  emit_CEP: 'emit_CEP',
  emit_xPais: 'emit_xPais',
  emit_fone: 'emit_fone',
  emit_IE: 'emit_IE',
  emit_CRT: 'emit_CRT',
  dest_CNPJ: 'dest_CNPJ',
  dest_xNome: 'dest_xNome',
  dest_xFant: 'dest_xFant',
  dest_xLgr: 'dest_xLgr',
  dest_nro: 'dest_nro',
  dest_xCpl: 'dest_xCpl',
  dest_xBairro: 'dest_xBairro',
  dest_cMun: 'dest_cMun',
  dest_xMun: 'dest_xMun',
  dest_UF: 'dest_UF',
  dest_CEP: 'dest_CEP',
  dest_xPais: 'dest_xPais',
  dest_fone: 'dest_fone',
  dest_IE: 'dest_IE',
  indIEDest: 'indIEDest',
  vBC: 'vBC',
  vICMS: 'vICMS',
  vICMSDeson: 'vICMSDeson',
  vFCP: 'vFCP',
  vBCST: 'vBCST',
  vST: 'vST',
  vFCPST: 'vFCPST',
  vFCPSTRet: 'vFCPSTRet',
  vProd: 'vProd',
  vFrete: 'vFrete',
  vSeg: 'vSeg',
  vDesc: 'vDesc',
  vII: 'vII',
  vIPI: 'vIPI',
  vPIS: 'vPIS',
  vCOFINS: 'vCOFINS',
  vOutro: 'vOutro',
  vNF: 'vNF',
  vTotTrib: 'vTotTrib',
  modFrete: 'modFrete',
  transporta_xNome: 'transporta_xNome',
  qVol: 'qVol',
  infAdic: 'infAdic',
  chNFe: 'chNFe',
  nProt: 'nProt',
  baixa: 'baixa',
  gerou_financeiro: 'gerou_financeiro',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfe_entrada_cobrancaScalarFieldEnum = makeEnum({
  id: 'id',
  nfe_entrada_id: 'nfe_entrada_id',
  nDup: 'nDup',
  dVenc: 'dVenc',
  vDup: 'vDup',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfe_entrada_itensScalarFieldEnum = makeEnum({
  id: 'id',
  nfe_entrada_id: 'nfe_entrada_id',
  sequencia: 'sequencia',
  cProd: 'cProd',
  cEAN: 'cEAN',
  xProd: 'xProd',
  NCM: 'NCM',
  CEST: 'CEST',
  CFOP: 'CFOP',
  uCom: 'uCom',
  qCom: 'qCom',
  vUnCom: 'vUnCom',
  vProd: 'vProd',
  vDesconto: 'vDesconto',
  vOutros: 'vOutros',
  vSeguro: 'vSeguro',
  vFrete: 'vFrete',
  cEANTrib: 'cEANTrib',
  uTrib: 'uTrib',
  qTrib: 'qTrib',
  vUnTrib: 'vUnTrib',
  indTot: 'indTot',
  rastro_nLote: 'rastro_nLote',
  rastro_qLote: 'rastro_qLote',
  rastro_dFab: 'rastro_dFab',
  rastro_dVal: 'rastro_dVal',
  vTotTrib: 'vTotTrib',
  ICMS_orig: 'ICMS_orig',
  ICMS_CST: 'ICMS_CST',
  ICMS_vBC: 'ICMS_vBC',
  ICMS_pICMS: 'ICMS_pICMS',
  ICMS_vICMS: 'ICMS_vICMS',
  ICMS_vBCST: 'ICMS_vBCST',
  ICMSST: 'ICMSST',
  vICMSST: 'vICMSST',
  pCredSN: 'pCredSN',
  vCredICMSSN: 'vCredICMSSN',
  pMVAST: 'pMVAST',
  pRedBCST: 'pRedBCST',
  modBC: 'modBC',
  modBCST: 'modBCST',
  pRedBC: 'pRedBC',
  pBCOp: 'pBCOp',
  UFST: 'UFST',
  PIS_CST: 'PIS_CST',
  PIS_vBC: 'PIS_vBC',
  PIS_pPIS: 'PIS_pPIS',
  PIS_vPIS: 'PIS_vPIS',
  COFINS_CST: 'COFINS_CST',
  COFINS_vBC: 'COFINS_vBC',
  COFINS_pCOFINS: 'COFINS_pCOFINS',
  COFINS_vCOFINS: 'COFINS_vCOFINS',
  IPI_CST: 'IPI_CST',
  IPI_vBC: 'IPI_vBC',
  IPI_pIPI: 'IPI_pIPI',
  IPI_vIPI: 'IPI_vIPI',
  IPI_cENQ: 'IPI_cENQ',
  produto_id: 'produto_id',
  cfop_entrada: 'cfop_entrada',
  lote: 'lote',
  validade_lote: 'validade_lote',
  produto_fator_id: 'produto_fator_id',
  produto_tipo: 'produto_tipo',
  precoFator: 'precoFator',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfe_estadoScalarFieldEnum = makeEnum({
  id: 'id',
  nome_estado: 'nome_estado',
  uf_estado: 'uf_estado',
  codigo_estado: 'codigo_estado',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfe_faturamentoScalarFieldEnum = makeEnum({
  id: 'id',
  nfe_id: 'nfe_id',
  vencimento: 'vencimento',
  valor: 'valor',
  valor_total: 'valor_total',
  conta_bancaria_id: 'conta_bancaria_id',
  pc_receita_id: 'pc_receita_id',
  tipo_pgto_id: 'tipo_pgto_id',
  num_aprovacao: 'num_aprovacao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfe_generos_produtosScalarFieldEnum = makeEnum({
  id: 'id',
  codigo: 'codigo',
  descricao: 'descricao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfe_icmsScalarFieldEnum = makeEnum({
  id: 'id',
  codigo: 'codigo',
  descricao: 'descricao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfe_icms_desoneracaoScalarFieldEnum = makeEnum({
  id: 'id',
  codigo: 'codigo',
  descricao: 'descricao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfe_icms_modalidade_bcScalarFieldEnum = makeEnum({
  id: 'id',
  codigo: 'codigo',
  descricao: 'descricao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfe_icms_modalidade_stScalarFieldEnum = makeEnum({
  id: 'id',
  codigo: 'codigo',
  descricao: 'descricao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfe_icms_origemScalarFieldEnum = makeEnum({
  id: 'id',
  cod: 'cod',
  descricao: 'descricao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfe_iedestScalarFieldEnum = makeEnum({
  id: 'id',
  codigo: 'codigo',
  descricao: 'descricao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfe_impostoScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  obs: 'obs',
  ativo: 'ativo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfe_inutilizaScalarFieldEnum = makeEnum({
  id: 'id',
  unit_id: 'unit_id',
  serie: 'serie',
  justificativa: 'justificativa',
  numero_inicial: 'numero_inicial',
  numero_final: 'numero_final',
  codigo: 'codigo',
  mensagem: 'mensagem',
  protocolo: 'protocolo',
  xml: 'xml',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfe_ipiScalarFieldEnum = makeEnum({
  id: 'id',
  codigo: 'codigo',
  descricao: 'descricao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfe_ipi_enquadramentoScalarFieldEnum = makeEnum({
  id: 'id',
  nfe_ipi_operacao_id: 'nfe_ipi_operacao_id',
  codigo: 'codigo',
  enquadramento: 'enquadramento',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfe_ipi_operacaoScalarFieldEnum = makeEnum({
  id: 'id',
  descricao: 'descricao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfe_itensScalarFieldEnum = makeEnum({
  id: 'id',
  nfe_id: 'nfe_id',
  sequencia: 'sequencia',
  produto_id: 'produto_id',
  produto_tabela_preco_id: 'produto_tabela_preco_id',
  descricao: 'descricao',
  preco: 'preco',
  quantidade: 'quantidade',
  desconto: 'desconto',
  total_item: 'total_item',
  total: 'total',
  cfop: 'cfop',
  bc_icms: 'bc_icms',
  aliq_icms: 'aliq_icms',
  vlr_icms: 'vlr_icms',
  cst_icms: 'cst_icms',
  cd_parametro_icms: 'cd_parametro_icms',
  bc_ipi: 'bc_ipi',
  aliq_ipi: 'aliq_ipi',
  vlr_ipi: 'vlr_ipi',
  cst_ipi: 'cst_ipi',
  cd_parametro_ipi: 'cd_parametro_ipi',
  enq_ipi: 'enq_ipi',
  bc_pis: 'bc_pis',
  aliq_pis: 'aliq_pis',
  vlr_pis: 'vlr_pis',
  cst_pis: 'cst_pis',
  cd_parametro_pis: 'cd_parametro_pis',
  bc_cofins: 'bc_cofins',
  aliq_cofins: 'aliq_cofins',
  vlr_cofins: 'vlr_cofins',
  cst_cofins: 'cst_cofins',
  cd_parametro_cofins: 'cd_parametro_cofins',
  modbcst: 'modbcst',
  pmvast: 'pmvast',
  vbcst: 'vbcst',
  picmsst: 'picmsst',
  pRedBCST: 'pRedBCST',
  vICMSDeson: 'vICMSDeson',
  motDesICMS: 'motDesICMS',
  vicmsst: 'vicmsst',
  vFrete: 'vFrete',
  vSeg: 'vSeg',
  vOutro: 'vOutro',
  vBCUFDest: 'vBCUFDest',
  pFCPUFDest: 'pFCPUFDest',
  pICMSUFDest: 'pICMSUFDest',
  pICMSInter: 'pICMSInter',
  pICMSInterPart: 'pICMSInterPart',
  vFCPUFDest: 'vFCPUFDest',
  vICMSUFDest: 'vICMSUFDest',
  vICMSUFRemet: 'vICMSUFRemet',
  total_tributos: 'total_tributos',
  lote: 'lote',
  validade: 'validade',
  anvisa: 'anvisa',
  nAdicao: 'nAdicao',
  nSeqAdic: 'nSeqAdic',
  cFabricante: 'cFabricante',
  vDescDI: 'vDescDI',
  nDrawAdicoes: 'nDrawAdicoes',
  vBC_imp: 'vBC_imp',
  vDespAdu: 'vDespAdu',
  vII: 'vII',
  vIOF: 'vIOF',
  direcionador_id: 'direcionador_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfe_municipio_incidenciaScalarFieldEnum = makeEnum({
  id: 'id',
  codigo: 'codigo',
  descricao: 'descricao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfe_operacoesScalarFieldEnum = makeEnum({
  id: 'id',
  descricao: 'descricao',
  gera_titulo: 'gera_titulo',
  gera_estoque: 'gera_estoque',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfe_parametrosScalarFieldEnum = makeEnum({
  id: 'id',
  unit_id: 'unit_id',
  nfe_operacoes_id: 'nfe_operacoes_id',
  nfe_regra_id: 'nfe_regra_id',
  uf_origem: 'uf_origem',
  uf_destino: 'uf_destino',
  cst_icms: 'cst_icms',
  cst_icms_st: 'cst_icms_st',
  cst_ipi: 'cst_ipi',
  cst_pis: 'cst_pis',
  cst_cofins: 'cst_cofins',
  aliq_icms: 'aliq_icms',
  aliq_icms_st: 'aliq_icms_st',
  aliq_ipi: 'aliq_ipi',
  aliq_pis: 'aliq_pis',
  aliq_cofins: 'aliq_cofins',
  cfop: 'cfop',
  cfop_descricao: 'cfop_descricao',
  comp_cfop: 'comp_cfop',
  enq_ipi: 'enq_ipi',
  nome_enq_ipi: 'nome_enq_ipi',
  modBC: 'modBC',
  modBCST: 'modBCST',
  pRedBC_S: 'pRedBC_S',
  pRedBCST_S: 'pRedBCST_S',
  pICMSST_S: 'pICMSST_S',
  pCredSN_S: 'pCredSN_S',
  pRedBCST_N: 'pRedBCST_N',
  pICMSST_N: 'pICMSST_N',
  motDesICMS: 'motDesICMS',
  aplicacao: 'aplicacao',
  idgrupo_produtos: 'idgrupo_produtos',
  ncm: 'ncm',
  cest: 'cest',
  pICMSInter: 'pICMSInter',
  pICMSUFDest: 'pICMSUFDest',
  pFCPUFDest: 'pFCPUFDest',
  pOrigem: 'pOrigem',
  pICMSInterPart: 'pICMSInterPart',
  movEstoque: 'movEstoque',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfe_pisScalarFieldEnum = makeEnum({
  id: 'id',
  codigo: 'codigo',
  descricao: 'descricao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfe_regraScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  ativo: 'ativo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfe_tabelaCESTScalarFieldEnum = makeEnum({
  id: 'id',
  legal_tbc: 'legal_tbc',
  ncm_tbc: 'ncm_tbc',
  descricao_tbc: 'descricao_tbc',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfe_tabelaIBPTScalarFieldEnum = makeEnum({
  id: 'id',
  ex: 'ex',
  tipo: 'tipo',
  descricao: 'descricao',
  nacionalfederal: 'nacionalfederal',
  importadosfederal: 'importadosfederal',
  estadual: 'estadual',
  municipal: 'municipal',
  vigenciainicio: 'vigenciainicio',
  vigenciafim: 'vigenciafim',
  chave: 'chave',
  versao: 'versao',
  fonte: 'fonte',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfe_ultimo_numeroScalarFieldEnum = makeEnum({
  id: 'id',
  numero: 'numero',
  unit_id: 'unit_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.NfseScalarFieldEnum = makeEnum({
  id: 'id',
  unit_id: 'unit_id',
  conta_receber_id: 'conta_receber_id',
  cliente_id: 'cliente_id',
  lote: 'lote',
  numeroNfse: 'numeroNfse',
  enviarEmail: 'enviarEmail',
  dataEmissao: 'dataEmissao',
  competencia: 'competencia',
  substituicao: 'substituicao',
  TcpfCnpj: 'TcpfCnpj',
  TrazaoSocial: 'TrazaoSocial',
  Temail: 'Temail',
  Tlogradouro: 'Tlogradouro',
  Tnumero: 'Tnumero',
  Tbairro: 'Tbairro',
  Tcidade: 'Tcidade',
  Tuf: 'Tuf',
  Tcomplemento: 'Tcomplemento',
  TcodigoCidade: 'TcodigoCidade',
  Tcep: 'Tcep',
  Scodigo: 'Scodigo',
  Sdiscriminacao: 'Sdiscriminacao',
  Scnae: 'Scnae',
  ISSaliquota: 'ISSaliquota',
  ISStipoTributacao: 'ISStipoTributacao',
  ISSretido: 'ISSretido',
  ISSvalor: 'ISSvalor',
  ISSvalorRetido: 'ISSvalorRetido',
  ISSexigibilidade: 'ISSexigibilidade',
  ISSProcessoSuspencao: 'ISSProcessoSuspencao',
  total_servico: 'total_servico',
  deducoes: 'deducoes',
  base_calculo: 'base_calculo',
  status: 'status',
  statusCode: 'statusCode',
  protocolo: 'protocolo',
  protocolo_cancelamento: 'protocolo_cancelamento',
  pdf: 'pdf',
  xml: 'xml',
  tipo: 'tipo',
  id_retorno: 'id_retorno',
  ServCodigo: 'ServCodigo',
  ServDescricao: 'ServDescricao',
  RetCofins: 'RetCofins',
  RetCsll: 'RetCsll',
  RetInss: 'RetInss',
  RetIrrf: 'RetIrrf',
  RetPis: 'RetPis',
  RetOutros: 'RetOutros',
  EventoTipo: 'EventoTipo',
  EventoDescricao: 'EventoDescricao',
  vRetCofins: 'vRetCofins',
  vRetCsll: 'vRetCsll',
  vRetInss: 'vRetInss',
  vRetIrrf: 'vRetIrrf',
  vRetPis: 'vRetPis',
  observacao: 'observacao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfse_codigo_atividadesScalarFieldEnum = makeEnum({
  id: 'id',
  nfse_codigo_servicos_id: 'nfse_codigo_servicos_id',
  codigo: 'codigo',
  descricao: 'descricao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfse_codigo_servicosScalarFieldEnum = makeEnum({
  id: 'id',
  codigo: 'codigo',
  descricao: 'descricao',
  IRRF: 'IRRF',
  PIS: 'PIS',
  COFINS: 'COFINS',
  CSLL: 'CSLL',
  comentario: 'comentario',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfse_exigibilidadeScalarFieldEnum = makeEnum({
  id: 'id',
  descricao: 'descricao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfse_itensScalarFieldEnum = makeEnum({
  id: 'id',
  nfse_id: 'nfse_id',
  descricao: 'descricao',
  valor: 'valor',
  quantidade: 'quantidade',
  total_item: 'total_item',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfse_parametroScalarFieldEnum = makeEnum({
  id: 'id',
  apikey: 'apikey',
  tipo_ambiente: 'tipo_ambiente',
  unico_servico: 'unico_servico',
  nome_servico: 'nome_servico',
  DeducaoTipo: 'DeducaoTipo',
  DeducaoDescricao: 'DeducaoDescricao',
  EventoTipo: 'EventoTipo',
  EventoDescricao: 'EventoDescricao',
  IssAliquota: 'IssAliquota',
  IssExigibilidade: 'IssExigibilidade',
  IssProcessoSuspensao: 'IssProcessoSuspensao',
  IssValor: 'IssValor',
  IssRetido: 'IssRetido',
  IssValorRetido: 'IssValorRetido',
  RetCofins: 'RetCofins',
  RetCsll: 'RetCsll',
  RetInss: 'RetInss',
  RetIrrf: 'RetIrrf',
  RetOutrasRetencoes: 'RetOutrasRetencoes',
  RetPis: 'RetPis',
  ServCnae: 'ServCnae',
  ServCodigo: 'ServCodigo',
  ServCodigoCidadeIncidencia: 'ServCodigoCidadeIncidencia',
  ServCodigoTributacao: 'ServCodigoTributacao',
  ServDescricaoCidadeIncidencia: 'ServDescricaoCidadeIncidencia',
  ServDiscriminacao: 'ServDiscriminacao',
  ServIdIntegracao: 'ServIdIntegracao',
  unit_id: 'unit_id',
  ultimoNumeroNfse: 'ultimoNumeroNfse',
  ultimoNumeroLote: 'ultimoNumeroLote',
  tipoTributacao: 'tipoTributacao',
  enviarEmail: 'enviarEmail',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfse_tipodeducaoScalarFieldEnum = makeEnum({
  id: 'id',
  descricao: 'descricao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Nfse_tipotributacaoScalarFieldEnum = makeEnum({
  id: 'id',
  descricao: 'descricao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.OsScalarFieldEnum = makeEnum({
  id: 'id',
  unit_id: 'unit_id',
  user_id: 'user_id',
  cliente_id: 'cliente_id',
  tipo_pgto_id: 'tipo_pgto_id',
  tipo_forma_pgto_id: 'tipo_forma_pgto_id',
  relatorio_customizado_id: 'relatorio_customizado_id',
  relatorio_termo_garantia_id: 'relatorio_termo_garantia_id',
  servico_motivo_id: 'servico_motivo_id',
  tipo_endereco_id: 'tipo_endereco_id',
  vencimento_orcamento_os: 'vencimento_orcamento_os',
  vencimento_faturamento_os: 'vencimento_faturamento_os',
  dataAbertura: 'dataAbertura',
  dataPrevisao: 'dataPrevisao',
  dataFechamento: 'dataFechamento',
  situacao: 'situacao',
  color: 'color',
  valor: 'valor',
  solicitacao_defeito_declarado: 'solicitacao_defeito_declarado',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  numero_garantia: 'numero_garantia',
  cliente_equipamento_id: 'cliente_equipamento_id',
  diagnostico: 'diagnostico'
});

exports.Prisma.Os_checklistScalarFieldEnum = makeEnum({
  id: 'id',
  os_servicos_id: 'os_servicos_id',
  descricao: 'descricao',
  concluido: 'concluido',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Os_pecasScalarFieldEnum = makeEnum({
  id: 'id',
  os_id: 'os_id',
  produto_id: 'produto_id',
  equipamento_id: 'equipamento_id',
  estoque: 'estoque',
  tecnico_id: 'tecnico_id',
  quantidade: 'quantidade',
  precoUnitario: 'precoUnitario',
  total: 'total',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Os_servicosScalarFieldEnum = makeEnum({
  id: 'id',
  os_id: 'os_id',
  pmoc_tipo_equipamento_id: 'pmoc_tipo_equipamento_id',
  produto_id: 'produto_id',
  valor_hora: 'valor_hora',
  tecnico_id: 'tecnico_id',
  dataInicio: 'dataInicio',
  dataTermino: 'dataTermino',
  situacao: 'situacao',
  color: 'color',
  valor: 'valor',
  observacao: 'observacao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Pc_despesaScalarFieldEnum = makeEnum({
  id: 'id',
  nivel1: 'nivel1',
  nivel2: 'nivel2',
  nivel3: 'nivel3',
  nivel4: 'nivel4',
  nome: 'nome',
  unit_id: 'unit_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Pc_receitaScalarFieldEnum = makeEnum({
  id: 'id',
  nivel1: 'nivel1',
  nivel2: 'nivel2',
  nivel3: 'nivel3',
  nivel4: 'nivel4',
  nome: 'nome',
  unit_id: 'unit_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.PecaScalarFieldEnum = makeEnum({
  id: 'id',
  categoria_id: 'categoria_id',
  produto_id: 'produto_id',
  situacao: 'situacao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Peca_categoriaScalarFieldEnum = makeEnum({
  id: 'id',
  descricao: 'descricao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.PedidoScalarFieldEnum = makeEnum({
  id: 'id',
  data_vencimento: 'data_vencimento',
  data_competencia: 'data_competencia',
  data_faturado: 'data_faturado',
  referencia: 'referencia',
  tipo: 'tipo',
  user_id: 'user_id',
  total_itens: 'total_itens',
  total_desconto: 'total_desconto',
  total_pedido: 'total_pedido',
  notas: 'notas',
  faturado: 'faturado',
  status: 'status',
  tipo_pgto_id: 'tipo_pgto_id',
  tipo_forma_pgto_id: 'tipo_forma_pgto_id',
  num_aprovacao: 'num_aprovacao',
  certificadora: 'certificadora',
  boleto_id: 'boleto_id',
  boleto_emitido: 'boleto_emitido',
  boleto_status: 'boleto_status',
  geraNFe: 'geraNFe',
  unit_id: 'unit_id',
  cliente_id: 'cliente_id',
  pc_receita_id: 'pc_receita_id',
  pc_receita_nome: 'pc_receita_nome',
  orcamento_id: 'orcamento_id',
  conta_bancaria_id: 'conta_bancaria_id',
  boleto_account_id: 'boleto_account_id',
  tabela_precos_id: 'tabela_precos_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Pedido_itensScalarFieldEnum = makeEnum({
  id: 'id',
  pedido_id: 'pedido_id',
  sequencia: 'sequencia',
  produto_id: 'produto_id',
  vaucher_id: 'vaucher_id',
  produto_tabela_preco_id: 'produto_tabela_preco_id',
  descricao: 'descricao',
  preco: 'preco',
  quantidade: 'quantidade',
  desconto: 'desconto',
  total_item: 'total_item',
  total: 'total',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Pedido_osScalarFieldEnum = makeEnum({
  id: 'id',
  cliente_id: 'cliente_id',
  unit_id: 'unit_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Pedido_os_itensScalarFieldEnum = makeEnum({
  id: 'id',
  pedido_os_id: 'pedido_os_id',
  os_id: 'os_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.PlanoScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  valor: 'valor',
  valor_recorrencia: 'valor_recorrencia',
  adesao: 'adesao',
  valor_parcela: 'valor_parcela',
  plano_recorrencia_tipo_id: 'plano_recorrencia_tipo_id',
  pc_receita_id: 'pc_receita_id',
  pc_receita_nome: 'pc_receita_nome',
  pc_despesa_id: 'pc_despesa_id',
  pc_despesa_nome: 'pc_despesa_nome',
  hash_plano: 'hash_plano',
  eh_recorrente: 'eh_recorrente',
  ativo: 'ativo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Plano_recorrencia_tipoScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  intervalo_meses_cobranca: 'intervalo_meses_cobranca',
  system_user_id: 'system_user_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Plano_unidadeScalarFieldEnum = makeEnum({
  id: 'id',
  plano_id: 'plano_id',
  unit_id: 'unit_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Pmoc_ambienteScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Pmoc_andarScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Pmoc_area_climatizadaScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Pmoc_capacidadeScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Pmoc_componenteScalarFieldEnum = makeEnum({
  id: 'id',
  pmoc_tipo_equipamento_id: 'pmoc_tipo_equipamento_id',
  nome: 'nome',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Pmoc_componente_defeitosScalarFieldEnum = makeEnum({
  id: 'id',
  pmoc_componente_id: 'pmoc_componente_id',
  nome: 'nome',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Pmoc_fluido_refrigeranteScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Pmoc_identificacao_tagtomboScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Pmoc_tensaoScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Pmoc_tipo_atividadeScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Pmoc_tipo_equipamentoScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.ProdutoScalarFieldEnum = makeEnum({
  id: 'id',
  produto_grupo_id: 'produto_grupo_id',
  produto_subgrupo_id: 'produto_subgrupo_id',
  produto_fabricante_id: 'produto_fabricante_id',
  produto_modelo_id: 'produto_modelo_id',
  produto_complexidade_id: 'produto_complexidade_id',
  unit_id: 'unit_id',
  ncm: 'ncm',
  barras: 'barras',
  cod_referencia: 'cod_referencia',
  padrao: 'padrao',
  unidade_medida_id: 'unidade_medida_id',
  nome_produto: 'nome_produto',
  local: 'local',
  preco_venda: 'preco_venda',
  estoque_min: 'estoque_min',
  estoque_max: 'estoque_max',
  serial: 'serial',
  preco_ultima_compra: 'preco_ultima_compra',
  obs: 'obs',
  tipo_produto: 'tipo_produto',
  image_produto: 'image_produto',
  composicao: 'composicao',
  kit: 'kit',
  nve: 'nve',
  cEANTrib: 'cEANTrib',
  CEST: 'CEST',
  vFrete: 'vFrete',
  vSeg: 'vSeg',
  vOutro: 'vOutro',
  extipi: 'extipi',
  orig: 'orig',
  MVA: 'MVA',
  impostos_venda: 'impostos_venda',
  impostos_compra: 'impostos_compra',
  anvisa: 'anvisa',
  pis: 'pis',
  cofins: 'cofins',
  icms: 'icms',
  iss: 'iss',
  ipi: 'ipi',
  tipo: 'tipo',
  comissao: 'comissao',
  tributacao_id: 'tributacao_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Produto_complexidadeScalarFieldEnum = makeEnum({
  id: 'id',
  descricao: 'descricao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Produto_composicaoScalarFieldEnum = makeEnum({
  id: 'id',
  produto_id: 'produto_id',
  composicao_id: 'composicao_id',
  quantidade: 'quantidade',
  valor_unidade: 'valor_unidade',
  valor_total: 'valor_total',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Produto_fabricanteScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Produto_fatorScalarFieldEnum = makeEnum({
  id: 'id',
  descricao: 'descricao',
  tipo: 'tipo',
  unid_ent: 'unid_ent',
  unid_conv: 'unid_conv',
  valor: 'valor',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Produto_grupoScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Produto_modeloScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Produto_subgrupoScalarFieldEnum = makeEnum({
  id: 'id',
  produto_grupo_id: 'produto_grupo_id',
  nome: 'nome',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Produto_tabela_precoScalarFieldEnum = makeEnum({
  id: 'id',
  tabela_preco_id: 'tabela_preco_id',
  preco: 'preco',
  controla_validade: 'controla_validade',
  data_validade: 'data_validade',
  descontoMax: 'descontoMax',
  tem_comissao: 'tem_comissao',
  comissao: 'comissao',
  tem_promocao: 'tem_promocao',
  promocao: 'promocao',
  promocao_validade: 'promocao_validade',
  produto_id: 'produto_id',
  markup_preco_custo: 'markup_preco_custo',
  markup_despesa_variavel: 'markup_despesa_variavel',
  markup_despesa_fixa: 'markup_despesa_fixa',
  markup_lucro_desejado: 'markup_lucro_desejado',
  markup_preco_venda: 'markup_preco_venda',
  markup_comissao_tecnico: 'markup_comissao_tecnico',
  markup_comissao_parceiro: 'markup_comissao_parceiro',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Produto_unidade_medidaScalarFieldEnum = makeEnum({
  id: 'id',
  cod: 'cod',
  descricao: 'descricao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.ProfissaoScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Relatorio_customizadoScalarFieldEnum = makeEnum({
  id: 'id',
  unit_id: 'unit_id',
  nome: 'nome',
  conteudo: 'conteudo',
  pc_receita_id: 'pc_receita_id',
  pc_receita_nome: 'pc_receita_nome',
  pc_despesa_id: 'pc_despesa_id',
  pc_despesa_nome: 'pc_despesa_nome',
  cp_tipo_pgto_id: 'cp_tipo_pgto_id',
  cr_tipo_pgto_id: 'cr_tipo_pgto_id',
  cp_tipo_forma_pgto_id: 'cp_tipo_forma_pgto_id',
  cr_tipo_forma_pgto_id: 'cr_tipo_forma_pgto_id',
  cp_user_id: 'cp_user_id',
  cr_user_id: 'cr_user_id',
  cp_conta_bancaria_id: 'cp_conta_bancaria_id',
  cr_conta_bancaria_id: 'cr_conta_bancaria_id',
  cp_departamento_id: 'cp_departamento_id',
  cr_departamento_id: 'cr_departamento_id',
  cp_descricao: 'cp_descricao',
  cr_descricao: 'cr_descricao',
  incremento: 'incremento',
  decremento: 'decremento',
  renovacao: 'renovacao',
  aumento_prazo: 'aumento_prazo',
  pagamento_acumulativo: 'pagamento_acumulativo',
  aditivo_database: 'aditivo_database',
  pagamento_unico: 'pagamento_unico',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Relatorio_termo_garantiaScalarFieldEnum = makeEnum({
  id: 'id',
  unit_id: 'unit_id',
  nome: 'nome',
  conteudo: 'conteudo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.ServicoScalarFieldEnum = makeEnum({
  id: 'id',
  produto_id: 'produto_id',
  servico_categoria_id: 'servico_categoria_id',
  situacao: 'situacao',
  precoVenda: 'precoVenda',
  tempoEstimado: 'tempoEstimado',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Servico_categoriaScalarFieldEnum = makeEnum({
  id: 'id',
  nome_categoria: 'nome_categoria',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Servico_motivosScalarFieldEnum = makeEnum({
  id: 'id',
  servico_status_id: 'servico_status_id',
  nome: 'nome',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Servico_setlistScalarFieldEnum = makeEnum({
  id: 'id',
  unit_id: 'unit_id',
  produto_id: 'produto_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Servico_setlist_itensScalarFieldEnum = makeEnum({
  id: 'id',
  servico_setlist_id: 'servico_setlist_id',
  descricao: 'descricao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Servico_statusScalarFieldEnum = makeEnum({
  id: 'id',
  descricao: 'descricao',
  color: 'color',
  baixa: 'baixa',
  motivo: 'motivo',
  filtro: 'filtro',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  tecnico_possui_acesso: 'tecnico_possui_acesso'
});

exports.Prisma.SituacaoScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome'
});

exports.Prisma.Solicitacao_fim_statusScalarFieldEnum = makeEnum({
  id: 'id',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Solicitacao_financeiroScalarFieldEnum = makeEnum({
  id: 'id',
  departamento_id: 'departamento_id',
  fornecedor_id: 'fornecedor_id',
  system_group_id: 'system_group_id',
  user_id: 'user_id',
  unit_id: 'unit_id',
  resumo: 'resumo',
  descricao: 'descricao',
  valor: 'valor',
  solicitacao_fim_status_id: 'solicitacao_fim_status_id',
  reposta_financeiro: 'reposta_financeiro',
  data_vencimento: 'data_vencimento',
  tipo_pgto_id: 'tipo_pgto_id',
  tipo_forma_pgto_id: 'tipo_forma_pgto_id',
  pc_despesa_id: 'pc_despesa_id',
  pc_despesa_nome: 'pc_despesa_nome',
  conta_bancaria_id: 'conta_bancaria_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.System_access_logScalarFieldEnum = makeEnum({
  id: 'id',
  sessionid: 'sessionid',
  login: 'login',
  login_year: 'login_year',
  login_month: 'login_month',
  login_day: 'login_day',
  login_time: 'login_time',
  logout_time: 'logout_time',
  impersonated: 'impersonated',
  access_ip: 'access_ip',
  impersonated_by: 'impersonated_by',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.System_change_logScalarFieldEnum = makeEnum({
  id: 'id',
  logdate: 'logdate',
  login: 'login',
  tablename: 'tablename',
  primarykey: 'primarykey',
  pkvalue: 'pkvalue',
  operation: 'operation',
  columnname: 'columnname',
  oldvalue: 'oldvalue',
  newvalue: 'newvalue',
  access_ip: 'access_ip',
  transaction_id: 'transaction_id',
  log_trace: 'log_trace',
  session_id: 'session_id',
  class_name: 'class_name',
  php_sapi: 'php_sapi',
  log_year: 'log_year',
  log_month: 'log_month',
  log_day: 'log_day'
});

exports.Prisma.System_documentScalarFieldEnum = makeEnum({
  id: 'id',
  system_user_id: 'system_user_id',
  title: 'title',
  description: 'description',
  category_id: 'category_id',
  submission_date: 'submission_date',
  archive_date: 'archive_date',
  filename: 'filename',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.System_document_categoryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.System_document_groupScalarFieldEnum = makeEnum({
  id: 'id',
  document_id: 'document_id',
  system_group_id: 'system_group_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.System_document_userScalarFieldEnum = makeEnum({
  id: 'id',
  document_id: 'document_id',
  system_user_id: 'system_user_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.System_groupScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.System_group_programScalarFieldEnum = makeEnum({
  id: 'id',
  system_group_id: 'system_group_id',
  system_program_id: 'system_program_id',
  created_at: 'created_at',
  deleted_at: 'deleted_at',
  updated_at: 'updated_at'
});

exports.Prisma.System_messageScalarFieldEnum = makeEnum({
  id: 'id',
  system_user_id: 'system_user_id',
  system_user_to_id: 'system_user_to_id',
  subject: 'subject',
  message: 'message',
  dt_message: 'dt_message',
  checked: 'checked',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.System_notificationScalarFieldEnum = makeEnum({
  id: 'id',
  system_user_id: 'system_user_id',
  system_user_to_id: 'system_user_to_id',
  subject: 'subject',
  message: 'message',
  dt_message: 'dt_message',
  action_url: 'action_url',
  action_label: 'action_label',
  icon: 'icon',
  checked: 'checked',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.System_preferenceScalarFieldEnum = makeEnum({
  id: 'id',
  value: 'value',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.System_programScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  controller: 'controller',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.System_request_logScalarFieldEnum = makeEnum({
  id: 'id',
  endpoint: 'endpoint',
  logdate: 'logdate',
  log_year: 'log_year',
  log_month: 'log_month',
  log_day: 'log_day',
  session_id: 'session_id',
  login: 'login',
  access_ip: 'access_ip',
  class_name: 'class_name',
  http_host: 'http_host',
  server_port: 'server_port',
  request_uri: 'request_uri',
  request_method: 'request_method',
  query_string: 'query_string',
  request_headers: 'request_headers',
  request_body: 'request_body',
  request_duration: 'request_duration'
});

exports.Prisma.System_sql_logScalarFieldEnum = makeEnum({
  id: 'id',
  logdate: 'logdate',
  login: 'login',
  database_name: 'database_name',
  sql_command: 'sql_command',
  statement_type: 'statement_type',
  access_ip: 'access_ip',
  transaction_id: 'transaction_id',
  log_trace: 'log_trace',
  session_id: 'session_id',
  class_name: 'class_name',
  php_sapi: 'php_sapi',
  request_id: 'request_id',
  log_year: 'log_year',
  log_month: 'log_month',
  log_day: 'log_day',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.System_unitScalarFieldEnum = makeEnum({
  id: 'id',
  producao: 'producao',
  name: 'name',
  matriz_filial: 'matriz_filial',
  razao_social: 'razao_social',
  nome_fantasia: 'nome_fantasia',
  unidade: 'unidade',
  responsavel: 'responsavel',
  cnpj: 'cnpj',
  insc_estadual: 'insc_estadual',
  insc_municipal: 'insc_municipal',
  cnae: 'cnae',
  crt: 'crt',
  atividade: 'atividade',
  regime: 'regime',
  junta_comercial: 'junta_comercial',
  ativo: 'ativo',
  porte: 'porte',
  cep: 'cep',
  logradouro: 'logradouro',
  numero: 'numero',
  bairro: 'bairro',
  complemento: 'complemento',
  cidade: 'cidade',
  uf: 'uf',
  codMuni: 'codMuni',
  email: 'email',
  telefone: 'telefone',
  telefone_sped: 'telefone_sped',
  site: 'site',
  cont_limite: 'cont_limite',
  limite: 'limite',
  certificado: 'certificado',
  data_vencimento_certificado: 'data_vencimento_certificado',
  senha: 'senha',
  connection_name: 'connection_name',
  contabilista_nome: 'contabilista_nome',
  contabilista_cpf: 'contabilista_cpf',
  contabilista_crc: 'contabilista_crc',
  contabilista_cnpj: 'contabilista_cnpj',
  contabilista_cep: 'contabilista_cep',
  contabilista_end: 'contabilista_end',
  contabilista_num: 'contabilista_num',
  contabilista_compl: 'contabilista_compl',
  contabilista_bairro: 'contabilista_bairro',
  contabilista_fone: 'contabilista_fone',
  contabilista_email: 'contabilista_email',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.System_userScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  login: 'login',
  password: 'password',
  email: 'email',
  frontpage_id: 'frontpage_id',
  tipo_estoque: 'tipo_estoque',
  system_unit_id: 'system_unit_id',
  active: 'active',
  accepted_term_policy: 'accepted_term_policy',
  accepted_term_policy_at: 'accepted_term_policy_at',
  accepted_term_policy_data: 'accepted_term_policy_data',
  phone: 'phone',
  address: 'address',
  function_name: 'function_name',
  about: 'about',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.System_user_groupScalarFieldEnum = makeEnum({
  id: 'id',
  system_user_id: 'system_user_id',
  system_group_id: 'system_group_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.System_user_old_passwordScalarFieldEnum = makeEnum({
  id: 'id',
  system_user_id: 'system_user_id',
  password: 'password',
  created_at: 'created_at'
});

exports.Prisma.System_user_programScalarFieldEnum = makeEnum({
  id: 'id',
  system_user_id: 'system_user_id',
  system_program_id: 'system_program_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.System_user_unitScalarFieldEnum = makeEnum({
  id: 'id',
  system_user_id: 'system_user_id',
  system_unit_id: 'system_unit_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Tabela_precosScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Telefones_clienteScalarFieldEnum = makeEnum({
  id: 'id',
  responsavel: 'responsavel',
  telefone: 'telefone',
  cliente_id: 'cliente_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Telefones_fornecedorScalarFieldEnum = makeEnum({
  id: 'id',
  responsavel: 'responsavel',
  telefone: 'telefone',
  fornecedor_id: 'fornecedor_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Telefones_unidadeScalarFieldEnum = makeEnum({
  id: 'id',
  responsavel: 'responsavel',
  telefone: 'telefone',
  unidades_id: 'unidades_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Tipo_enderecoScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Tipo_estoqueScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  valor: 'valor',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Tipo_forma_pgtoScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  regra: 'regra',
  parcela: 'parcela',
  valor_minimo: 'valor_minimo',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Tipo_pgtoScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  unit_id: 'unit_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Transferencia_bancariaScalarFieldEnum = makeEnum({
  id: 'id',
  unit_id: 'unit_id',
  user_id: 'user_id',
  conta_bancaria_debito_id: 'conta_bancaria_debito_id',
  conta_bancaria_credito_id: 'conta_bancaria_credito_id',
  data_lancamento: 'data_lancamento',
  data_transferencia: 'data_transferencia',
  valor: 'valor',
  pc_despesa_id: 'pc_despesa_id',
  pc_despesa_nome: 'pc_despesa_nome',
  pc_receita_id: 'pc_receita_id',
  pc_receita_nome: 'pc_receita_nome',
  observacao: 'observacao',
  baixa: 'baixa',
  data_baixa: 'data_baixa',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.TransportadoraScalarFieldEnum = makeEnum({
  id: 'id',
  nome_fantasia: 'nome_fantasia',
  razao_social: 'razao_social',
  insc_estadual: 'insc_estadual',
  im: 'im',
  cnpj: 'cnpj',
  cep: 'cep',
  logradouro: 'logradouro',
  numero: 'numero',
  bairro: 'bairro',
  complemento: 'complemento',
  cidade: 'cidade',
  uf: 'uf',
  telefone: 'telefone',
  fax: 'fax',
  responsavel: 'responsavel',
  email: 'email',
  site: 'site',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});


exports.Prisma.ModelName = makeEnum({
  api_integracao: 'api_integracao',
  banco: 'banco',
  boleto: 'boleto',
  boleto_api: 'boleto_api',
  boleto_regra: 'boleto_regra',
  boleto_retorno: 'boleto_retorno',
  cfop: 'cfop',
  cliente: 'cliente',
  cliente_contrato: 'cliente_contrato',
  cliente_contrato_aditivo: 'cliente_contrato_aditivo',
  cliente_contrato_aprovacao_financeiro: 'cliente_contrato_aprovacao_financeiro',
  cliente_contrato_historico: 'cliente_contrato_historico',
  cliente_contrato_status: 'cliente_contrato_status',
  cliente_endereco: 'cliente_endereco',
  cliente_equipamento: 'cliente_equipamento',
  cliente_grupo: 'cliente_grupo',
  codigo_servico: 'codigo_servico',
  comissao_fornecedor: 'comissao_fornecedor',
  comissao_tabela: 'comissao_tabela',
  comissao_user: 'comissao_user',
  compras_cotacao: 'compras_cotacao',
  compras_demanda: 'compras_demanda',
  compras_projeto: 'compras_projeto',
  compras_solicitacao: 'compras_solicitacao',
  compras_solicitacao_iten: 'compras_solicitacao_iten',
  compras_status: 'compras_status',
  conta_bancaria: 'conta_bancaria',
  conta_moeda: 'conta_moeda',
  conta_pagar: 'conta_pagar',
  conta_pagar_arquivo: 'conta_pagar_arquivo',
  conta_receber: 'conta_receber',
  conta_receber_arquivo: 'conta_receber_arquivo',
  departamento: 'departamento',
  email: 'email',
  email_aenviar: 'email_aenviar',
  emails_cliente: 'emails_cliente',
  emails_fornecedor: 'emails_fornecedor',
  emails_unidade: 'emails_unidade',
  estoque: 'estoque',
  estoque_consumo: 'estoque_consumo',
  estoque_control_imobilizado: 'estoque_control_imobilizado',
  estoque_controlmov_imobilizado: 'estoque_controlmov_imobilizado',
  estoque_devolucao: 'estoque_devolucao',
  estoque_devolucao_itens: 'estoque_devolucao_itens',
  estoque_imobilizado: 'estoque_imobilizado',
  estoque_insumos: 'estoque_insumos',
  estoque_insumos_itens: 'estoque_insumos_itens',
  estoque_lote: 'estoque_lote',
  estoque_movel: 'estoque_movel',
  estoque_requisicao: 'estoque_requisicao',
  estoque_requisicao_itens: 'estoque_requisicao_itens',
  estoque_tipo: 'estoque_tipo',
  estoque_transferencia_imobilizado: 'estoque_transferencia_imobilizado',
  estoque_transferencia_imobilizado_item: 'estoque_transferencia_imobilizado_item',
  estoquemov: 'estoquemov',
  estoquemov_consumo: 'estoquemov_consumo',
  estoquemov_imobilizado: 'estoquemov_imobilizado',
  estoquemov_lote: 'estoquemov_lote',
  estoquemov_movel: 'estoquemov_movel',
  fornecedor: 'fornecedor',
  historico_os_servico: 'historico_os_servico',
  lancamento_bancario: 'lancamento_bancario',
  movimentacao_bancaria: 'movimentacao_bancaria',
  mutuario: 'mutuario',
  nf_direcionador: 'nf_direcionador',
  nf_direcionador_cfop: 'nf_direcionador_cfop',
  nf_tributacao: 'nf_tributacao',
  nf_tributacao_faixa: 'nf_tributacao_faixa',
  nf_tributacao_imposto: 'nf_tributacao_imposto',
  nf_tributo: 'nf_tributo',
  nfe: 'nfe',
  nfe_cfop: 'nfe_cfop',
  nfe_cofins: 'nfe_cofins',
  nfe_csosn: 'nfe_csosn',
  nfe_entrada: 'nfe_entrada',
  nfe_entrada_cobranca: 'nfe_entrada_cobranca',
  nfe_entrada_itens: 'nfe_entrada_itens',
  nfe_estado: 'nfe_estado',
  nfe_faturamento: 'nfe_faturamento',
  nfe_generos_produtos: 'nfe_generos_produtos',
  nfe_icms: 'nfe_icms',
  nfe_icms_desoneracao: 'nfe_icms_desoneracao',
  nfe_icms_modalidade_bc: 'nfe_icms_modalidade_bc',
  nfe_icms_modalidade_st: 'nfe_icms_modalidade_st',
  nfe_icms_origem: 'nfe_icms_origem',
  nfe_iedest: 'nfe_iedest',
  nfe_imposto: 'nfe_imposto',
  nfe_inutiliza: 'nfe_inutiliza',
  nfe_ipi: 'nfe_ipi',
  nfe_ipi_enquadramento: 'nfe_ipi_enquadramento',
  nfe_ipi_operacao: 'nfe_ipi_operacao',
  nfe_itens: 'nfe_itens',
  nfe_municipio_incidencia: 'nfe_municipio_incidencia',
  nfe_operacoes: 'nfe_operacoes',
  nfe_parametros: 'nfe_parametros',
  nfe_pis: 'nfe_pis',
  nfe_regra: 'nfe_regra',
  nfe_tabelaCEST: 'nfe_tabelaCEST',
  nfe_tabelaIBPT: 'nfe_tabelaIBPT',
  nfe_ultimo_numero: 'nfe_ultimo_numero',
  nfse: 'nfse',
  nfse_codigo_atividades: 'nfse_codigo_atividades',
  nfse_codigo_servicos: 'nfse_codigo_servicos',
  nfse_exigibilidade: 'nfse_exigibilidade',
  nfse_itens: 'nfse_itens',
  nfse_parametro: 'nfse_parametro',
  nfse_tipodeducao: 'nfse_tipodeducao',
  nfse_tipotributacao: 'nfse_tipotributacao',
  os: 'os',
  os_checklist: 'os_checklist',
  os_pecas: 'os_pecas',
  os_servicos: 'os_servicos',
  pc_despesa: 'pc_despesa',
  pc_receita: 'pc_receita',
  peca: 'peca',
  peca_categoria: 'peca_categoria',
  pedido: 'pedido',
  pedido_itens: 'pedido_itens',
  pedido_os: 'pedido_os',
  pedido_os_itens: 'pedido_os_itens',
  plano: 'plano',
  plano_recorrencia_tipo: 'plano_recorrencia_tipo',
  plano_unidade: 'plano_unidade',
  pmoc_ambiente: 'pmoc_ambiente',
  pmoc_andar: 'pmoc_andar',
  pmoc_area_climatizada: 'pmoc_area_climatizada',
  pmoc_capacidade: 'pmoc_capacidade',
  pmoc_componente: 'pmoc_componente',
  pmoc_componente_defeitos: 'pmoc_componente_defeitos',
  pmoc_fluido_refrigerante: 'pmoc_fluido_refrigerante',
  pmoc_identificacao_tagtombo: 'pmoc_identificacao_tagtombo',
  pmoc_tensao: 'pmoc_tensao',
  pmoc_tipo_atividade: 'pmoc_tipo_atividade',
  pmoc_tipo_equipamento: 'pmoc_tipo_equipamento',
  produto: 'produto',
  produto_complexidade: 'produto_complexidade',
  produto_composicao: 'produto_composicao',
  produto_fabricante: 'produto_fabricante',
  produto_fator: 'produto_fator',
  produto_grupo: 'produto_grupo',
  produto_modelo: 'produto_modelo',
  produto_subgrupo: 'produto_subgrupo',
  produto_tabela_preco: 'produto_tabela_preco',
  produto_unidade_medida: 'produto_unidade_medida',
  profissao: 'profissao',
  relatorio_customizado: 'relatorio_customizado',
  relatorio_termo_garantia: 'relatorio_termo_garantia',
  servico: 'servico',
  servico_categoria: 'servico_categoria',
  servico_motivos: 'servico_motivos',
  servico_setlist: 'servico_setlist',
  servico_setlist_itens: 'servico_setlist_itens',
  servico_status: 'servico_status',
  situacao: 'situacao',
  solicitacao_fim_status: 'solicitacao_fim_status',
  solicitacao_financeiro: 'solicitacao_financeiro',
  system_access_log: 'system_access_log',
  system_change_log: 'system_change_log',
  system_document: 'system_document',
  system_document_category: 'system_document_category',
  system_document_group: 'system_document_group',
  system_document_user: 'system_document_user',
  system_group: 'system_group',
  system_group_program: 'system_group_program',
  system_message: 'system_message',
  system_notification: 'system_notification',
  system_preference: 'system_preference',
  system_program: 'system_program',
  system_request_log: 'system_request_log',
  system_sql_log: 'system_sql_log',
  system_unit: 'system_unit',
  system_user: 'system_user',
  system_user_group: 'system_user_group',
  system_user_old_password: 'system_user_old_password',
  system_user_program: 'system_user_program',
  system_user_unit: 'system_user_unit',
  tabela_precos: 'tabela_precos',
  telefones_cliente: 'telefones_cliente',
  telefones_fornecedor: 'telefones_fornecedor',
  telefones_unidade: 'telefones_unidade',
  tipo_endereco: 'tipo_endereco',
  tipo_estoque: 'tipo_estoque',
  tipo_forma_pgto: 'tipo_forma_pgto',
  tipo_pgto: 'tipo_pgto',
  transferencia_bancaria: 'transferencia_bancaria',
  transportadora: 'transportadora'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
