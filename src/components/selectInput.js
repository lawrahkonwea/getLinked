export default function SelectInput({
  label, width, placeholder, name, options, value, onChange, errorMessage,
}) {
  return (
    <div className={`mid:w-full flex flex-col ${width ? `w-${width}` : 'flex-1'} mid:flex-auto `}>
      <label className="lg:text-[14px] text-[13px]">{label}</label>
      <select className="lg:mt-[11px] mt-[6px] w-full text-[12px] lg:text-[14px]" name={name} value={value} onChange={onChange}>
        <option className="text-[12px] lg:text-[initial]" value="">{placeholder}</option>
        {options && options.map((o, id) => (
          <option className="text-[12px] lg:text-[initial]" key={id} value={o.id}>{o.name}</option>
        ))}
      </select>
      {errorMessage && <p className="text-red-500 lg:mt-2 mt-[2px]">This field is required</p>}
    </div>
  );
}
