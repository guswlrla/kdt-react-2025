import MyListCard from "./MyListCard";
import MyListData from "./MyListData.json";

export default function MyList() {
  // 동적으로 제어하면 react가 4개를 구분 못해서 key값을 줘야함
  // map - 요소의 길이만큼 반복
  const tags = MyListData.map(item => <MyListCard key={item.title} title={item.title} imgUrl={item.imgUrl} content={item.content}/>);
  return (
    <div className="w-8/10 grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* <MyListCard title={title} imgUrl={imgUrl} content={content}/>
      <MyListCard title={title} imgUrl={imgUrl} content={content}/>
      <MyListCard title={title} imgUrl={imgUrl} content={content}/>
      <MyListCard title={title} imgUrl={imgUrl} content={content}/> */}
      {tags}
    </div>
  )
}