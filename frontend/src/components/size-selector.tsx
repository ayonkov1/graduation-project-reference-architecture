import { selectProductSize } from '../redux/actions/product-actions'
import { useMyDispatch } from '../redux/helper-functions'

type SizeSelectorProps = {
  size: string
  availability: string
  availableQuantity: number
}

const SizeSelector = ({
  size,
  availability,
  availableQuantity,
}: SizeSelectorProps) => {
  const outOfStock = availability !== 'IN_STOCK'

  const dispatch = useMyDispatch()

  const selectSize = (selector: any) => {
    dispatch(
      selectProductSize(selector.value, selector.dataset.availablequantity)
    )
  }

  return (
    <div className={`size-selector ${outOfStock ? 'not-available' : ''}`}>
      <input
        disabled={outOfStock}
        type='radio'
        id={size}
        name='size'
        value={size}
        data-availablequantity={availableQuantity}
        onChange={(e: any) => selectSize(e.target)}
      />
      <label htmlFor={size}>{size}</label>
    </div>
  )
}

export default SizeSelector
