const CardStyle = {
    white : {
      base : "bg-white",
    }
}

export default function ChargeCard({color, title, num}) {
    const cardStyle = CardStyle[color];
    return (
      <div className={`block max-w-sm p-6 border ${cardStyle.base} border-gray-200 rounded-lg shadow-sm my-10`}>
        <p className="mb-2 text-lg font-normal tracking-tight text-gray-900">{title}</p>
        <p className="text-2xl font-bold text-gray-700 ">{num}개</p>
      </div>
    )
}
