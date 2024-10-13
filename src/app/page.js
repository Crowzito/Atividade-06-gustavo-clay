"use client";

import Pagina from "@/components/Pagina";
import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

export default function CambistaPage() {
  const [moeda, setMoeda] = useState("");
  const [taxaConversao, setTaxaConversao] = useState("");
  const [real, setReal] = useState(1);
  const [equacao, setEquacao] = useState(0);

  function handleMoeda(moedaSelecionada) {
    let taxa = "";
    if (moedaSelecionada === "dolar") {
      taxa = "Taxa de conversão de dólar: 1 real = 0,20 dólares";
    } else if (moedaSelecionada === "euro") {
      taxa = "Taxa de conversão de euro: 1 real = 0,18 euros";
    } else if (moedaSelecionada === "bitcoin") {
      taxa = "Taxa de conversão de bitcoin: 1 real = 0,000003 bitcoins";
    } else {
      taxa = "";
    }
    setTaxaConversao(taxa);
  }

  function handleImage(moeda) {
    if (moeda === "dolar") {
      return "/dolar.png";
    } else if (moeda === "euro") {
      return "/euro.png";
    } else if (moeda === "bitcoin") {
      return "/bitcoin.png";
    } else {
      return "/cambio.jpg";
    }
  }

  function handleConvertion(value) {
    let valor = 0;
    if (moeda === "dolar") {
      valor = value * 0.2;
    } else if (moeda === "euro") {
      valor = value * 0.18;
    } else if (moeda === "bitcoin") {
      valor = value * 0.000003;
    }
    setEquacao(valor);
    setReal(value);
  }

  function limpar() {
    setMoeda("");
    setTaxaConversao("");
    setReal(1);
    setEquacao(0);
  }

  return (
    <Pagina titulo="Conversor de Moedas">
      <Form>
        <Row md={5}>
          {/* bootstrap:  */}
          <Col md={5} className="py-2">
            <Form.Group>
              <Form.Label>{taxaConversao}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Real</Form.Label>
              <Form.Control
                type="number"
                name="real"
                value={real}
                onChange={(e) => {
                  handleConvertion(e.target.value);
                }}
                step={0.01}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>{moeda}</Form.Label>
              <Form.Control
                type="number"
                name="moeda"
                value={equacao}
                readOnly
              />
            </Form.Group>
          </Col>
          <Col md={5} className="py-2">
            <Form.Group className="mb-3">
              <Form.Label>Escolha a moeda:</Form.Label>
              <Form.Select
                name="moeda"
                value={moeda}
                onChange={(e) => {
                  setMoeda(e.target.value);
                  handleMoeda(e.target.value);
                  handleConvertion(real); // Passando o valor atual de "real"
                }}
              >
                <option value="">Selecione</option>
                <option value="dolar">Dólar</option>
                <option value="euro">Euro</option>
                <option value="bitcoin">Bitcoin</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="text-end">
              <Button onClick={limpar}>Limpar</Button>
            </Form.Group>
          </Col>
          <Col md={2} className="py-2">
            <Card.Img src={handleImage(moeda)} />
          </Col>
        </Row>
      </Form>
    </Pagina>
  );
}
