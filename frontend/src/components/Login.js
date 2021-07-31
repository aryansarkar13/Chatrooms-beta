import React,{Fragment, useRef} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import {v4 as uuidv4} from 'uuid'

export default function Login({idSubmit}) {
    const idRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()
        idSubmit(idRef.current.value)

    }
    function createNewId(){
        idSubmit(uuidv4())
    }
    return (
        <Container className="align-items-center d-flex" style={{height:'100vh'}}>
            <Form onSubmit={handleSubmit} className="w-100">
                <Form.Group>
                    <Form.Label>Enter your ID</Form.Label>
                    <Form.Control type="text" ref={idRef} required/>
                </Form.Group>
                <Button type="submit" className="mt-4" style={{marginRight:'1em'}}>Login</Button>
                <Button onClick={createNewId} variant="secondary" className="mt-4">Create a new ID</Button>
            </Form>
        </Container>
    )
}
