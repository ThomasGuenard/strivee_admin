import {
  Button,
  Modal,
  Form,
  Row,
  Col,
  InputGroup,
  Collapse,
} from 'react-bootstrap'
import { useState } from 'react'
import Coupon from '../../models/Coupon'

export default function CouponsModal({
  showModal,
  toggle,
  data,
  handleAddCoupon,
}) {
  const [codeBon, setCodeBon] = useState('')
  const [nomBon, setNomBon] = useState('')
  const [typeReduction, setTypeReduction] = useState('%')
  const [reduction, setReduction] = useState('')
  const [duree, setDuree] = useState('')
  const [isLimited, setIsLimited] = useState(false)
  const [maxUtilisation, setMaxUtilisation] = useState('')
  const [nbOfMonths, setNbOfMonths] = useState('')

  const [programs, setPrograms] = useState('')

  const [isPourcentage, setIsPourcentage] = useState(true)
  const [isMontant, setIsMontant] = useState(false)

  function clearFields() {
    setCodeBon('')
    setNomBon('')
    setTypeReduction('%')
    setReduction('')
    setDuree('')
    setIsLimited(false)
    setMaxUtilisation('')

    setPrograms('')

    setIsPourcentage(true)
    setIsMontant(false)
  }

  function hideModal() {
    toggle(false)
    clearFields()
  }

  return (
    <Modal size="lg" show={showModal} onHide={hideModal}>
      <Modal.Header closeButton>
        <Modal.Title>Créer un bon de réduction</Modal.Title>
      </Modal.Header>

      <Form
        onSubmit={(e) => {
          console.log(e)
          e.preventDefault()
          handleAddCoupon([
            ...data,
            new Coupon(
              codeBon,
              nomBon,
              `${reduction}${typeReduction} de réduction`,
              '1',
              'Partielle',
              '15/02/1899'
            ),
          ])
          hideModal()
        }}
      >
        <Modal.Body>
          <p>
            Créez vos propres codes de réduction pour offrir des promotions à
            vos clients.
          </p>
          <Row>
            <Col xs={4}>
              <Form.Label>Code du bon</Form.Label>
              <Form.Control
                type="text"
                required="true"
                placeholder="E.g. FREE30OFF"
                value={codeBon}
                onChange={(e) => setCodeBon(e.target.value)}
              />
              <Form.Text className="text-muted">
                Les clients devront saisir le code au moment de payer.
              </Form.Text>
            </Col>
            <Col xs={8}>
              <Form.Label>Nom du bon</Form.Label>
              <Form.Control
                type="text"
                required="true"
                placeholder="Ex: Remise sur premier achat"
                value={nomBon}
                onChange={(e) => setNomBon(e.target.value)}
              />
              <Form.Text className="text-muted">
                Cela apparaîtra sur les reçus et factures des clients.
              </Form.Text>
            </Col>
          </Row>

          <Row>
            <Col xs={4}>
              <Form.Label>Type réduction</Form.Label>
              <Form.Check
                type="radio"
                id="radioPourcentage"
                label="Pourcentage"
                checked={isPourcentage}
                onChange={() => {
                  setIsPourcentage(true)
                  setIsMontant(false)
                  setTypeReduction('%')
                }}
              />
              <Form.Check
                type="radio"
                id="radioMontantFixe"
                label="Montant fixe"
                checked={isMontant}
                onChange={() => {
                  setIsPourcentage(false)
                  setIsMontant(true)
                  setTypeReduction('€')
                }}
              />
            </Col>
            <Col xs={4}>
              {isPourcentage ? (
                <Form.Label>Pourcentage de réduction</Form.Label>
              ) : (
                <Form.Label>Montant réduction</Form.Label>
              )}
              <InputGroup>
                <Form.Control
                  type="text"
                  value={reduction}
                  onChange={(e) => setReduction(e.target.value)}
                />
                <InputGroup.Text id="basic-addon1">
                  {typeReduction}
                </InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col xs={4}>
              <Form.Label>Durée</Form.Label>
              <Form.Select
                value={duree}
                onChange={(e) => setDuree(e.target.value)}
                aria-label="Default select example"
              >
                <option value="Permanente">Permanente</option>
                <option value="Une fois" default>
                  Une fois
                </option>
                <option value="Plusieurs mois">Plusieurs mois</option>
              </Form.Select>
            </Col>
            {duree === 'Plusieurs mois' ? (
              <Col xs={4}>
                <Form.Label>Nombre de mois</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="mois"
                  value={nbOfMonths}
                  onChange={(e) => setNbOfMonths(e.target.value)}
                />
              </Col>
            ) : null}
          </Row>

          <Row>
            <Col xs={6}>
              <Form.Label>Expiration du bon de réduction</Form.Label>
              <Form.Check
                type="checkbox"
                label="Limiter le nombre d'utilisation du bon de réduction"
                checked={isLimited}
                onChange={() => setIsLimited(!isLimited)}
              />
            </Col>
          </Row>
          <Collapse in={isLimited}>
            <Row>
              <Col xs={4}>
                {maxUtilisation}
                <InputGroup>
                  <Form.Control
                    type="number"
                    placeholder="-"
                    value={maxUtilisation}
                    onChange={(e) => setMaxUtilisation(e.target.value)}
                  />
                  <InputGroup.Text id="basic-addon1">fois</InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>
          </Collapse>

          <Row>
            <Col xs={12}>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Affecter au(x) programmation(s)</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option value="1" default>
                    Toutes les programmations
                  </option>
                  <option value="2">Strivee</option>
                  <option value="3">Prog George</option>
                  <option value="3">Prog Jess</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => toggle(false)}>
            Annuler
          </Button>
          <Button variant="primary" type="submit">
            Enregistrer bon de réduction
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}
