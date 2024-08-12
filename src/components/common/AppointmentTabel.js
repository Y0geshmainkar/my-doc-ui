import React from 'react'
import ButtonCmp from './ButtonCmp';

const AppointmentTabel = ({
    appoitments, onAction }) => {
    return (
        <table style={styles.table}>
            <thead>
                <tr>
                    <th style={StyleSheet.headerCell}>Patient Name</th>
                    <th style={StyleSheet.headerCell}>Appointment Date</th>
                    <th style={StyleSheet.headerCell}>Time</th>
                    <th style={StyleSheet.headerCell}>Action</th>
                </tr>
            </thead>
            <tbody>
                {appoitments.map((appoitment, index) => (
                    <tr key={index}>
                        <td style={StyleSheet.cell}>{appoitment.patientName}</td>
                        <td style={StyleSheet.cell}>{appoitment.appoitmentDate}</td>
                        <td style={StyleSheet.cell}>{appoitment.timeFrom}-{appoitment.timeTo}</td>
                        <td style={StyleSheet.cell}>
                            <div onClick={() => onAction(appoitment)} className='btn'>
                                Book Now
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};


const styles = {
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    headerCell: {
        borderBottom: '2px solid #ddd',
        padding: '0.8rem',
        textAlign: 'left',
    },
    cell: {
        borderBottom: '1px solid #ddd',
        padding: '0.9rem',
    }
}
export default AppointmentTabel