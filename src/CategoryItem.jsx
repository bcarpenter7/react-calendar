import "./CategoryItem.css"


export default function CategoryItem({category, idx}){
    return (
        <div className={` item-div-category item-${idx}`}>
            <h2>{ category.name }</h2>
        </div>
    )
}