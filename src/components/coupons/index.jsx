import '../../styles/coupons.css'
import React from 'react';
import DataTable from 'react-data-table-component'
import GenericModal from '../genericModal';

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

const data = [
    {
        id: 1,
        code: 'AZER50',
        bonReduction: 'azer',
        conditions: '50% de réduction',
        utilisation: '0',
        program: 'Toutes',
        expiration: '15/03/1989',
    },
    {
        id: 2,
        code: 'AZER25',
        bonReduction: 'azer',
        conditions: '25% de réduction',
        utilisation: '1/25',
        program: 'Toutes',
        expiration: '15/03/2020',
    },
    {
        id: 3,
        code: 'AZER35',
        bonReduction: 'azer',
        conditions: '35% de réduction',
        utilisation: '25/25',
        program: 'Toutes',
        expiration: '15/03/2020',
    },
]



function Coupons(props){
    const [search, setSearch] = React.useState('');
    const [showModal, toggle] = React.useState(false);

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
            <GenericModal showModal={showModal} backdrop="static" toggle={toggle} 
                title="Créer un bon de réduction" 
                description="Créez vos propre code de réduction pour offrir des promotions à vos clients">
                    {InitModalContent()}
            </GenericModal>

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

function InitModalContent(){
    return(
        <div className='modal-form'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='form-group'>
                        <label>Code du bon</label>
                        <input className='form-control'></input>
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className='form-group'>
                        <label>Nom du bon</label>
                        <input className='form-control'></input>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='form-group'>
                        <label>Type discount</label>
                        <input className='form-control'></input>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='form-group'>
                        <label>Montant réduction</label>
                        <input className='form-control'></input>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='form-group'>
                        <label>Durée</label>
                        <input className='form-control'></input>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                <div className='form-group'>
                    <label>Expiration du bon de réduction</label>
                    <input className='form-control'></input>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='form-group'>
                        <label>Affecter au programmations(s)</label>
                        <input className='form-control'></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coupons