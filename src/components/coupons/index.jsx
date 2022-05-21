import '../../styles/coupons.css'
import { useState } from 'react'
import DataTable from 'react-data-table-component'
import GenericModal from '../genericModal';
import { Button, Modal, Form, Row, Col, InputGroup, Collapse} from 'react-bootstrap';

class Coupon {
    constructor(id,code,bonReduction,conditions, utilisation, program, expiration) {
        this.id = id;
        this.code = code;
        this.bonReduction = bonReduction;
        this.conditions = conditions;
        this.utilisation = utilisation;
        this.program = program;
        this.expiration = expiration;
    }
}

const columns = [
    {
        name: 'Code',
        selector: row => row.code,
    },
    {
        name: 'Bon de réduction ',
        selector: row => row.bonReduction,
    },
    {
        name: 'Condition',
        selector: row => row.conditions,
    },
    {
        name: 'Utilisation',
        selector: row => row.utilisation,
    },
    {
        name: 'Program(s)',
        selector: row => row.program,
    },
    {
        name: 'Expire le',
        selector: row => row.expiration,
    },
    {
        name: '',
        selector: () => 'test',
    },
];

let data = [
    new Coupon(1,'testclass','test','100%', '0', 'Toutes', '01/01/0001'),
    new Coupon(2,'AZER50','azer','50% de réduction', '0', 'Toutes', '15/03/1989'),
    new Coupon(3,'AZER25','azer','25% de réduction', '1/25', 'Toutes', '15/03/2020'),
    new Coupon(4,'AZER35','azer','35% de réduction', '25/25', 'Toutes', '15/03/2020')
]



function Coupons(props){
    const [search, setSearch] = useState('');
    const [showModal, toggle] = useState(false);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const filteredData =  data.filter(item => 
        item.bonReduction.toLowerCase().includes(search.toLowerCase())
        || item.code.toLowerCase().includes(search.toLowerCase())
        || item.conditions.toLowerCase().includes(search.toLowerCase())
        || item.utilisation.toLowerCase().includes(search.toLowerCase())
        || item.program.toLowerCase().includes(search.toLowerCase())
        || item.expiration.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            
            {InitModalContent("Créer un bon de réduction", "Créez vos propres codes de réduction pour offrir des promotions à vos clients.",showModal,toggle)}

            <h1>Bons de réduction</h1>
            <div className='couponCommands'>
                <input className='inputFilterCoupon' type="text" onChange={handleSearch} placeholder="Rechercher un bon de réduction..."/>
                <button className='btnAddCoupon' onClick={() => toggle(!showModal)}>Créer un bon de réduction</button>
            </div>
            <DataTable columns={columns}
            data={filteredData}></DataTable>
        </div>
    
    )
}

function InitModalContent(titre, description, showModal, toggle){
    const [codeBon, setCodeBon] = useState('');
    const [nomBon , setNomBon] = useState('');
    const [typeReduction , setTypeReduction] = useState('');
    const [reduction , setReduction] = useState('');
    const [duree , setDuree] = useState('');
    const [expiration , setExpiration] = useState('');
    const [programs , setPrograms] = useState('');

    const [isPourcentage , setIsPourcentage] = useState(true);
    const [isMontant , setIsMontant] = useState(false);

    const [isLimite , setIsLimite] = useState(false);


    return(
        <Modal size="lg" show={showModal} onHide={() => toggle(false)}>
            <Modal.Header closeButton>
                <Modal.Title>{titre}</Modal.Title>
            </Modal.Header>

            <Form onSubmit={() => alert("submitéééé!!!")}>
                <Modal.Body>
                    <p>{description}</p>
                    <Row >
                        <Col xs={4}>
                            <Form.Label>Code du bon</Form.Label>
                            <Form.Control type="text" placeholder="E.g. FREE30OFF" />
                            <Form.Text className="text-muted">
                            Les clients devront saisir le code au moment de payer.
                            </Form.Text>
                        </Col>
                        <Col xs={8}>
                            <Form.Label>Nom du bon</Form.Label>
                            <Form.Control type="text" placeholder="Ex: Remise sur premier achat" />
                            <Form.Text className="text-muted">
                            Cela apparaîtra sur les reçus et factures des clients.
                            </Form.Text>
                        </Col>
                    </Row>

                    <Row >
                        <Col xs={4}>
                            <Form.Label>Type réduction</Form.Label>
                            <Form.Check type='radio' id='radioPourcentage' label='Pourcentage' checked={isPourcentage} onChange={() => {setIsPourcentage(true);setIsMontant(false);}}/>
                            <Form.Check type='radio' id='radioMontantFixe' label='Montant fixe' checked={isMontant} onChange={() => {setIsPourcentage(false);setIsMontant(true);}}/>
                        </Col>
                        <Col xs={4}>
                            { isPourcentage ? <div><Form.Label>Pourcentage de réduction</Form.Label>
                            <InputGroup>
                                <Form.Control type="text" />
                                <InputGroup.Text id="basic-addon1">%</InputGroup.Text>
                            </InputGroup></div> 
                            : 
                            <div><Form.Label>Montant réduction</Form.Label>
                            <InputGroup>
                                <Form.Control type="text" />
                                <InputGroup.Text id="basic-addon1">€</InputGroup.Text>
                            </InputGroup> </div>
                            }
                        </Col>
                    </Row>

                    <Row >
                        <Col xs={4}>
                            <Form.Label>Pourcentage de réduction</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option value="1">Permanente</option>
                                <option value="2" default>Une fois</option>
                                <option value="3">Plusieurs fois</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    
                    <Row >
                        <Col xs={6}>
                            <Form.Label>Expiration du bon de réduction</Form.Label>
                            <Form.Check type="checkbox" label="Limiter le nombre d'utilisation du bon de réduction" checked={isLimite} onChange={() => setIsLimite(!isLimite)}/>
                        </Col>
                    </Row>
                    <Collapse in={isLimite}>
                    <Row >
                        <Col xs={4}>
                            <InputGroup>
                                <Form.Control type="text" />
                                <InputGroup.Text id="basic-addon1">fois</InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>
                    </Collapse>

                    <Row >
                        <Col xs={12}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Affecter au(x) programmation(s)</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option value="1" default>Toutes les programmations</option>
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

export default Coupons