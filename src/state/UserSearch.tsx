import { useState } from "react";

const users= [
    {id: 1, name: 'Ajay', age: 20},
    {id: 1, name: 'Rajesh', age: 30},
    {id: 1, name: 'Arun', age: 56},
]

const UserSerch: React.FC = () => {
    const [name, setName] = useState('')
    // This is say about user object type, it means user going to be obec like that or undefined 
    const [user, setUser] = useState<{name: string, age: number} | undefined>()

    const searchUser = () => {
        const foundUser = users.find((user) => {
            return user.name === name
        })
        setUser(foundUser)
    }

    return(
        <div>
            <h2>User Search:</h2>
            <input value={name} onChange={ e => setName(e.target.value)} />
            <button onClick={searchUser}>Serch</button>
            <div>
                {/* This means `user &&` is a condition it say if user is truthy then get the user name */}
                {/* If user is undefind it not print anything */}
                {user && user.name}
                {user && user.age}
            </div>
        </div>
    )
}

export default UserSerch;