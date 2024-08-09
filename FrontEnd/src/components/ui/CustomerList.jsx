import { Alert, Button, Container, Table } from "react-bootstrap";
import { Header } from "../library/Header";
import { useEffect, useState } from "react";
import { fetchCustomer, removeCustomer } from "../../services/CustomerService.js";
import { ToastNotification } from "../library/ToastNotification";
import { ConfirmDialog } from "../library/ConfirmDialog";
import { useNavigate } from "react-router-dom";
import Footer from "../library/footer.jsx";
import { NavigationBar } from "./NavigationBar.jsx";

export function CustomerList() {

    const [Customers, setCustomers] = useState([]);

    const [showModal, setShowModal] = useState(false);

    const [selectedCustomerId, setSelectedCustomerId] = useState(0);

    const [showToast, setShowToast] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        getAllCustomers();
    }, []);
    const closeModal = () => {
        setShowModal(false);
    }

    const getAllCustomers = async () => {
        const response = await fetchCustomer();
        setCustomers(response.data);
    }

    const handleYesClick = async () => {
        const response = await removeCustomer(selectedCustomerId);
        if (response.status === 200) {
            setShowModal(false);
            setShowToast(true);
            getAllCustomers();
        }
    }

    const handleCloseToast = () => {
        setShowToast(false);
    }

    return (
        <>
            <NavigationBar />
            <Header title="List of Customers" />
            <Container fluid className="mb-3" >
                {
                    Customers.length === 0 ?
                        <Alert variant="danger">No Customer Exists</Alert>
                        :
                        <Table className="mt-4" striped="columns" responsive>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Customer Name</th>
                                    <th>Vehicle</th>
                                    <th>Last Service</th>
                                    <th>Last Km</th>
                                    <th>Due Date</th>
                                    <th>Due Km</th>
                                    <th>Full Service</th>
                                    <th>Oil Change</th>
                                    <th>Washing</th>
                                    <th>Charges</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Customers.map((s) => {
                                        return (
                                            <tr>
                                                <td>{s.Sr_No}</td>
                                                <td>{s.customer_name}</td>
                                                <td>{s.vehicle_name}</td>
                                                <td>{s.last_service_date}</td>
                                                <td>{s.last_km}</td>
                                                <td>{s.due_date}</td>
                                                <td>{s.due_km}</td>
                                                <td>{s.full_service}</td>
                                                <td>{s.oil_change}</td>
                                                <td>{s.washing}</td>
                                                <td>{s.charges}</td>
                                                <td>
                                                    <Button variant="danger" onClick={() => {
                                                        setShowModal(true);
                                                        setSelectedCustomerId(s.Sr_No);
                                                    }}>Delete</Button>

                                                    <Button variant="primary" onClick={() => {
                                                        navigate(`/edit-customer/${s.Sr_No}`)
                                                    }}>Edit</Button>

                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                }
            </Container>
            <ConfirmDialog
                show={showModal}
                message={`Are you sure, you want to delete ${selectedCustomerId} ?`}
                onYes={handleYesClick}
                onClose={closeModal}
            />
            <ToastNotification
                background="light"
                onClose={handleCloseToast}
                show={showToast}
                message="Customer Removed"
            />
            <Footer />
        </>
    )
}

export default CustomerList;
