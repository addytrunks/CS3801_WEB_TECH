function Category({name,children})
{
    return (
        <div className="category">
            <h1>{name}</h1>
            <ul>{children}</ul>
        </div>
    );
}

export default Category;