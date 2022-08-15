import React, {useState, useContext, useEffect} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom';
import { GlobalContext } from "../context/GlobalState";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

export const EditUser = (props) => {
    const [selectedUser, setSelectedUser] = useState({
        id: '',
        name: ''
    });
    const { users, editUser } = useContext(GlobalContext);
    const navigate = useNavigate()
    const currentUserId = useParams();

    useEffect(() => {
        const userId = currentUserId.id;
        const selectedUser = users.find(user => user.id === userId)
        setSelectedUser(selectedUser)
    }, [currentUserId, users])

    const onSubmit = () => {
        editUser(selectedUser)
        navigate('/')
    }

    const onChange = (e) => {
        setSelectedUser({...selectedUser, [e.target.name]: e.targetValue})
    }
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" name="name" value={selectedUser.name} onChange={onChange} placeholder="Enter Name"></Input>
            </FormGroup>
            <Button type="submit">Submit</Button>
            <Link to="/" className="btn btn-danger mx-2">Cancel</Link>
        </Form>
    )
}
