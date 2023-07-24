import CategoryItem from "./CategoryItem"
import "./CategoryList.css"
export default function CategoryList({ categories }){

    return (
        <div className="list-div-categories">
        {
            categories.map((c, idx) => (
                <CategoryItem category={c} idx={idx}/>
            ))
        }
        </div>

    )
}