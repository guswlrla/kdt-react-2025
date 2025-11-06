const CardStyle = {
    white : {
      base : "bg-white",
      hover : "hover:bg-gray-100"
    }
}

export default function ChargeCard({color, title, num}) {
    return (
      <div>
        <div className={`block max-w-sm p-6 border ${CardStyle.base} border-gray-200 rounded-lg shadow-sm my-10`}>
          <h5 className="mb-2 text-lg font-normal tracking-tight text-gray-900">{title}</h5>
          <p className="text-2xl font-bold text-gray-700 ">{num}개</p>
        </div>
      </div>
    )
}
