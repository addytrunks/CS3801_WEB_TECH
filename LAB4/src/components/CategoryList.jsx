function CategoryList({name, children})
{
    return (
        <div className='category-list'>
            <h1 className=''>{name}</h1>
            <ul>{children}</ul>
        </div>
    )
}
export default CategoryList;