import React from "react";
import {Col, Row} from "react-bootstrap";

// Action confirmation imports
import {confirmAlert} from 'react-confirm-alert';


// Main component
const Author: React.FC = (props) => {

    return (
        <li className='py-2'>
            <Row>
                <Col xs={8} md={9}>
                    <label className="my-1"/>
                </Col>
                <Col xs={4} md={3} className='icons text-right pr-0 pr-sm-2 pr-md-3'>
                    <i className='feather-edit text-warning pr-4 pr-lg-3'/>
                    <i className='feather-trash-2 text-danger pr-3 pr-lg-3' onClick={() =>
                        confirmAlert({
                            title: 'Confirm action',
                            message: 'Delete the selected author?',
                            buttons: [
                                {
                                    label: 'Yes',
                                    onClick: () => {
                                    },
                                },
                                {
                                    label: 'No',
                                    onClick: () => {
                                    },
                                }
                            ]
                        })
                    }
                    />

export default Author;
