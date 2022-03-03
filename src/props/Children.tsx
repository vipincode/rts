interface ChildrenProps {
    color: string
    OnClick: () => void
}

// Down side is opening and closing tag, its give error
//  In this way ypu can nt receve children, you need to add anotation in `interface` like `childern: jqhdjqhs`
export const Children = ({color, OnClick}: ChildrenProps) => {
    return(
        <div>
            <h1>Hi there I'm from Children Component {color}</h1>
            <button onClick={OnClick}>Click me</button>
        </div>
    )
}

// `FC` is abbeviaton of function component `FC` is same as `Function Component`
// By this you can define component that will receive children 
export const ChildAsFC: React.FC<ChildrenProps> = ({color, OnClick, children}) => {
    return (
        <div>
            {color}
            {children}
            <button onClick={OnClick}>Click me</button>
        </div>
    )
}

// ChildAsFC.displayName