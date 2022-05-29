import '../../styles/coupons.css'
import { useState, Button } from 'react'
import DataTable from 'react-data-table-component'
import CouponsModal from './couponsModal'
import Coupon from '../../models/Coupon'

export default function Coupons(props) {
  const [search, setSearch] = useState('')
  const [showModal, toggle] = useState(false)

  const columns = [
    {
      name: 'Code',
      selector: (row) => row.code,
    },
    {
      name: 'Bon de réduction ',
      selector: (row) => row.bonReduction,
    },
    {
      name: 'Condition',
      selector: (row) => row.conditions,
    },
    {
      name: 'Utilisation',
      selector: (row) => row.utilisation,
    },
    {
      name: 'Program(s)',
      selector: (row) => row.program,
    },
    {
      name: 'Expire le',
      selector: (row) => row.expiration,
    },
    {
      name: '',
      selector: (row) => (
        <button
          className="myBtn myBtnDeleteCoupon"
          onClick={() => handleDelete(row)}
        >
          Supprimer
        </button>
      ),
    },
  ]

  const [data, setData] = useState([
    new Coupon('testclass', 'test', '100%', '0', 'Toutes', '01/01/0001'),
    new Coupon(
      'AZER50',
      'azer',
      '50% de réduction',
      '0',
      'Toutes',
      '15/03/1989'
    ),
    new Coupon(
      'AZER25',
      'azer',
      '25% de réduction',
      '1/25',
      'Toutes',
      '15/03/2020'
    ),
    new Coupon(
      'AZER35',
      'azer',
      '35% de réduction',
      '25/25',
      'Toutes',
      '15/03/2020'
    ),
  ])

  const filterdeData = data.filter(
    (item) =>
      item.bonReduction.toLowerCase().includes(search.toLowerCase()) ||
      item.code.toLowerCase().includes(search.toLowerCase()) ||
      item.conditions.toLowerCase().includes(search.toLowerCase()) ||
      item.utilisation.toLowerCase().includes(search.toLowerCase()) ||
      item.program.toLowerCase().includes(search.toLowerCase()) ||
      item.expiration.toLowerCase().includes(search.toLowerCase())
  )

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleDelete = (e) => {
    console.log(e)
    setData(data.filter((item) => item.code !== e.code))
  }

  const handleAddCoupon = (addedData) => {
    setData(addedData)
  }

  return (
    <div>
      <CouponsModal
        toggle={toggle}
        showModal={showModal}
        data={data}
        handleAddCoupon={handleAddCoupon}
      />

      <h1>Bons de réduction</h1>
      <div className="couponCommands">
        <input
          className="inputFilterCoupon"
          type="text"
          onChange={handleSearch}
          placeholder="Rechercher un bon de réduction..."
        />
        <button
          className="myBtn myBtnAddCoupon"
          onClick={() => {
            toggle(!showModal)
          }}
        >
          Créer un bon de réduction
        </button>
      </div>
      <DataTable columns={columns} data={filterdeData}></DataTable>
    </div>
  )
}
