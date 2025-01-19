interface CategoryInputProps {
  selected?: boolean
  label: string
  onClick: (value: string) => void
}

const CategoryInput = ({ selected, label, onClick }: CategoryInputProps) => {
  return (
    <div
      className={`b-1 flex cursor-pointer flex-col
      items-center rounded-xl border-2  p-4 transition
      hover:border-slate-500
      ${selected ? 'border-slate-500' : 'border-slate-200'}
      `}
      onClick={() => onClick(label)}
      key={label}
    >
      <div className="font-medium">{label}</div>
    </div>
  )
}

export default CategoryInput
