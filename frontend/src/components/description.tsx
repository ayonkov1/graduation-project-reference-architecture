type DescriptionProps = {
  subtitle: string
  text: string
}

const Description = ({ subtitle, text }: DescriptionProps) => {
  return (
    <div className='description'>
      <h2>{subtitle}</h2>
      <span>{text}</span>
    </div>
  )
}

export default Description
