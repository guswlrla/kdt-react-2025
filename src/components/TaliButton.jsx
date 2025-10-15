const BTStyle = {
    blue : {
        base : "bg-blue-600",
        hover : "hover:bg-blue-800"
    },
    orange : {
        base : "bg-orange-600",
        hover : "hover:bg-orange-800"
    },
    lime : {
        base : "bg-lime-600",
        hover : "hover:bg-lime-800"
    }
}

export default function TailButton({color, caption, onHandle}) {
  const btstyle = BTStyle[color];
  return (
    <button className={`${btstyle.base} text-white rounded ${btstyle.hover} px-4 py-2`}
            onClick={onHandle}> 
      {caption}
    </button>
  )
}
