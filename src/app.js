import { EventosDatabase } from './database/EventosDatabase.js';
import express from "express";

const db = new EventosDatabase();
const app = express();

app.use(express.json());

app.get("/eventos", (req, res) => {
  res.send("Lista de eventos");
  let eventos = db.listarTodos();

  const { ativo, modalidade, vagasMin } = req.query;

  if (ativo === "true") {
    eventos = eventos.filter(e => e.ativo === true);
  }

  if (modalidade) {
    eventos = eventos.filter(e => e.modalidade === modalidade);
  }

  if (vagasMin) {
    eventos = eventos.filter(e => e.vagasDisponiveis >= Number(vagasMin));
  }

  res.json(eventos);
});

/*
Buscar evento por ID
*/
app.get("/eventos/:id", (req, res) => {
  const id = Number(req.params.id);
  const evento = db.buscarPorId(id);

  if (!evento) {
    return res.status(404).json({ erro: "Evento não encontrado" });
  }

  res.json(evento);
});

/*
Criar evento
*/
app.post("/eventos", (req, res) => {
  const { titulo, descricao, vagas, modalidade, cargaHoraria } = req.body;

  if (!titulo || !descricao || !vagas || !modalidade || !cargaHoraria) {
    return res.status(400).json({
      erro: "Campos obrigatórios: titulo, descricao, vagas, modalidade, cargaHoraria"
    });
  }

  const novoEvento = db.inserir({
    titulo,
    descricao,
    vagas,
    modalidade,
    cargaHoraria
  });

  res.status(201).json(novoEvento);
});

/*
Atualizar evento
*/
app.put("/eventos/:id", (req, res) => {
  const id = Number(req.params.id);
  const eventoAtualizado = db.atualizar(id, req.body);

  if (!eventoAtualizado) {
    return res.status(404).json({ erro: "Evento não encontrado" });
  }

  res.json(eventoAtualizado);
});

/*
Remover evento
*/
app.delete("/eventos/:id", (req, res) => {
  const id = Number(req.params.id);
  const removido = db.remover(id);

  if (!removido) {
    return res.status(404).json({ erro: "Evento não encontrado" });
  }

  res.json({ mensagem: "Evento removido com sucesso" });
});

/*
Realizar inscrição
Reduz vagas disponíveis
*/
app.post("/eventos/:id/inscricao", (req, res) => {
  const id = Number(req.params.id);
  const evento = db.reduzirVaga(id);

  if (!evento) {
    return res.status(400).json({
      erro: "Evento não encontrado ou sem vagas disponíveis"
    });
  }

  res.json({
    mensagem: "Inscrição realizada com sucesso",
    evento
  });
});

/*
Cancelar evento
*/
app.patch("/eventos/:id/cancelar", (req, res) => {
  const id = Number(req.params.id);

  const evento = db.atualizar(id, { ativo: false });

  if (!evento) {
    return res.status(404).json({ erro: "Evento não encontrado" });
  }

  res.json({
    mensagem: "Evento cancelado",
    evento
  });
});


export default app;