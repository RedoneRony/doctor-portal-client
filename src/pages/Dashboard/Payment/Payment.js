import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

function Payment() {
  const { appointmentId } = useParams();
  const [appointment, setAppintment] = useState();
  console.log(appointment);

  useEffect(() => {
    fetch(`http://localhost:5000/appointments/${appointmentId}`)
      .then((res) => res.json())
      .then((data) => setAppintment(data));
  }, [appointmentId]);
  return (
    <div>
      <h2>
        Please pay for: {appointment.patientName} for {appointment.serviceName}
      </h2>
      <h4> pay: ${appointment.price}</h4>
    </div>
  );
}

export default Payment;
