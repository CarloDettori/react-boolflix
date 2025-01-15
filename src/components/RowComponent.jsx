import CardComponent from "./CardComponent";

function RowComponent(content) {
    let items = content.content
    let title = content.rowTitle

    console.log("content", items)
    console.log("title", title)

    return (<>
        <h1 key={title}>{title}</h1>
        <div className="row flex-nowrap overflow-x-scroll nobar">



            {items.map((item) => {
                return <div key={item.id} className="col-12 col-md-4 col-lg-3"><CardComponent key={item.id} el={item} /></div>
            })}

        </div></>
    )
}

export default RowComponent;
