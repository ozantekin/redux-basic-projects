import { useSelector, useDispatch } from 'react-redux'

import './modal.styles.css'

import { closeModal } from '../../stores/modal'

import modals from '../../modals'

export default function Modal() {
  const dispatch = useDispatch()

  const { name, data } = useSelector((state) => state.modal)
  const modal = modals.find((m) => m.name === name)

  const close = () => {
    dispatch(closeModal())
  }

  return (
    <div className='modal-container'>
      <div className='modal-inner'>
        <modal.element close={close} data={data} />
      </div>
    </div>
  )
}
