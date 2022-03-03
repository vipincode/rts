interface ChildrenProps {
    color: string;
}

const Children = ({color}: ChildrenProps) => {
    return(
        <div>
            <h1>Hi there I'm from Children Component {color}</h1>
        </div>
    );
}

export default Children;