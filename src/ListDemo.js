import React, { useState } from "react";


function MemberTable({ members }) {
    return (
        <table>
            <thead>
                <td>name</td>
                <td>age</td>
            </thead>
            <tbody>
                {members.map((member) =>
                    <td>member.name</td>,
                    <td>member.age</td>
                )}
            </tbody>
        </table>
    );
}

function MemberDemo(props) {
    return (
        <div>
            <h4>All Members</h4>
            <MemberTable members={props} />
        </div>
    );
}

export default function App() {
    console.log("loaded");
    const initialMembers = [
        { name: "Peter", age: 18 },
        { name: "Hanne", age: 35 },
        { name: "Janne", age: 25 },
        { name: "Holger", age: 22 }
    ];
    const [members, setMembers] = useState(initialMembers)

    return <div><MemberDemo members={members} /></div>;
}

