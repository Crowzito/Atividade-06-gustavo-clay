return (
  <Pagina titulo="Conversor de Moedas">
    <Form>
      <Row md={5}>
        {/* bootstrap: */}
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
            <Form.Label>Valor convertido</Form.Label>
            <Form.Control type="number" name="moeda" value={equacao} readOnly />
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
                handleConvertion(real); // Atualizando o valor convertido
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
