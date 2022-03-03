//  Parent component show the child
// import { Children } from "./Children"

// const Parent = () => {
//     return(
//         <>
//              // This will give error with opening and closing tab `<Children></Children>`
//             <Children color="red" OnClick={ () => console.log("Clicked") } />
//         </>
//     )
// }

// export default Parent
import { ChildAsFC } from "./Children"

const Parent = () => {
    return(
        <>
            <ChildAsFC color="red" OnClick={ () => console.log("Clicked") }>
                hi kdjkj
            </ChildAsFC>
        </>
    )
}

export default Parent