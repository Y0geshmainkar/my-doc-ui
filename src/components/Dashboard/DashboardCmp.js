import React from 'react'
import AppointmentTabel from '../common/AppointmentTabel';

export default function DashboardCmp() {
    const handleBook = (appoitment) =>{
        alert('Appointment booked for ${appoitment.timeFrom}!');
        console.log(appoitment)
    }

    const appoitments =[
        {
            patientName: "John Doe",
            appoitmentDate: '2024-08-01',
            timeFrom:'10:00 AM',
            timeTo:'11:00 AM'
        },
        {
            patientName: "John Doe",
            appoitmentDate: '2024-08-01',
            timeFrom:'11:00 AM',
            timeTo:'1:00 PM'
        },
        {
            patientName: "John Doe",
            appoitmentDate: '2024-08-01',
            timeFrom:'11:00 AM',
            timeTo:'1:00 PM'
        },
        {
            patientName: "John Doe",
            appoitmentDate: '2024-08-01',
            timeFrom:'11:00 AM',
            timeTo:'1:00 PM'
        },{
            patientName: "John Doe",
            appoitmentDate: '2024-08-01',
            timeFrom:'11:00 AM',
            timeTo:'1:00 PM'
        },{
            patientName: "John Doe",
            appoitmentDate: '2024-08-01',
            timeFrom:'11:00 AM',
            timeTo:'1:00 PM'
        }
        

    ]
  return (
    <div>
      <h1>Doctor Dashboard</h1>
        <AppointmentTabel appoitments={appoitments} onAction={handleBook}/>
    </div>
  )
}
